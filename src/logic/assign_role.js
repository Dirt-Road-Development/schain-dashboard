import { ethers } from 'ethers';
import * as Config from '../config';

class AssignRole {

    _contracts = new Config.Contracts();

    /// Tx Type => normal, multisig, marionette
    async buildTransaction(ethereum, contract, role, to, txType) {
        const _config = this._contracts.getConfig(contract);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log("Provider: ", provider);
        // await provider.send("eth_requestAccounts", []);
        console.log("Signer: ", provider.getSigner());
        const _contract = new ethers.Contract(_config['address'], _config['abi'], provider.getSigner());
        console.log("COntract: ", _contract);
        const roleHash = await this._getRole(role, contract, _contract);
        const transactionHash = await this._sendTransaction(to, _contract, roleHash, txType, provider);
        console.log("Transaction Hash");
        setTimeout(async() => {
            console.log("Has Role: ", await _contract.callStatic.hasRole(roleHash, to));
        }, 3000);
        // const unsignedTxCopy = {
        //     ...unsignedTx
        // };
        // delete unsignedTx.from;
        // const serializedUnsignedTx = ethers.utils.serializeTransaction(unsignedTx);
        // const txHash = ethers.utils.keccak256(serializedUnsignedTx);
        // return [unsignedTxCopy, txHash];

    }

    async _sendTransaction(to, contract, roleHash, txType, provider) {
        console.log("Tx Type: ", txType);
        if (txType === 'multisig') {
            return await this._msg(to, contract, roleHash, provider);
        } else if (txType === 'marionette') {
            return await this._marionette(to, contract, roleHash, provider);
        } else {
            return await this._normal(to, contract, roleHash)
        }
    }

    async _msg(to, contract, roleHash, provider) {
        const msgWallet = this._buildMultiSigWallet(provider);
        try {
            return await msgWallet.submitTransaction(
                contract.address,
                '0',
                contract.interface.encodeFunctionData(
                    'grantRole',
                    [roleHash, to]
                )
            );
        } catch (err) {
            throw new Error(err);
        }
    }
    async _marionette(to, contract, roleHash, provider) {
        const marionette = this._buildMarionette(provider);
        try {
            return await marionette.execute(
                contract.address,
                '0',
                contract.interface.encodeFunctionData(
                    'grantRole',
                    [roleHash, to]
                )
            );
        } catch (err) {
            throw new Error(err);
        }
    }
    async _normal(to, contract, roleHash) {
        try {
            return await contract.grantRole(roleHash, to);
        } catch (err) {
            throw new Error(err);
        }
    }

    async _getRole(role, contractName, contract) {
        if (role === 'DEFAULT_ADMIN_ROLE') {
            return '0x0000000000000000000000000000000000000000000000000000000000000000';
        }
        if (contractName === 'etherbase') {
            return await contract.callStatic.ETHER_MANAGER_ROLE();
        } else if (contractName === 'config_controller') {
            if (role === 'DEPLOYER_ROLE') {
                return await contract.callStatic.DEPLOYER_ROLE();
            } else {
                return await contract.callStatic.MTM_ADMIN_ROLE();
            }
        } else if (contractName === 'marionette') {
            if (role === 'PUPPETEER_ROLE') {
                return await contract.callStatic.PUPPETEER_ROLE();
            } else {
                return await contract.callStatic.IMA_ROLE();
            }
        }
    }

    _buildMultiSigWallet(provider) {
        const _config = this._contracts.getConfig('multisig_wallet');
        return new ethers.Contract(
            _config['address'],
            _config['abi'],
            provider.getSigner()
        );
    }

    _buildMarionette(provider) {
        const _config = this._contracts.getConfig('marionette');
        return new ethers.Contract(
            _config['address'],
            _config['abi'],
            provider.getSigner()
        );
    }
}

export {
    AssignRole
}
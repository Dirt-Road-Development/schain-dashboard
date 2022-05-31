import { ethers } from 'ethers';
import * as Config from '../config';
import { Utils } from './utils';

class AssignRole extends Utils {

    _contracts = new Config.Contracts();

    /// Tx Type => normal, multisig, marionette
    async buildTransaction(ethereum, contract, role, to, txType) {
        const _config = this._contracts.getConfig(contract);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
    
        const _contract = new ethers.Contract(_config['address'], _config['abi'], provider.getSigner());
    
        const roleHash = await this._getRole(role, contract, _contract);
        const transactionHash = await this._sendTransaction(to, _contract, roleHash, txType, provider);

        console.log("--------------EVENTS--------------")
        for (let event of transactionHash.events) {
            if (event.event != undefined) {
                console.log(`${event.event}(${event.args})`);
                console.log("Receipt: ", await event.getTransactionReceipt());
            }
        }
        console.log("----------------------------------")
        console.log(`Gas used: ${transactionHash.gasUsed}`)
        console.log(`Tx hash: ${transactionHash.transactionHash}`)

        let hasRole = await _contract.callStatic.hasRole(roleHash, to);
        return {
            transactionHash,
            hasRole
        }

    }

    async _sendTransaction(to, contract, roleHash, txType, provider) {
        console.log("Contract: ", contract);
        console.log("Tx Type: ", txType);
        if (txType === 'multisig') {
            return await this._msg(to, contract, roleHash, provider);
        } else if (txType === 'marionette') {
            return await this._marionette(to, contract, roleHash, provider);
        } else if (txType === 'normal') {
            return await this._normal(to, contract, roleHash)
        } else if (txType === 'msg_marionette') {
            return await this._msgMarionette(to, contract, roleHash, provider);
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
            )
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

    async _msgMarionette(to, contract, roleHash, provider) {
        console.log("Contract Address: ", contract.address);
        const _msgWalletC = this._buildMultiSigWallet(provider);
        const _marionetteC = this._buildMarionette(provider);
        try {
            return await (await _msgWalletC.submitTransaction(
                _marionetteC.address,
                '0',
                _marionetteC.interface.encodeFunctionData(
                    "execute",
                    [
                        contract.address,
                        '0',
                        contract.interface.encodeFunctionData(
                            'grantRole',
                            [roleHash, to]
                        )
                    ]
                ), { gasLimit: 5000000 }
            )).wait();
        } catch (err) {
            throw new Error(err);
        }
    }

    async _getRole(role, contractName, contract) {
        console.log("GET ROLE -- ASIGNEE");
        if (role === 'DEFAULT_ADMIN_ROLE') {
            console.log("DEFAULT_ADMIN_ROLE");
            return '0x0000000000000000000000000000000000000000000000000000000000000000';
        }
        if (contractName === 'etherbase') {
            console.log("ETHER_MANAGER_ROLE");
            return await contract.callStatic.ETHER_MANAGER_ROLE();
        } else if (contractName === 'config_controller') {
            console.log("DEPLOYER_ROLE");
            if (role === 'DEPLOYER_ROLE') {
                console.log("DEPLOYER_ROLE");
                return await contract.callStatic.DEPLOYER_ROLE();
            } else {
                console.log("MTM_ADMIN_ROLE");
                return await contract.callStatic.MTM_ADMIN_ROLE();
            }
        } else if (contractName === 'marionette') {
            if (role === 'PUPPETEER_ROLE') {
                console.log("PUPPETEER_ROLE");
                return await contract.callStatic.PUPPETEER_ROLE();
            } else {
                console.log("IMA_ROLE");
                return await contract.callStatic.IMA_ROLE();
            }
        }
    }

    
}

export {
    AssignRole
}
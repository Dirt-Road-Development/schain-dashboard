import { ethers } from 'ethers';
import chains from "../../config/chains"
import { Utils } from "../utils";

class SChainAutoDeployment extends Utils {

    _tokenContracts = {}

    constructor(provider, account) {
        super();
        this._account = account;
        const _config_token_manager_erc1155 = this._contracts.getConfig('token_manager_erc1155');
        const _config_token_manager_erc20 = this._contracts.getConfig('token_manager_erc20');
        const _config_token_manager_erc721 = this._contracts.getConfig('token_manager_erc721');
        const _config_token_manager_eth = this._contracts.getConfig('token_manager_eth');
        const _config_token_manager_erc721_with_metadata = this._contracts.getConfig('token_manager_erc721_with_metadata');
        this._tokenContracts['token_manager_erc1155'] = new ethers.Contract(_config_token_manager_erc1155.address, _config_token_manager_erc1155.abi, provider);
        this._tokenContracts['token_manager_erc20'] = new ethers.Contract(_config_token_manager_erc20.address, _config_token_manager_erc20.abi, provider);
        this._tokenContracts['token_manager_erc721'] = new ethers.Contract(_config_token_manager_erc721.address, _config_token_manager_erc721.abi, provider);
        this._tokenContracts['token_manager_eth'] = new ethers.Contract(_config_token_manager_eth.address, _config_token_manager_eth.abi, provider);
        this._tokenContracts['token_manager_erc721_with_metadata'] = new ethers.Contract(_config_token_manager_erc721_with_metadata.address, _config_token_manager_erc721_with_metadata.abi, provider);
    }

    async getStatus(contractKey) {
        try {
            return await this._tokenContracts[contractKey].callStatic.automaticDeploy();
        } catch (err) {
            throw err;
        }
    }

    async getRole(contractKey) {
        try {
            return await this._tokenContracts[contractKey].callStatic.hasRole("0x7164765a3c8bd2513bdfa0c90f1bee9606e920fbf2c9071f310263fbd818684b", "0xD2c0DeFACe000000000000000000000000000000");
        } catch (err) {
            throw err;
        }
    }

    getAllStatus() {
        return Promise.all([
            this.getStatus('token_manager_erc1155'),
            this.getStatus('token_manager_erc20'),
            this.getStatus('token_manager_erc721'),
            this.getStatus('token_manager_eth'),
            this.getStatus('token_manager_erc721_with_metadata')
        ]).then(([a, b, c, d, e]) => {
            return {
                token_manager_erc1155: a,
                token_manager_erc20: b,
                token_manager_erc721: c,
                token_manager_eth: d,
                token_manager_erc721_with_metadata: e,
            }
        }).catch((err) => {
            throw err;
        })
    }

    async getAllRoles() {
        return Promise.all([
            this.getRole('token_manager_erc1155'),
            this.getRole('token_manager_erc20'),
            this.getRole('token_manager_erc721'),
            this.getRole('token_manager_eth'),
            this.getRole('token_manager_erc721_with_metadata')
        ]).then(([a, b, c, d, e]) => {
            return {
                token_manager_erc1155: a,
                token_manager_erc20: b,
                token_manager_erc721: c,
                token_manager_eth: d,
                token_manager_erc721_with_metadata: e,
            }
        }).catch((err) => {
            throw err;
        })
    }

    async toggleDeployment(provider, key) {
        try {
            const current = await this.getStatus(key);
            const _msg = this._buildMultiSigWallet(provider);
            const _marionette = this._buildMarionette(provider);
            let _encodedData = this._tokenContracts[key].interface.encodeFunctionData(current ? 'disableAutomaticDeploy' : 'enableAutomaticDeploy');

            return await (await _msg.submitTransaction(
                _marionette.address,
                "0",
                _marionette.interface.encodeFunctionData(
                    "execute",
                    [
                        this._tokenContracts[key].address,
                        "0",
                        _encodedData
                    ]
                ), { gasLimit: 49000090 }
            )).wait()
        } catch (err) {
            console.log("Error: ", err);
            throw err;
        }
    }
}

export {
    SChainAutoDeployment
}
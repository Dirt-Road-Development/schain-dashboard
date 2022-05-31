import { ConfigController } from "./contracts/config_controller";
import { Etherbase } from "./contracts/etherbase";
import { Marionette } from "./contracts/marionette";
import { MultisigWallet } from "./contracts/multisig_wallet";
import { Utils } from "./utils";

/// Utils are Underscore

class ContractFunctions extends Utils {

    async getFreeContractDeployment(contract) {
        try {
            let isEnabled = await contract.callStatic.isFCDEnabled();
            return isEnabled;
        } catch (err) {
            return undefined;
        }
    }

    async getMultiTransactionMode(contract) {
        try {
            let isEnabled = await contract.callStatic.isMTMEnabled();
            return isEnabled;
        } catch (err) {
            return undefined;
        }
    }

    async _initializeConfigController() {
        return Promise.all([
            this._loadData('config_controller', 'freeContractDeployment', this),
            this._loadData('config_controller', 'multiTransactionMode', this)
        ]).then(([a, b]) => {
            return [a,b];
        })
        .catch((err) => {
            console.log(err);
        })
    }

    async _initializeRoles(_contracts, address) {
        try {
            return Promise.all([
                Etherbase.getRoles(_contracts[0], address),
                Marionette.getRoles(_contracts[1], address),
                ConfigController.getRoles(_contracts[2], address)
            ]).then(([a, b, c]) => {
                console.log(a, b, c);
                return {
                    'etherbase': a,
                    'marionette': b,
                    'config_controller': c
                };
            }).catch((err) => {
                throw new Error(err);
            });
        } catch (err) {
            console.error(err);
            console.error(err);
            return undefined;
        }
    }

    async _initializeMultisig(address) {
        console.log("Initializing MSG", address);
        try {
            const _msgWallet = this._buildMultiSigWallet();
            const _msgFunctions = new MultisigWallet();

            return await _msgFunctions.initialize(_msgWallet, address);
        } catch (err) {
            console.error(err);
            return undefined;
        }
    }
}

export {
    ContractFunctions
}
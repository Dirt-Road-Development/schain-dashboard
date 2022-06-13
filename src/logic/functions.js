/**
 * @license
 * 
 * SChain Dashboard
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * /**
 * @file src/logic/contracts/functions.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { ConfigController } from "./contracts/config_controller";
import { Etherbase } from "./contracts/etherbase";
import { Marionette } from "./contracts/marionette";
import { MultisigWallet } from "./contracts/multisig_wallet";
import { Utils } from "./utils";

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
            throw new Error(err);
        })
    }

    async _initializeRoles(_contracts, address) {
        try {
            return Promise.all([
                Etherbase.getRoles(_contracts[0], address),
                Marionette.getRoles(_contracts[1], address),
                ConfigController.getRoles(_contracts[2], address)
            ]).then(([a, b, c]) => {
                return {
                    'etherbase': a,
                    'marionette': b,
                    'config_controller': c
                };
            }).catch((err) => {
                throw new Error(err);
            });
        } catch (err) {
            return undefined;
        }
    }

    async _initializeMultisig(address) {
        try {
            const _msgWallet = this._buildMultiSigWallet();
            const _msgFunctions = new MultisigWallet();

            return await _msgFunctions.initialize(_msgWallet, address);
        } catch (err) {
            return undefined;
        }
    }
}

export {
    ContractFunctions
}
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
 * @file src/logic/contracts/config_controller.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { ethers } from "ethers";
import { Utils } from '../utils';
class ConfigController extends Utils {

    static async getRoles(_contract, address) {

        return Promise.all([
            _contract.callStatic.DEFAULT_ADMIN_ROLE(),
            _contract.callStatic.DEPLOYER_ROLE(),
            _contract.callStatic.MTM_ADMIN_ROLE(),
            _contract.callStatic.DEPLOYER_ADMIN_ROLE(),
        ]).then(([a, b, c, d]) => {
            return Promise.all([
                _contract.callStatic.hasRole(a, address),
                _contract.callStatic.hasRole(b, address),
                _contract.callStatic.hasRole(c, address),
                _contract.callStatic.hasRole(d, address),
            ]).then(([d, e, f, g]) => {
                return {
                    'DEFAULT_ADMIN_ROLE': d,
                    'DEPLOYER_ROLE': e,
                    'MTM_ADMIN_ROLE': f,
                    'DEPLOYER_ADMIN_ROLE': g
                }
            }).catch(err => console.log('inner', err))
        }).catch(err => console.log('outer', err));
    }

    async handleConfigController(ethereum, functionName, flip, hasRole, isOnMultisig) {
        try {
            /// 1 -> Initialize Contract with Signer
            const provider = new ethers.providers.Web3Provider(ethereum);
            const contractConfig = this._contracts.getConfig('config_controller');
            const contract = new ethers.Contract(contractConfig.address, contractConfig.abi, provider.getSigner());
            
            /// 2 -> Check Function Role [Direct/Multisig]
            let direct = hasRole;
            if (direct) {
                /// Hit Contract
                if (functionName === 'fcd') {
                    if (flip === 'enable') {
                        /// Enable FCD
                        let enableFCD = await this.enableFreeContractDeployment(contract);
                        return enableFCD;
                    } else {
                        /// Disable FCD
                        let disableFCD = await this.disableFreeContractDeployment(contract);
                        return disableFCD;
                    }
                } else {
                    if (flip === 'enable') {
                        /// Enable MTM
                        let enableMTM = await this.enableMultiTransactionMode(contract);
                        return enableMTM;
                    } else {
                        /// Disable MTM
                        let disableMTM = await this.enableMultiTransactionMode(contract);
                        return disableMTM;
                    }
                }
            } else if (isOnMultisig) {
                let selectedFunction = this._getSelectedFunction(functionName, flip);
                let handleChange = await this._handleViaMultisig(provider, contract, selectedFunction);
                return handleChange;
            } else {
                throw new Error('Forbidden Action');
            }
            /// 4 -> Return Tx Hash
        } catch (err) {
            console.log("Error: ", err);
            throw new Error(err);
        }
    }

    _getSelectedFunction(functionName, flip) {
        if (flip === 'enable') {
            return functionName === 'fcd' ? 'enableFreeContractDeployment' : 'enableMTM';
        } else {
            return functionName === 'fcd' ? 'disableFreeContractDeployment': 'disableMTM';
        }
    }

    async enableFreeContractDeployment(contract) {
        try {
            return await contract.enableFreeContractDeployment({
                gasLimit: 500000
            });
        } catch (err) {
            throw new Error(err);
        }
    }
    async enableMultiTransactionMode(contract) {
        try {
            return await contract.enableMTM({
                gasLimit: 500000
            });
        } catch (err) {
            throw new Error(err);
        }
    }
    async disableFreeContractDeployment(contract) {
        try {
            return await contract.disableFreeContractDeployment({
                gasLimit: 500000
            });
        } catch (err) {
            throw new Error(err);
        }
    }
    async disableMultiTransactionMode(contract) {
        try {
            return await contract.disableMTM({
                gasLimit: 500000
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    async _handleViaMultisig(provider, contract, selectedFunction) {
        const msgWallet = new this._buildMultiSigWallet(provider);
        const marionette = new this._buildMarionette(provider);
        try {
            return await (await msgWallet.submitTransaction(
                marionette.address,
                '0',
                marionette.interface.encodeFunctionData(
                    "execute",
                    [
                        contract.address,
                        '0',
                        contract.interface.encodeFunctionData(
                            selectedFunction
                        )
                    ]
                ), { gasLimit: 5000000 }
            )).wait();
        } catch (err) {
            throw new Error(err);
        }
        
    }
}

export {
    ConfigController
}
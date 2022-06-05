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
 * @file src/logic/assign_role.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { ethers } from 'ethers';
import * as Config from '../config';
import { Utils } from './utils';

class AssignRole extends Utils {

    _contracts = new Config.Contracts();

    /// Tx Type => normal, multisig, marionette
    async buildTransaction(ethereum, contract, role, to, txType) {
        const _config = this._contracts.getConfig(contract);
        const provider = new ethers.providers.Web3Provider(ethereum);
        console.log(provider.getSigner())
        const _contract = new ethers.Contract(_config['address'], _config['abi'], provider.getSigner());
    
        const roleHash = await this._getRole(role, contract, _contract);
        const transactionHash = await this._sendTransaction(to, _contract, roleHash, txType, provider);

        let hasRole = await _contract.callStatic.hasRole(roleHash, to);
        console.log(hasRole);
        return {
            transactionHash,
            hasRole
        }

    }

    async _sendTransaction(to, contract, roleHash, txType, provider) {
        if (txType === 'multisig') {
            return await this._msg(to, contract, roleHash, provider);
        } else if (txType === 'marionette') {
            return await this._marionette(to, contract, roleHash, provider);
        // } else if (txType === 'normal') {
        //     return await this._normal(to, contract, roleHash, provider)
        // } else if (txType === 'msg_marionette') {
        } else {
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
    async _normal(to, contract, roleHash, provider) {
        try {
            // console.log(contract);
            // console.log(ethers.utils.isHexString(contract.interface.encodeFunctionData(
            //     'addToWhitelist',
            //     [
            //         // roleHash,
            //         to
            //     ]
            // )))
            let receipt =  await (await provider.sendTransaction({
                to: contract.address,
                value: '0',
                data: contract.interface.encodeFunctionData(
                    'addToWhitelist',
                    [
                        to
                    ]
                )
            })).wait();
            // console.log(contract);
            // console.log(roleHash);
            // let dma = await contract.callStatic.DEFAULT_ADMIN_ROLE();
            // console.log(await contract.hasRole(dma, provider.getSigner().address));
            // let estimate = await contract.estimateGas.grantRole(roleHash, to);
            // let receipt = await (await contract.addToWhitelist(to, {
            //     gasPrice: ethers.utils.hexlify(10000000),
            //     gasLimit: ethers.utils.hexlify(50000000)
            // })).wait();

            
            console.log("Receipt: ", receipt);
            console.log("--------------EVENTS--------------")
            for (let event of receipt.events) {
                if (event.event != undefined) {
                    console.log(`${event.event}(${event.args})`);
                }
            }
            console.log("----------------------------------")
            console.log(`Gas used: ${receipt.gasUsed}`)
            console.log(`Tx hash: ${receipt.transactionHash}`)

                
            // });
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }

    async _msgMarionette(to, contract, roleHash, provider) {
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
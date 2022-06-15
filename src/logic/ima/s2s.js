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
 * @file src/logic/ima/s2s.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { ethers } from "ethers"
import chains from "../../config/chains"
import { Utils } from "../utils";

class Skale2Skale extends Utils {

    constructor(originId, targetId, type) {
        super();
        this.type = type;
        this.originChain = chains.find((chain) => chain.id === originId);
        this.targetChain = chains.find((chain) => chain.id === targetId);
        this.originProvider = new ethers.providers.JsonRpcProvider(this.originChain.rpcUrls.default);
        this.targetProvider = new ethers.providers.JsonRpcProvider(this.targetChain.rpcUrls.default);
        this.contractConfig = this._contracts.getConfig(`token_manager_linker`);
        this.originContract = new ethers.Contract(this.contractConfig.address, this.contractConfig.abi, this.originProvider);
        this.targetContract = new ethers.Contract(this.contractConfig.address, this.contractConfig.abi, this.targetProvider);
    }

    async checkS2SConnection() {
        return Promise.all([
            this.originContract.callStatic.hasSchain(this.targetChain.name.toLowerCase()),
            this.targetContract.callStatic.hasSchain(this.originChain.name.toLowerCase())
        ]).then((res) => {
            return {
                origin: res[0],
                target: res[1]
            }
        }).catch((err) => {
            throw new Error(err);
        });
    }

    async connectSChain(ethereum, isMe) {
        const provider = new ethers.providers.Web3Provider(ethereum);

        let contract = isMe === 'origin' ? this.originContract : this.targetContract;
        let chainName = isMe === 'origin' ? this.targetChain.name.toLowerCase() : this.originChain.name.toLowerCase();
        let localProvider = isMe === 'origin' ? this.originProvider : this.targetProvider;
        try {
            /// 1 -> Create Multisig
            const _msg = this._buildMultiSigWallet(provider);
            /// 2 -> Create Marionette
            const _marionette = this._buildMarionette(localProvider);
            const _messageProxy = this._contracts.getConfig('message_proxy_chain');
            const _contract = new ethers.Contract(_messageProxy.address, _messageProxy.abi, provider);
            const CHAIN_CONNECTOR_ROLE = await _contract.callStatic.CHAIN_CONNECTOR_ROLE();
            const hasChainConnectorRole = await _contract.callStatic.hasRole(CHAIN_CONNECTOR_ROLE, contract.address);
            console.log("Has Chain Connector Role: ", hasChainConnectorRole);
            if (!hasChainConnectorRole) {
                let encodeRoleAssignment = await this._encodeSchainConnection(_contract, 'grantRole', [CHAIN_CONNECTOR_ROLE, contract.address]);
                let assignChainConnectorRole = await this._sendTransaction(encodeRoleAssignment, _marionette, _msg, _messageProxy);
                const hasChainConnectorRole2 = await _contract.callStatic.hasRole(CHAIN_CONNECTOR_ROLE, _marionette.address);
                console.log("Has Chain Connector Role2: ", hasChainConnectorRole2);
            }
            const ROLE = await contract.callStatic.REGISTRAR_ROLE()
            console.log("HAS ROLE: ", await contract.callStatic.hasRole(ROLE, _marionette.address));
            /// 3 -> Encode Transaction
            console.log(chainName);
            const _encodedTx = this._encodeSchainConnection(contract, 'connectSchain', [chainName]);
            console.log(1, _encodedTx);
            /// 4 -> Submit Waited Transaction via MSG -> Marionette -> Encoded Tx
            let receipt = await this._sendTransaction(_encodedTx, _marionette, _msg, contract);
            
            console.log("--------------EVENTS--------------")
            for (let event of receipt.events) {
                if (event.event != undefined) {
                    console.log(`${event.event}(${event.args})`);
                    console.log("Receipt: ", await event.getTransactionReceipt());
                }
            }
            console.log("----------------------------------")
            console.log(`Gas used: ${receipt.gasUsed}`)
            console.log(`Tx hash: ${receipt.transactionHash}`)
            console.log(`Receipt: `, await provider.getTransactionReceipt(receipt.transactionHash));

            console.log(2, receipt);
            let _check = isMe === 'origin' ? await this.originContract.callStatic.hasSchain(this.targetChain.name.toLowerCase()) : await this.targetContract.callStatic.hasSchain(this.originChain.name.toLowerCase());
            console.log(3, _check);
            return {
                txHash: receipt,
                isConnected: _check
            };
        } catch (err) {
            console.log("ERROR: ", err);
            throw new Error(err);
        }
    }

    async _sendTransaction(encodedData, marionette, multisig, contract) {
        try {
            /// Send Tx Via Multisig to Marionette
            return await (await multisig.submitTransaction(
                marionette.address,
                "0",
                marionette.interface.encodeFunctionData(
                    "execute",
                    [
                        contract.address,
                        "0",
                        encodedData
                    ]
                ), { gasLimit: 49000090 }
            )).wait();
        } catch (err) {
            console.log("Send Error: ", err);
            throw new Error(err);
        }
    }

    _encodeSchainConnection(contract, functionName, args) {
        try {
            return contract.interface.encodeFunctionData(
                functionName,
                args
            );
        } catch (err) {
            throw new Error(err);
        }
    }
}

export {
    Skale2Skale
}
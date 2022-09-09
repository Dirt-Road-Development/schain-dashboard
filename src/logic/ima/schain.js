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
 * @file src/logic/ima/schain.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { ethers } from "ethers"
import { MAINNET_RPC } from "../../config";
import { Utils } from '../utils';

class IMASchain extends Utils {

    constructor(ethereum, type) {
        super();
        this.type = type;
        this.provider = new ethers.providers.Web3Provider(ethereum);
        const config = this._contracts.getConfig(`token_manager_${type}`);
        this.tokenManager = new ethers.Contract(config.address, config.abi, this.provider);
        this.mainnetProvider = new ethers.providers.JsonRpcProvider(MAINNET_RPC);
    }

    async registerToken(chainName, originToken, targetToken) {
        try {
            /// 0 -> Build Necessary Configuration Contracts
            const _marionette = this._buildMarionette(this.provider);
            const _multisig_wallet = this._buildMultiSigWallet(this.provider);
            /// 1 -> Confirm Token is Registered on Mainnet
            
            const isRegisteredOnMainnet = await this._checkMainnetRegistration(chainName, originToken);
            if (!isRegisteredOnMainnet) {
                throw new Error('Token Not Registered on Mainnet');
            }
            
            /// 2 -> Check if Token Is Already Mapping
            const isMappedClonePre = await this._checkSchainMapping(originToken, targetToken);
            /// If Added, Return Success and Already Added
            if (isMappedClonePre) {
                return {
                    err: null,
                    success: true,
                    message: 'Token already mapped'
                };
            }
            /// 3 -> Encode Function Data via TokenManager dynamic via Token Type
            const _encodedTxData = this._encodeFunctionData(originToken, targetToken, chainName);
            /// 4 -> Send Transaction via Marionette via Multisig of Encoded Tx Data
            const _txHash = await this._sendTransaction(_encodedTxData, _marionette, _multisig_wallet);
            /// 5 -> Return Transaction Hash and Success or Failure to Update State
            const isMappedClonePost = await this._checkSchainMapping(originToken, targetToken);

            return {
                isMapped: isMappedClonePost,
                err: null,
                success: true,
                message: 'Token Added Successfully',
                hash: _txHash
            };
        } catch (err) {
            return {
                hash: null,
                err: err,
                success: false
            };
        }
    }

    async _checkSchainMapping(originToken, targetToken) {
        try {

            // const _function = this.tokenManager.callStatic[`clonesErc${this.type.substring(3)}`];
            let isMapped;
            if (this.type === 'erc20') {
                let check = await this.tokenManager.callStatic.clonesErc20(ethers.utils.keccak256(ethers.utils.toUtf8Bytes('Mainnet')), originToken);
                isMapped = check === targetToken;
            } else if (this.type === 'erc721') {
                let check = await this.tokenManager.callStatic.clonesErc721(ethers.utils.keccak256(ethers.utils.toUtf8Bytes('Mainnet')), originToken);
                isMapped = check === targetToken;
            } else if (this.type === 'erc1155') {
                let check = await this.tokenManager.callStatic.clonesErc1155(ethers.utils.keccak256(ethers.utils.toUtf8Bytes('Mainnet')), originToken);
                isMapped = check === targetToken;
            }
            return isMapped;
        } catch (err) {
            throw new Error(err);
        }
    }

    async _checkMainnetRegistration(chainName, originToken) {
        try {
            /// 1 -> Get Deposit Box config
            const _depositBoxConfig = this._contracts.getConfig(`deposit_box_${this.type}`);
            /// 2 -> Generate Deposit Box Contract
            const _depositBox = new ethers.Contract(_depositBoxConfig.address, _depositBoxConfig.abi, this.mainnetProvider);
            /// 3 -> Call Check
            let value = false;
            if (this.type === 'erc20') {
                value = await _depositBox.callStatic.getSchainToERC20(chainName, originToken);
            } else if (this.type === 'erc721') {
                value = await _depositBox.callStatic.getSchainToERC721(chainName, originToken);
            } else if (this.type === 'erc1155') {
                value = await _depositBox.callStatic.getSchainToERC1155(chainName, originToken);
            } else {
                throw new Error('Token Not Acceptable');
            }
            return value;
        } catch (err) {
            throw new Error(err);
        }
    }

    _encodeFunctionData(originToken, targetToken, chainName) {
        try {
            return this.tokenManager.interface.encodeFunctionData(
                `add${this.type.toUpperCase()}TokenByOwner`,
                [
                    'Mainnet',
                    originToken,
                    targetToken
                ]
            );
        } catch (err) {

        }
    }
    async _sendTransaction(encodedData, marionette, multisig) {
        try {
            /// Send Tx Via Multisig to Marionette
            return await (await multisig.submitTransaction(
                marionette.address,
                "0",
                marionette.interface.encodeFunctionData(
                    "execute",
                    [
                        this.tokenManager.address,
                        "0",
                        encodedData
                    ]
                ), { gasLimit: 5000000 }
            )).wait();
        } catch (err) {
            throw new Error(err);
        }
    }

    



}

export {
    IMASchain
}
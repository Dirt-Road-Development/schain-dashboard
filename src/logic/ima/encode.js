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
 * @file src/logic/ima/encode.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { ethers } from 'ethers';
import { Utils } from '../utils';


class IMAEncoder extends Utils {

    

    constructor(type) {
        super();
        this.type = type;
    }

    _getConfig() {
        return this._contracts.getConfig(`deposit_box_${this.type}`);
    }

    encodeRegisterOnMainnet(chainName, originAddress) {
        const contractConfig = this._getConfig();
        const contract = new ethers.Contract(contractConfig.address, contractConfig.abi);

        try {
            return contract.interface.encodeFunctionData(
                `add${this.type.toUpperCase()}TokenByOwner`,
                [
                    chainName,
                    originAddress
                ]
            );
        } catch (err) {
            throw new Error(err);
        }
    }

    getTargetContract() {
        return this._getConfig().address;
    }

    async isTokenRegistered(chainName, token, provider) {
        const contractConfig = this._getConfig();
        const contract = new ethers.Contract(contractConfig.address, contractConfig.abi, provider);
        try {
            let value = false;
            if (this.type === 'erc20') {
                value = await contract.callStatic.getSchainToERC20(chainName, token);
            } else if (this.type === 'erc721') {
                value = await contract.callStatic.getSchainToERC721(chainName, token);
            } else if (this.type === 'erc1155') {
                value = await contract.callStatic.getSchainToERC1155(chainName, token);
            } else {
                throw new Error('Token Not Acceptable');
            }
            return value;
        } catch (err) {
            throw new Error(err);
        }
    }
}

export {
    IMAEncoder 
}
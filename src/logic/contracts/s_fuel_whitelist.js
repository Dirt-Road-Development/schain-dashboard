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
 * @file src/contracts/s_fuel_whitelist.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { ethers } from "ethers";
import { Contracts } from "../../config";
import sharedAbis from "../../config/abis";
import { Utils } from "../utils";

class SFuelWhitelist extends Utils {

    _contracts = new Contracts();

    async assignRole(ethereum, contractAddress, assigneeAddress, role) {
        try {

            const provider = new ethers.providers.Web3Provider(ethereum);
            let contract = new ethers.Contract(contractAddress, sharedAbis.s_fuel_contracts_whitelist, provider.getSigner());
            const hasRole = await contract.callStatic.hasRole(role, assigneeAddress);
            if (hasRole) {
                return;
            }
            let receipt = await (await contract.grantRole(role, assigneeAddress, {
                gasLimit: ethers.utils.hexlify(50000000)
            }));

            return receipt;
        } catch (err) {
            throw new Error(err);
        }
    }

    async revokeRole(ethereum, contractAddress, assigneeAddress, role) {
        try {

            const provider = new ethers.providers.Web3Provider(ethereum);
            let contract = new ethers.Contract(contractAddress, sharedAbis.s_fuel_contracts_whitelist, provider.getSigner());
            const hasRole = await contract.callStatic.hasRole(role, assigneeAddress);
            if (!hasRole) {
                return;
            }
            let receipt = await (await contract.revokeRole(role, assigneeAddress, {
                gasLimit: ethers.utils.hexlify(50000000)
            }));

            return receipt;
        } catch (err) {
            throw new Error(err);
        }
    }
}

export {
    SFuelWhitelist
}
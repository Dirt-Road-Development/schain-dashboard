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
 * @file src/logic/contracts/controller.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { ethers } from "ethers";
import { ContractFunctions } from "./functions";

class GlobalController extends ContractFunctions {

    constructor(_rpcUrl, address) {
        super();
        this._rpcUrl = _rpcUrl;
        this._address = address;
        this._provider = this._buildProvider(_rpcUrl);
    }

    _buildProvider(_rpc) {
        return new ethers.providers.JsonRpcProvider(_rpc);
    }
    
    /// Initialize Chain State
    async initializeConfigController() {
        return await this._initializeConfigController();
    }

    /// Initialize Wallet Role Data
    async initializeRoles(address) {
        let _contracts = this._buildMultiContracts(['etherbase', 'marionette', 'config_controller']);
        return await this._initializeRoles(_contracts, address);
    }

    async initializeMultiSig(address) {
        return await this._initializeMultisig(address);
    }
}

export {
    GlobalController
}
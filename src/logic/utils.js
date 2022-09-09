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
 * @file src/logic/contracts/utils.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { ethers } from 'ethers';
import * as Config from '../config';

class Utils {

    constructor() {
        this._contracts = new Config.Contracts();
    }

    async _loadData(key, fn, _functions) {
        const _config = this._contracts.getConfig(key);
        const _contract = new ethers.Contract(_config.address, _config.abi, this._provider);
        let result;
        if (fn === 'freeContractDeployment') {
            key = 'freeContractDeploymentEnabled'
            result = await _functions.getFreeContractDeployment(_contract);
        } else if (fn === 'multiTransactionMode') {
            key = 'multiTransactionModeEnabled';
            result = await _functions.getMultiTransactionMode(_contract);
        }
        
        return [key, result];
    }

    _buildMultiContracts(keys) {
        let _multiContracts = [];
        let _rpcUrls = [this._buildProvider(this._rpcUrl), this._buildProvider(this._rpcUrl), this._buildProvider(this._rpcUrl), this._buildProvider(this._rpcUrl)]
        keys.forEach((key, index) => {
            const _config = this._contracts.getConfig(key);
            const _contract = new ethers.Contract(_config.address, _config.abi, _rpcUrls[index]);
            _multiContracts.push(_contract);
        });
        return _multiContracts;
    }

    _buildMultiSigWallet(provider) {
        const _config = this._contracts.getConfig('multisig_wallet');
        if (!provider) {
            return new ethers.Contract(
                _config['address'],
                _config['abi'],
                this._buildProvider(this._rpcUrl)
            );
        }
        return new ethers.Contract(
            _config['address'],
            _config['abi'],
            provider.getSigner()
        );
    }

    _buildMarionette(provider) {
        const _config = this._contracts.getConfig('marionette');
        if (!provider) {
            return new ethers.Contract(
                _config['address'],
                _config['abi'],
                this._buildProvider(this._rpcUrl)
            )
        }
        return new ethers.Contract(
            _config['address'],
            _config['abi'],
            provider.getSigner()
        );
    }
}

export {
    Utils
}
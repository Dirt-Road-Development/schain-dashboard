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
 * @file src/logic/contracts/multisig_wallet.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { ethers } from 'ethers';

class MultisigWallet {

    async initialize(_contract, _address) {
        return Promise.all([
            this._getOwners(_contract),
            this._getTransactionCount(_contract)
        ]).then(([a, b]) => {
            return {
                owners: a,
                isOwner: a.includes(ethers.utils.getAddress(_address)),
                count: b
            };
        }).catch((err) => {
            return undefined;
        })
    }

    async _getOwners(_contract) {
        try {
            return await _contract.callStatic.getOwners();
        } catch (err) {
            throw new Error(err);
        }
    }

    async _getTransactionCount(_contract) {
        try {
            return Promise.all([
                _contract.callStatic.getTransactionCount(true, false),
                _contract.callStatic.getTransactionCount(false, true)
            ]).then(([a, b]) => {
                let pending = Number(a);
                let executed = Number(b);
                return {
                    pending,
                    executed,
                    total: pending + executed
                }
            }).catch(err => {
                throw new Error(err);
            });
        } catch (err) {
            return undefined;
        }
    }
}

export {
    MultisigWallet
}
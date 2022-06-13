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
 * @file src/logic/contracts/etherbase.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */
import * as Config from '../../config';

class Etherbase {

    _contracts = new Config.Contracts();

    static async getRoles(_contract, address) {
        return Promise.all([
            _contract.callStatic.DEFAULT_ADMIN_ROLE(),
            _contract.callStatic.ETHER_MANAGER_ROLE()
        ]).then(([a, b]) => {
            return Promise.all([
                _contract.callStatic.hasRole(a, address),
                _contract.callStatic.hasRole(b, address),
            ]).then(([c, d]) => {
                return {
                    'DEFAULT_ADMIN_ROLE': c,
                    'ETHER_MANAGER_ROLE': d,
                }
            }).catch(err => {
                throw new Error(err)
            })
        })
        .catch(err => {
            throw new Error(err)
        });
    }
}

export {
    Etherbase
}
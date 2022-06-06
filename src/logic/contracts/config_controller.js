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

class ConfigController {

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
}

export {
    ConfigController
}
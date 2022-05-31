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
 * @file src/config/chains.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

const _nativeCurrency = {
    decimals: 18,
    name: "S-Fuel",
    symbol: "S-Fuel"
};

const _chainARpcUrl = 'https://staging-v2.skalenodes.com/v1/actual-secret-cebalrai';
const _chainAExplorer = 'https://actual-secret-cebalrai.explorer.staging-v2.skalenodes.com';
const _chainAId = 104734457;
const _chainAName = 'Calypso';

const _chainBRpcUrl = 'https://staging-v2.skalenodes.com/v1/naive-musty-merope';
const _chainBExplorer = 'https://naive-musty-merope.explorer.staging-v2.skalenodes.com';
const _chainBId = 1258188407;
const _chainBName = 'MyLilius';

const testnet_chains = [
    {
        name: _chainAName,
        network: 'SKALE',
        id: _chainAId,
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: _chainARpcUrl
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: _chainAExplorer },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    },
    {
        name: _chainBName,
        network: 'SKALE',
        id: _chainBId,
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: _chainBRpcUrl
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: _chainBExplorer },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    }
];

const mainnet_chains = [];

export default process.env.REACT_APP_ENV === 'testnet' ? testnet_chains : mainnet_chains;
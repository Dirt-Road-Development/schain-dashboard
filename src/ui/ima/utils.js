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
 * @file src/ui/ima/utils.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

export const visibleLabel = (label) => {
    if (label === 'auto_deploy_erc20') return 'Enable/Disable ERC-20 (Unfinished)';
    if (label === 'auto_deploy_erc721') return 'Enable/Disable ERC-721 (Unfinished)';
    if (label === 'auto_deploy_erc1155') return 'Enable/Disable ERC-1155 (Unfinished)';
    if (label === 'add_erc20') return 'Add ERC-20'
    if (label === 'add_erc721') return 'Add ERC-721'
    if (label === 'add_erc1155') return 'Add ERC-1155'
    if (label === 'add_erc20_s2s') return 'Add ERC-20 - S2S';
    if (label === 'add_erc721_s2s') return 'Add ERC-721 - S2S';
    if (label === 'add_erc1155_s2s') return 'Add ERC-1155 - S2S';
}

export const getSteps = (page) => {
    // if (page === 'auto_deploy_erc20') return 'Enable/Disable ERC-20 (Unfinished)';
    // if (label === 'auto_deploy_erc721') return 'Enable/Disable ERC-721 (Unfinished)';
    // if (label === 'auto_deploy_erc1155') return 'Enable/Disable ERC-1155 (Unfinished)';
    if (['add_erc20', 'add_erc721', 'add_erc1155'].includes(page)) return [
        {
            name: 'Deploy on SChain',
            isComplete: false,
            isActive: true
        },
        {
            name: 'Add Minter Role',
            isComplete: false,
            isActive: true
        },
        {
            name: 'Register on Mainnet',
            isComplete: false,
            isActive: true
        },
        {
            name: 'Register on SChain',
            isComplete: false,
            isActive: true
        }
    ];

    if (page.includes('s2s')) return [
        {
            name: 'Select Chain',
            isComplete: false,
            isActive: true,
        },
        {
            name: 'Connect Chains',
            isComplete: false,
            isActive: false
        },
        {
            name: 'Token Deployment',
            isComplete: false,
            isActive: false
        },
        {
            name: 'Origin Registration',
            isComplete: false,
            isActive: true
        },
        {
            name: 'Target Registration',
            isComplete: false,
            isActive: true
        },
        {
            name: 'Assign Roles',
            isComplete: false,
            isActive: true
        }
    ]
    // if (label === 'add_erc721') return 'Add ERC-721'
    // if (label === 'add_erc1155') return 'Add ERC-1155'
    return [];
}
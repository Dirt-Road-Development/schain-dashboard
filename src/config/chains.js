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

// export const MAINNET_RPC = process.env.REACT_APP_MAINNET_RPC;

const _nativeCurrency = {
    decimals: 18,
    name: "sFuel",
    symbol: "sFuel"
};

const _ethCurrency = {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH"
}

export const MAINNET_RPC = 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';

const S_CHAIN_PREFIX = "https://staging-v2.skalenodes.com/v1/"
const sChainExplorerUrl = (chainName) => `https://${chainName}.explorer.staging-v2.skalenodes.com/`
const testnet_chains = [
    {
        name: 'Rinkeby',
        network: 'Ethereum',
        id: 4,
        nativeCurrency: _ethCurrency,
        rpcUrls: {
            default: MAINNET_RPC // PUBLIC //MAINNET_RPC
        },
        blockExplorers: {
            default: {
                name: 'Etherscan',
                url: 'https://explorer.rinkeby.io'
            },
            etherscan: {
                name: 'Etherscan',
                url: 'https://explorer.rinkeby.io'
            }
        },
        testnet: true
    },
    {
        name: 'Purring-Alfecca-Meridiana',
        network: 'SKALE',
        id: parseInt("0xcbd8dd20f3c51"),
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: `${S_CHAIN_PREFIX}purring-alfecca-meridiana`
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: sChainExplorerUrl('purring-alfecca-meridiana') },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    },
    {
        name: 'Fancy-Rasalhague',
        network: 'SKALE',
        id: parseInt("0x802eba6ad1dbc"),
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: `${S_CHAIN_PREFIX}fancy-rasalhague`
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: sChainExplorerUrl('fancy-rasalhague') },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    },
    {
        name: 'Fit-Graffias',
        network: 'SKALE',
        id: parseInt("0x429e12e684e8a"),
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: `${S_CHAIN_PREFIX}fit-graffias`
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: sChainExplorerUrl('fit-graffias') },
            etherscan: { name: '', url: '' }
        },
       testnet: true
    },
    {
        name: 'Whispering-Turais',
        network: 'SKALE',
        id: parseInt("0x785b4b9847b9"),
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: `${S_CHAIN_PREFIX}whispering-turais`
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: sChainExplorerUrl('whispering-turais') },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    },
    {
        name: 'Glamorous-Grumium',
        network: 'SKALE',
        id: parseInt("0x8a5661592d533"),
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: `${S_CHAIN_PREFIX}glamorous-grumium`
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: sChainExplorerUrl('glamorous-grumium') },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    },
    {
        name: 'Stocky-Pleione',
        network: 'SKALE',
        id: parseInt("0x470e10ee57a29"),
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: `${S_CHAIN_PREFIX}stocky-pleione`
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: sChainExplorerUrl('stocky-pleione') },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    },
    {
        name: 'Attractive-Merope',
        network: 'SKALE',
        id: parseInt("0x44e247f49a9e6"),
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: `${S_CHAIN_PREFIX}attractive-merope`
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: sChainExplorerUrl('attractive-merope') },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    },
    {
        name: 'Honorable-Steel-Rasalhague',
        network: 'SKALE',
        id: parseInt("0x5d456c62"),
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: `${S_CHAIN_PREFIX}honorable-steel-rasalhague`
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: sChainExplorerUrl('honorable-steel-rasalhague') },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    },
    {
        name: 'Naive-Musty-Merope',
        network: 'SKALE',
        id: parseInt("0x4afe6e77"),
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: `${S_CHAIN_PREFIX}naive-musty-merope`
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: sChainExplorerUrl('naive-musty-merope') },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    },
    {
        name: 'Actual-Secret-Cebalrai',
        network: 'SKALE',
        id: parseInt("0x63e1ef9"),
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: `${S_CHAIN_PREFIX}actual-secret-cebalrai`
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: sChainExplorerUrl('actual-secret-cebalrai') },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    },
    {
        name: 'Rapping-Zuben-Elakrab',
        network: 'SKALE',
        id: parseInt("0x4a393bf89c676"),
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: `${S_CHAIN_PREFIX}rapping-zuben-elakrab`
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: sChainExplorerUrl('rapping-zuben-elakrab') },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    },
    {
        name: 'Deafening-Maia',
        network: 'SKALE',
        id: parseInt("0x4a393bf89c676"),
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: `${S_CHAIN_PREFIX}deafening-maia`
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: sChainExplorerUrl('deafening-maia') },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    }
];

const mainnet_chains = [
    {
        name: 'Calypso',
        network: 'SKALE',
        id: parseInt("0x5d456c62"),
        nativeCurrency: _nativeCurrency,
        rpcUrls: {
            default: `https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague`
        },
        blockExplorers: {
            default: { name: 'BlockScout', url: 'https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/' },
            etherscan: { name: '', url: '' }
        },
        testnet: true
    }

];

export default process.env.REACT_APP_ENV === 'testnet' ? testnet_chains : mainnet_chains;


export const getChainById = (chainId) => {
    const _chains = process.env.REACT_APP_ENV === 'testnet' ? testnet_chains : mainnet_chains;
    return _chains.find((_chain, index) => _chain.id === Number(chainId));
    
}

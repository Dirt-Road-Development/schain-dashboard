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
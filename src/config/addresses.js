const IS_MAINNET = process.env.REACT_APP_ENVIRONMENT === 'mainnet';

const mainnet = {
    message_proxy_mainnet_address: "0x8629703a9903515818C2FeB45a6f6fA5df8Da404",
    linker_address: "0x6ef406953bac772C2146389ED37846BA3b6086D1",
    community_pool_address: "0x588801cA36558310D91234aFC2511502282b1621",
    deposit_box_eth_address: "0x49F583d263e4Ef938b9E09772D3394c71605Df94",
    deposit_box_erc20_address: "0x8fB1A35bB6fB9c47Fb5065BE5062cB8dC1687669",
    deposit_box_erc721_address: "0x7343d31eb99Fd31424bcca9f0a7EAFBc1F515f2d",
    deposit_box_erc1155_address: "0x3C02FdEe8E05B6dc4d44a6555b3ff5762D03871a",
    deposit_box_erc721_with_metadata_address: "0x9f8196D864ee9476bF8DBE68aD07cc555d6B7986",
};

const testnet = {
    message_proxy_mainnet_address: "0x656fb12abab353FB1875a4e3Dc4D70179CB85BA4",
    linker_address: "0xEa870bEF8cc1Ca6871AE960266ea0fDbCF06371d",
    community_pool_address: "0xb2BadB7f28075CB2C8BDBd730204750Db4C03f98",
    deposit_box_eth_address: "0x9910cF6ba22915C5afCe8b682f7c09d1c001FA59",
    deposit_box_erc20_address: "0xb3bf0c62f0924e5C8fdae9815355eA98Fba33C8E",
    deposit_box_erc721_address: "0x98937f91885dcCfF8082623a157296AA161a9917",
    deposit_box_erc1155_address: "0xa0EF1521f56641F9E0E43c46E0F6B20715E454c8",
    deposit_box_erc721_with_metadata_address: "0x4B85DD7d995D6ae445292939d7ebfabD7Cd088dA"
};

let addresses = {
    config_controller: '0xD2002000000000000000000000000000000000d2',
    etherbase: '0xd2bA3e0000000000000000000000000000000000',
    marionette: '0xD2c0DeFACe000000000000000000000000000000',
    multsig_wallet: '0xD244519000000000000000000000000000000000'
};

if (IS_MAINNET) {
    Object.assign(addresses, mainnet);
} else {
    Object.assign(addresses, testnet);
}

export default addresses;
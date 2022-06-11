export const visibleLabel = (label) => {
    if (label === 'auto_deploy_erc20') return 'Enable/Disable ERC-20 (Unfinished)';
    if (label === 'auto_deploy_erc721') return 'Enable/Disable ERC-721 (Unfinished)';
    if (label === 'auto_deploy_erc1155') return 'Enable/Disable ERC-1155 (Unfinished)';
    if (label === 'add_erc20') return 'Add ERC-20'
    if (label === 'add_erc721') return 'Add ERC-721'
    if (label === 'add_erc1155') return 'Add ERC-1155'
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
    ]
    // if (label === 'add_erc721') return 'Add ERC-721'
    // if (label === 'add_erc1155') return 'Add ERC-1155'
    return [];
}
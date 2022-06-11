export const AUTOMATED_IMA_CONTRACTS = {
    erc20: {
        abi: [
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "contractName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "contractSymbol",
                  "type": "string"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
                }
              ],
              "name": "RoleAdminChanged",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "RoleGranted",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "RoleRevoked",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "DEFAULT_ADMIN_ROLE",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "MINTER_ROLE",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "burn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "burnFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "subtractedValue",
                  "type": "uint256"
                }
              ],
              "name": "decreaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                }
              ],
              "name": "getRoleAdmin",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
                }
              ],
              "name": "getRoleMember",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                }
              ],
              "name": "getRoleMemberCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "grantRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "hasRole",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "addedValue",
                  "type": "uint256"
                }
              ],
              "name": "increaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "mint",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "renounceRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "revokeRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        bytecode: "0x60806040523480156200001157600080fd5b50604051620019d8380380620019d88339810160408190526200003491620003bb565b8151829082906200004d9060039060208501906200025e565b508051620000639060049060208401906200025e565b50505062000087600080516020620019b883398151915280620000aa60201b60201c565b620000a2600080516020620019b883398151915233620000f5565b505062000478565b600082815260056020526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b62000101828262000105565b5050565b6200011c82826200014860201b620007211760201c565b600082815260066020908152604090912062000143918390620007a7620001ec821b17901c565b505050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16620001015760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001a83390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600062000203836001600160a01b0384166200020c565b90505b92915050565b6000818152600183016020526040812054620002555750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000206565b50600062000206565b8280546200026c9062000425565b90600052602060002090601f016020900481019282620002905760008555620002db565b82601f10620002ab57805160ff1916838001178555620002db565b82800160010185558215620002db579182015b82811115620002db578251825591602001919060010190620002be565b50620002e9929150620002ed565b5090565b5b80821115620002e95760008155600101620002ee565b600082601f8301126200031657600080fd5b81516001600160401b038082111562000333576200033362000462565b604051601f8301601f19908116603f011681019082821181831017156200035e576200035e62000462565b816040528381526020925086838588010111156200037b57600080fd5b600091505b838210156200039f578582018301518183018401529082019062000380565b83821115620003b15760008385830101525b9695505050505050565b60008060408385031215620003cf57600080fd5b82516001600160401b0380821115620003e757600080fd5b620003f58683870162000304565b935060208501519150808211156200040c57600080fd5b506200041b8582860162000304565b9150509250929050565b600181811c908216806200043a57607f821691505b602082108114156200045c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61153080620004886000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806370a08231116100c3578063a457c2d71161007c578063a457c2d7146102ef578063a9059cbb14610302578063ca15c87314610315578063d539139314610328578063d547741f1461034f578063dd62ed3e1461036257600080fd5b806370a082311461026557806379cc67901461028e5780639010d07c146102a157806391d14854146102cc57806395d89b41146102df578063a217fddf146102e757600080fd5b80632f2ff15d116101155780632f2ff15d146101f5578063313ce5671461020a57806336568abe14610219578063395093511461022c57806340c10f191461023f57806342966c681461025257600080fd5b806301ffc9a71461015d57806306fdde0314610185578063095ea7b31461019a57806318160ddd146101ad57806323b872dd146101bf578063248a9ca3146101d2575b600080fd5b61017061016b366004611304565b610375565b60405190151581526020015b60405180910390f35b61018d6103a0565b60405161017c91906113a3565b6101706101a836600461127c565b610432565b6002545b60405190815260200161017c565b6101706101cd366004611240565b61044a565b6101b16101e03660046112a6565b60009081526005602052604090206001015490565b6102086102033660046112bf565b61046e565b005b6040516012815260200161017c565b6102086102273660046112bf565b610498565b61017061023a36600461127c565b61051b565b61020861024d36600461127c565b61053d565b6102086102603660046112a6565b6105b6565b6101b16102733660046111f2565b6001600160a01b031660009081526020819052604090205490565b61020861029c36600461127c565b6105c3565b6102b46102af3660046112e2565b6105d8565b6040516001600160a01b03909116815260200161017c565b6101706102da3660046112bf565b6105f7565b61018d610622565b6101b1600081565b6101706102fd36600461127c565b610631565b61017061031036600461127c565b6106ac565b6101b16103233660046112a6565b6106ba565b6101b17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61020861035d3660046112bf565b6106d1565b6101b161037036600461120d565b6106f6565b60006001600160e01b03198216635a05180f60e01b148061039a575061039a826107bc565b92915050565b6060600380546103af90611467565b80601f01602080910402602001604051908101604052809291908181526020018280546103db90611467565b80156104285780601f106103fd57610100808354040283529160200191610428565b820191906000526020600020905b81548152906001019060200180831161040b57829003601f168201915b5050505050905090565b6000336104408185856107f1565b5060019392505050565b600033610458858285610915565b61046385858561098f565b506001949350505050565b60008281526005602052604090206001015461048981610b5d565b6104938383610b67565b505050565b6001600160a01b038116331461050d5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6105178282610b89565b5050565b60003361044081858561052e83836106f6565b61053891906113d6565b6107f1565b6105677f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336105f7565b6105ac5760405162461bcd60e51b815260206004820152601660248201527529b2b73232b91034b9903737ba10309026b4b73a32b960511b6044820152606401610504565b6105178282610bab565b6105c03382610c8a565b50565b6105ce823383610915565b6105178282610c8a565b60008281526006602052604081206105f09083610dd8565b9392505050565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546103af90611467565b6000338161063f82866106f6565b90508381101561069f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610504565b61046382868684036107f1565b60003361044081858561098f565b600081815260066020526040812061039a90610de4565b6000828152600560205260409020600101546106ec81610b5d565b6104938383610b89565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61072b82826105f7565b6105175760008281526005602090815260408083206001600160a01b03851684529091529020805460ff191660011790556107633390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006105f0836001600160a01b038416610dee565b60006001600160e01b03198216637965db0b60e01b148061039a57506301ffc9a760e01b6001600160e01b031983161461039a565b6001600160a01b0383166108535760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610504565b6001600160a01b0382166108b45760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610504565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061092184846106f6565b90506000198114610989578181101561097c5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610504565b61098984848484036107f1565b50505050565b6001600160a01b0383166109f35760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610504565b6001600160a01b038216610a555760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610504565b6001600160a01b03831660009081526020819052604090205481811015610acd5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610504565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610b049084906113d6565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b5091815260200190565b60405180910390a3610989565b6105c08133610e3d565b610b718282610721565b600082815260066020526040902061049390826107a7565b610b938282610ea1565b60008281526006602052604090206104939082610f08565b6001600160a01b038216610c015760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610504565b8060026000828254610c1391906113d6565b90915550506001600160a01b03821660009081526020819052604081208054839290610c409084906113d6565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610cea5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610504565b6001600160a01b03821660009081526020819052604090205481811015610d5e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610504565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610d8d90849061140d565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60006105f08383610f1d565b600061039a825490565b6000818152600183016020526040812054610e355750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561039a565b50600061039a565b610e4782826105f7565b61051757610e5f816001600160a01b03166014610f47565b610e6a836020610f47565b604051602001610e7b92919061132e565b60408051601f198184030181529082905262461bcd60e51b8252610504916004016113a3565b610eab82826105f7565b156105175760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006105f0836001600160a01b0384166110e3565b6000826000018281548110610f3457610f346114ce565b9060005260206000200154905092915050565b60606000610f568360026113ee565b610f619060026113d6565b67ffffffffffffffff811115610f7957610f796114e4565b6040519080825280601f01601f191660200182016040528015610fa3576020820181803683370190505b509050600360fc1b81600081518110610fbe57610fbe6114ce565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610fed57610fed6114ce565b60200101906001600160f81b031916908160001a90535060006110118460026113ee565b61101c9060016113d6565b90505b6001811115611094576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611050576110506114ce565b1a60f81b828281518110611066576110666114ce565b60200101906001600160f81b031916908160001a90535060049490941c9361108d81611450565b905061101f565b5083156105f05760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610504565b600081815260018301602052604081205480156111cc57600061110760018361140d565b855490915060009061111b9060019061140d565b905081811461118057600086600001828154811061113b5761113b6114ce565b906000526020600020015490508087600001848154811061115e5761115e6114ce565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611191576111916114b8565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061039a565b600091505061039a565b80356001600160a01b03811681146111ed57600080fd5b919050565b60006020828403121561120457600080fd5b6105f0826111d6565b6000806040838503121561122057600080fd5b611229836111d6565b9150611237602084016111d6565b90509250929050565b60008060006060848603121561125557600080fd5b61125e846111d6565b925061126c602085016111d6565b9150604084013590509250925092565b6000806040838503121561128f57600080fd5b611298836111d6565b946020939093013593505050565b6000602082840312156112b857600080fd5b5035919050565b600080604083850312156112d257600080fd5b82359150611237602084016111d6565b600080604083850312156112f557600080fd5b50508035926020909101359150565b60006020828403121561131657600080fd5b81356001600160e01b0319811681146105f057600080fd5b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611366816017850160208801611424565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611397816028840160208801611424565b01602801949350505050565b60208152600082518060208401526113c2816040850160208701611424565b601f01601f19169190910160400192915050565b600082198211156113e9576113e96114a2565b500190565b6000816000190483118215151615611408576114086114a2565b500290565b60008282101561141f5761141f6114a2565b500390565b60005b8381101561143f578181015183820152602001611427565b838111156109895750506000910152565b60008161145f5761145f6114a2565b506000190190565b600181811c9082168061147b57607f821691505b6020821081141561149c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212208e74100ae413524aa029ca52949df7f40a58ca367e8934dfa402cfda33627c3164736f6c634300080600339f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6"
    },
    erc721: {
        abi: [
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "contractName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "contractSymbol",
                  "type": "string"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "approved",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
                }
              ],
              "name": "RoleAdminChanged",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "RoleGranted",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "RoleRevoked",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "DEFAULT_ADMIN_ROLE",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "MINTER_ROLE",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "burn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                }
              ],
              "name": "getRoleAdmin",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
                }
              ],
              "name": "getRoleMember",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                }
              ],
              "name": "getRoleMemberCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "grantRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "hasRole",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "mint",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "renounceRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "revokeRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "_data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
        bytecode: "0x60806040523480156200001157600080fd5b50604051620023a5380380620023a58339810160408190526200003491620003b7565b8151829082906200004d9060029060208501906200025a565b508051620000639060039060208401906200025a565b505050620000876000805160206200238583398151915280620000aa60201b60201c565b620000a26000805160206200238583398151915233620000f5565b505062000474565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b62000101828262000105565b5050565b6200011c82826200014860201b62000b8d1760201c565b60008281526001602090815260409091206200014391839062000c11620001e8821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000101576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001a43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001ff836001600160a01b03841662000208565b90505b92915050565b6000818152600183016020526040812054620002515750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000202565b50600062000202565b828054620002689062000421565b90600052602060002090601f0160209004810192826200028c5760008555620002d7565b82601f10620002a757805160ff1916838001178555620002d7565b82800160010185558215620002d7579182015b82811115620002d7578251825591602001919060010190620002ba565b50620002e5929150620002e9565b5090565b5b80821115620002e55760008155600101620002ea565b600082601f8301126200031257600080fd5b81516001600160401b03808211156200032f576200032f6200045e565b604051601f8301601f19908116603f011681019082821181831017156200035a576200035a6200045e565b816040528381526020925086838588010111156200037757600080fd5b600091505b838210156200039b57858201830151818301840152908201906200037c565b83821115620003ad5760008385830101525b9695505050505050565b60008060408385031215620003cb57600080fd5b82516001600160401b0380821115620003e357600080fd5b620003f18683870162000300565b935060208501519150808211156200040857600080fd5b50620004178582860162000300565b9150509250929050565b600181811c908216806200043657607f821691505b602082108114156200045857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611f0180620004846000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806370a08231116100c3578063b88d4fde1161007c578063b88d4fde146102ec578063c87b56dd146102ff578063ca15c87314610312578063d539139314610325578063d547741f1461034c578063e985e9c51461035f57600080fd5b806370a08231146102905780639010d07c146102a357806391d14854146102b657806395d89b41146102c9578063a217fddf146102d1578063a22cb465146102d957600080fd5b80632f2ff15d116101155780632f2ff15d1461021e57806336568abe1461023157806340c10f191461024457806342842e0e1461025757806342966c681461026a5780636352211e1461027d57600080fd5b806301ffc9a71461015d57806306fdde0314610185578063081812fc1461019a578063095ea7b3146101c557806323b872dd146101da578063248a9ca3146101ed575b600080fd5b61017061016b366004611b3b565b61039b565b60405190151581526020015b60405180910390f35b61018d6104a2565b60405161017c9190611c82565b6101ad6101a8366004611add565b610534565b6040516001600160a01b03909116815260200161017c565b6101d86101d3366004611ab3565b6105ce565b005b6101d86101e836600461195f565b6106e4565b6102106101fb366004611add565b60009081526020819052604090206001015490565b60405190815260200161017c565b6101d861022c366004611af6565b610716565b6101d861023f366004611af6565b61073b565b610170610252366004611ab3565b6107b9565b6101d861026536600461195f565b61083d565b6101d8610278366004611add565b610858565b6101ad61028b366004611add565b6108d2565b61021061029e366004611911565b610949565b6101ad6102b1366004611b19565b6109d0565b6101706102c4366004611af6565b6109ef565b61018d610a18565b610210600081565b6101d86102e7366004611a77565b610a27565b6101d86102fa36600461199b565b610a32565b61018d61030d366004611add565b610a6a565b610210610320366004611add565b610b51565b6102107f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101d861035a366004611af6565b610b68565b61017061036d36600461192c565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b60006001600160e01b03198216635a05180f60e01b14806103cc57506001600160e01b031982166380ac58cd60e01b145b806103e757506001600160e01b03198216635b5e139f60e01b145b8061043e5750604051746d696e7428616464726573732c75696e743235362960581b6020820152603501604051602081830303815290604052805190602001206001600160e01b031916826001600160e01b031916145b8061048d57506040516c6275726e2875696e743235362960981b6020820152602d01604051602081830303815290604052805190602001206001600160e01b031916826001600160e01b031916145b8061049c575061049c82610c26565b92915050565b6060600280546104b190611ddd565b80601f01602080910402602001604051908101604052809291908181526020018280546104dd90611ddd565b801561052a5780601f106104ff5761010080835404028352916020019161052a565b820191906000526020600020905b81548152906001019060200180831161050d57829003601f168201915b5050505050905090565b6000818152600460205260408120546001600160a01b03166105b25760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006105d9826108d2565b9050806001600160a01b0316836001600160a01b031614156106475760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016105a9565b336001600160a01b03821614806106635750610663813361036d565b6106d55760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105a9565b6106df8383610c66565b505050565b6106ef335b82610cd4565b61070b5760405162461bcd60e51b81526004016105a990611ce7565b6106df838383610dcb565b60008281526020819052604090206001015461073181610f67565b6106df8383610f71565b6001600160a01b03811633146107ab5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016105a9565b6107b58282610f93565b5050565b60006107e57f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336109ef565b61082a5760405162461bcd60e51b815260206004820152601660248201527529b2b73232b91034b9903737ba10309026b4b73a32b960511b60448201526064016105a9565b6108348383610fb5565b50600192915050565b6106df83838360405180602001604052806000815250610a32565b610861336106e9565b6108c65760405162461bcd60e51b815260206004820152603060248201527f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760448201526f1b995c881b9bdc88185c1c1c9bdd995960821b60648201526084016105a9565b6108cf816110f7565b50565b6000818152600460205260408120546001600160a01b03168061049c5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016105a9565b60006001600160a01b0382166109b45760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016105a9565b506001600160a01b031660009081526005602052604090205490565b60008281526001602052604081206109e89083611192565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600380546104b190611ddd565b6107b533838361119e565b610a3c3383610cd4565b610a585760405162461bcd60e51b81526004016105a990611ce7565b610a648484848461126d565b50505050565b6000818152600460205260409020546060906001600160a01b0316610ae95760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016105a9565b6000610b0060408051602081019091526000815290565b90506000815111610b2057604051806020016040528060008152506109e8565b80610b2a846112a0565b604051602001610b3b929190611ba1565b6040516020818303038152906040529392505050565b600081815260016020526040812061049c9061139e565b600082815260208190526040902060010154610b8381610f67565b6106df8383610f93565b610b9782826109ef565b6107b5576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610bcd3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006109e8836001600160a01b0384166113a8565b60006001600160e01b031982166380ac58cd60e01b1480610c5757506001600160e01b03198216635b5e139f60e01b145b8061049c575061049c826113f7565b600081815260066020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610c9b826108d2565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600460205260408120546001600160a01b0316610d4d5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105a9565b6000610d58836108d2565b9050806001600160a01b0316846001600160a01b03161480610d9f57506001600160a01b0380821660009081526007602090815260408083209388168352929052205460ff165b80610dc35750836001600160a01b0316610db884610534565b6001600160a01b0316145b949350505050565b826001600160a01b0316610dde826108d2565b6001600160a01b031614610e425760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016105a9565b6001600160a01b038216610ea45760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105a9565b610eaf600082610c66565b6001600160a01b0383166000908152600560205260408120805460019290610ed8908490611d83565b90915550506001600160a01b0382166000908152600560205260408120805460019290610f06908490611d38565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6108cf813361141c565b610f7b8282610b8d565b60008281526001602052604090206106df9082610c11565b610f9d8282611480565b60008281526001602052604090206106df90826114e5565b6001600160a01b03821661100b5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105a9565b6000818152600460205260409020546001600160a01b0316156110705760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105a9565b6001600160a01b0382166000908152600560205260408120805460019290611099908490611d38565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000611102826108d2565b905061110f600083610c66565b6001600160a01b0381166000908152600560205260408120805460019290611138908490611d83565b909155505060008281526004602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60006109e883836114fa565b816001600160a01b0316836001600160a01b031614156112005760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105a9565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611278848484610dcb565b61128484848484611524565b610a645760405162461bcd60e51b81526004016105a990611c95565b6060816112c45750506040805180820190915260018152600360fc1b602082015290565b8160005b81156112ee57806112d881611e18565b91506112e79050600a83611d50565b91506112c8565b60008167ffffffffffffffff81111561130957611309611e9f565b6040519080825280601f01601f191660200182016040528015611333576020820181803683370190505b5090505b8415610dc357611348600183611d83565b9150611355600a86611e33565b611360906030611d38565b60f81b81838151811061137557611375611e89565b60200101906001600160f81b031916908160001a905350611397600a86611d50565b9450611337565b600061049c825490565b60008181526001830160205260408120546113ef5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561049c565b50600061049c565b60006001600160e01b03198216635a05180f60e01b148061049c575061049c82611631565b61142682826109ef565b6107b55761143e816001600160a01b03166014611666565b611449836020611666565b60405160200161145a929190611bd0565b60408051601f198184030181529082905262461bcd60e51b82526105a991600401611c82565b61148a82826109ef565b156107b5576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006109e8836001600160a01b038416611802565b600082600001828154811061151157611511611e89565b9060005260206000200154905092915050565b60006001600160a01b0384163b1561162657604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611568903390899088908890600401611c45565b602060405180830381600087803b15801561158257600080fd5b505af19250505080156115b2575060408051601f3d908101601f191682019092526115af91810190611b58565b60015b61160c573d8080156115e0576040519150601f19603f3d011682016040523d82523d6000602084013e6115e5565b606091505b5080516116045760405162461bcd60e51b81526004016105a990611c95565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610dc3565b506001949350505050565b60006001600160e01b03198216637965db0b60e01b148061049c57506301ffc9a760e01b6001600160e01b031983161461049c565b60606000611675836002611d64565b611680906002611d38565b67ffffffffffffffff81111561169857611698611e9f565b6040519080825280601f01601f1916602001820160405280156116c2576020820181803683370190505b509050600360fc1b816000815181106116dd576116dd611e89565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061170c5761170c611e89565b60200101906001600160f81b031916908160001a9053506000611730846002611d64565b61173b906001611d38565b90505b60018111156117b3576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061176f5761176f611e89565b1a60f81b82828151811061178557611785611e89565b60200101906001600160f81b031916908160001a90535060049490941c936117ac81611dc6565b905061173e565b5083156109e85760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105a9565b600081815260018301602052604081205480156118eb576000611826600183611d83565b855490915060009061183a90600190611d83565b905081811461189f57600086600001828154811061185a5761185a611e89565b906000526020600020015490508087600001848154811061187d5761187d611e89565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806118b0576118b0611e73565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061049c565b600091505061049c565b80356001600160a01b038116811461190c57600080fd5b919050565b60006020828403121561192357600080fd5b6109e8826118f5565b6000806040838503121561193f57600080fd5b611948836118f5565b9150611956602084016118f5565b90509250929050565b60008060006060848603121561197457600080fd5b61197d846118f5565b925061198b602085016118f5565b9150604084013590509250925092565b600080600080608085870312156119b157600080fd5b6119ba856118f5565b93506119c8602086016118f5565b925060408501359150606085013567ffffffffffffffff808211156119ec57600080fd5b818701915087601f830112611a0057600080fd5b813581811115611a1257611a12611e9f565b604051601f8201601f19908116603f01168101908382118183101715611a3a57611a3a611e9f565b816040528281528a6020848701011115611a5357600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215611a8a57600080fd5b611a93836118f5565b915060208301358015158114611aa857600080fd5b809150509250929050565b60008060408385031215611ac657600080fd5b611acf836118f5565b946020939093013593505050565b600060208284031215611aef57600080fd5b5035919050565b60008060408385031215611b0957600080fd5b82359150611956602084016118f5565b60008060408385031215611b2c57600080fd5b50508035926020909101359150565b600060208284031215611b4d57600080fd5b81356109e881611eb5565b600060208284031215611b6a57600080fd5b81516109e881611eb5565b60008151808452611b8d816020860160208601611d9a565b601f01601f19169290920160200192915050565b60008351611bb3818460208801611d9a565b835190830190611bc7818360208801611d9a565b01949350505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611c08816017850160208801611d9a565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611c39816028840160208801611d9a565b01602801949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611c7890830184611b75565b9695505050505050565b6020815260006109e86020830184611b75565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611d4b57611d4b611e47565b500190565b600082611d5f57611d5f611e5d565b500490565b6000816000190483118215151615611d7e57611d7e611e47565b500290565b600082821015611d9557611d95611e47565b500390565b60005b83811015611db5578181015183820152602001611d9d565b83811115610a645750506000910152565b600081611dd557611dd5611e47565b506000190190565b600181811c90821680611df157607f821691505b60208210811415611e1257634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611e2c57611e2c611e47565b5060010190565b600082611e4257611e42611e5d565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146108cf57600080fdfea2646970667358221220d4651f7523fe14a2849f6217a19db7f761b3a7e2392b66f69c5b21c2b5355e6064736f6c634300080600339f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6"
    },
    erc1155: {
        abi: [
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "uri",
                  "type": "string"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
                }
              ],
              "name": "RoleAdminChanged",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "RoleGranted",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "RoleRevoked",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256[]",
                  "name": "ids",
                  "type": "uint256[]"
                },
                {
                  "indexed": false,
                  "internalType": "uint256[]",
                  "name": "values",
                  "type": "uint256[]"
                }
              ],
              "name": "TransferBatch",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "TransferSingle",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "value",
                  "type": "string"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "URI",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "DEFAULT_ADMIN_ROLE",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "MINTER_ROLE",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "accounts",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "ids",
                  "type": "uint256[]"
                }
              ],
              "name": "balanceOfBatch",
              "outputs": [
                {
                  "internalType": "uint256[]",
                  "name": "",
                  "type": "uint256[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "burn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "uint256[]",
                  "name": "ids",
                  "type": "uint256[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "values",
                  "type": "uint256[]"
                }
              ],
              "name": "burnBatch",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                }
              ],
              "name": "getRoleAdmin",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
                }
              ],
              "name": "getRoleMember",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                }
              ],
              "name": "getRoleMemberCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "grantRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "hasRole",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "mint",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "uint256[]",
                  "name": "ids",
                  "type": "uint256[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "amounts",
                  "type": "uint256[]"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "mintBatch",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "renounceRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "revokeRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256[]",
                  "name": "ids",
                  "type": "uint256[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "amounts",
                  "type": "uint256[]"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeBatchTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "uri",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ],
        bytecode: "0x60806040523480156200001157600080fd5b5060405162002b2738038062002b278339810160408190526200003491620002e3565b8062000040816200007e565b506200005c60008051602062002b078339815191528062000097565b6200007760008051602062002b0783398151915233620000e2565b5062000412565b8051620000939060049060208401906200023d565b5050565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b620000938282620000ff82826200012b60201b62000a491760201c565b60008281526001602090815260409091206200012691839062000acd620001cb821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000093576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001873390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001e2836001600160a01b038416620001eb565b90505b92915050565b60008181526001830160205260408120546200023457508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001e5565b506000620001e5565b8280546200024b90620003bf565b90600052602060002090601f0160209004810192826200026f5760008555620002ba565b82601f106200028a57805160ff1916838001178555620002ba565b82800160010185558215620002ba579182015b82811115620002ba5782518255916020019190600101906200029d565b50620002c8929150620002cc565b5090565b5b80821115620002c85760008155600101620002cd565b60006020808385031215620002f757600080fd5b82516001600160401b03808211156200030f57600080fd5b818501915085601f8301126200032457600080fd5b815181811115620003395762000339620003fc565b604051601f8201601f19908116603f01168101908382118183101715620003645762000364620003fc565b8160405282815288868487010111156200037d57600080fd5b600093505b82841015620003a1578484018601518185018701529285019262000382565b82841115620003b35760008684830101525b98975050505050505050565b600181811c90821680620003d457607f821691505b60208210811415620003f657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6126e580620004226000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c8063731133e9116100b8578063ca15c8731161007c578063ca15c873146102b4578063d5391393146102c7578063d547741f146102ee578063e985e9c514610301578063f242432a1461033d578063f5298aca1461035057600080fd5b8063731133e9146102485780639010d07c1461025b57806391d1485414610286578063a217fddf14610299578063a22cb465146102a157600080fd5b80632eb2c2d6116100ff5780632eb2c2d6146101dc5780632f2ff15d146101ef57806336568abe146102025780634e1273f4146102155780636b20c4541461023557600080fd5b8062fdd58e1461013b57806301ffc9a7146101615780630e89341c146101845780631f7fdffa146101a4578063248a9ca3146101b9575b600080fd5b61014e610149366004611e45565b610363565b6040519081526020015b60405180910390f35b61017461016f366004612026565b6103ff565b6040519015158152602001610158565b610197610192366004611fc8565b6104f6565b6040516101589190612220565b6101b76101b2366004611d70565b61058a565b005b61014e6101c7366004611fc8565b60009081526020819052604090206001015490565b6101b76101ea366004611bed565b61060b565b6101b76101fd366004611fe1565b6106a2565b6101b7610210366004611fe1565b6106cc565b610228610223366004611ef7565b61074a565b60405161015891906121df565b6101b7610243366004611cfc565b610874565b6101b7610256366004611ea2565b6108b7565b61026e610269366004612004565b610932565b6040516001600160a01b039091168152602001610158565b610174610294366004611fe1565b610951565b61014e600081565b6101b76102af366004611e09565b61097a565b61014e6102c2366004611fc8565b610985565b61014e7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101b76102fc366004611fe1565b61099c565b61017461030f366004611bba565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205460ff1690565b6101b761034b366004611c97565b6109c1565b6101b761035e366004611e6f565b610a06565b60006001600160a01b0383166103d45760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b5060008181526002602090815260408083206001600160a01b03861684529091529020545b92915050565b6000604051602001610440907f6d696e7428616464726573732c75696e743235362c75696e743235362c62797481526265732960e81b602082015260230190565b604051602081830303815290604052805190602001206001600160e01b031916826001600160e01b03191614806104e757506040516020016104ba907f6d696e74426174636828616464726573732c75696e743235365b5d2c75696e7481526b3235365b5d2c62797465732960a01b6020820152602c0190565b604051602081830303815290604052805190602001206001600160e01b031916826001600160e01b031916145b806103f957506103f982610ae2565b60606004805461050590612518565b80601f016020809104026020016040519081016040528092919081815260200182805461053190612518565b801561057e5780601f106105535761010080835404028352916020019161057e565b820191906000526020600020905b81548152906001019060200180831161056157829003601f168201915b50505050509050919050565b6105b47f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610951565b6105f95760405162461bcd60e51b815260206004820152601660248201527529b2b73232b91034b9903737ba10309026b4b73a32b960511b60448201526064016103cb565b61060584848484610b22565b50505050565b6001600160a01b0385163314806106275750610627853361030f565b61068e5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b60648201526084016103cb565b61069b8585858585610c6e565b5050505050565b6000828152602081905260409020600101546106bd81610e0d565b6106c78383610e1a565b505050565b6001600160a01b038116331461073c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016103cb565b6107468282610e3c565b5050565b606081518351146107af5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016103cb565b6000835167ffffffffffffffff8111156107cb576107cb6125dd565b6040519080825280602002602001820160405280156107f4578160200160208202803683370190505b50905060005b845181101561086c5761083f858281518110610818576108186125c7565b6020026020010151858381518110610832576108326125c7565b6020026020010151610363565b828281518110610851576108516125c7565b602090810291909101015261086581612580565b90506107fa565b509392505050565b6001600160a01b0383163314806108905750610890833361030f565b6108ac5760405162461bcd60e51b81526004016103cb906122bf565b6106c7838383610e5e565b6108e17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610951565b6109265760405162461bcd60e51b815260206004820152601660248201527529b2b73232b91034b9903737ba10309026b4b73a32b960511b60448201526064016103cb565b61060584848484610feb565b600082815260016020526040812061094a90836110c7565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6107463383836110d3565b60008181526001602052604081206103f9906111b4565b6000828152602081905260409020600101546109b781610e0d565b6106c78383610e3c565b6001600160a01b0385163314806109dd57506109dd853361030f565b6109f95760405162461bcd60e51b81526004016103cb906122bf565b61069b85858585856111be565b6001600160a01b038316331480610a225750610a22833361030f565b610a3e5760405162461bcd60e51b81526004016103cb906122bf565b6106c78383836112ec565b610a538282610951565b610746576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610a893390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600061094a836001600160a01b0384166113f3565b60006001600160e01b03198216636cdb3d1360e11b1480610b1357506001600160e01b031982166303a24d0760e21b145b806103f957506103f982611442565b6001600160a01b038416610b485760405162461bcd60e51b81526004016103cb90612422565b8151835114610b695760405162461bcd60e51b81526004016103cb906123da565b3360005b8451811015610c0657838181518110610b8857610b886125c7565b602002602001015160026000878481518110610ba657610ba66125c7565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000206000828254610bee9190612487565b90915550819050610bfe81612580565b915050610b6d565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610c579291906121f2565b60405180910390a461069b81600087878787611467565b8151835114610c8f5760405162461bcd60e51b81526004016103cb906123da565b6001600160a01b038416610cb55760405162461bcd60e51b81526004016103cb90612308565b3360005b8451811015610d9f576000858281518110610cd657610cd66125c7565b602002602001015190506000858381518110610cf457610cf46125c7565b60209081029190910181015160008481526002835260408082206001600160a01b038e168352909352919091205490915081811015610d455760405162461bcd60e51b81526004016103cb90612390565b60008381526002602090815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610d84908490612487565b9250508190555050505080610d9890612580565b9050610cb9565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610def9291906121f2565b60405180910390a4610e05818787878787611467565b505050505050565b610e1781336115d2565b50565b610e248282610a49565b60008281526001602052604090206106c79082610acd565b610e468282611636565b60008281526001602052604090206106c7908261169b565b6001600160a01b038316610e845760405162461bcd60e51b81526004016103cb9061234d565b8051825114610ea55760405162461bcd60e51b81526004016103cb906123da565b604080516020810190915260009081905233905b8351811015610f7e576000848281518110610ed657610ed66125c7565b602002602001015190506000848381518110610ef457610ef46125c7565b60209081029190910181015160008481526002835260408082206001600160a01b038c168352909352919091205490915081811015610f455760405162461bcd60e51b81526004016103cb9061227b565b60009283526002602090815260408085206001600160a01b038b1686529091529092209103905580610f7681612580565b915050610eb9565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610fcf9291906121f2565b60405180910390a4604080516020810190915260009052610605565b6001600160a01b0384166110115760405162461bcd60e51b81526004016103cb90612422565b33600061101d856116b0565b9050600061102a856116b0565b905060008681526002602090815260408083206001600160a01b038b1684529091528120805487929061105e908490612487565b909155505060408051878152602081018790526001600160a01b03808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46110be836000898989896116fb565b50505050505050565b600061094a83836117c5565b816001600160a01b0316836001600160a01b031614156111475760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016103cb565b6001600160a01b03838116600081815260036020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b60006103f9825490565b6001600160a01b0384166111e45760405162461bcd60e51b81526004016103cb90612308565b3360006111f0856116b0565b905060006111fd856116b0565b905060008681526002602090815260408083206001600160a01b038c168452909152902054858110156112425760405162461bcd60e51b81526004016103cb90612390565b60008781526002602090815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290611281908490612487565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46112e1848a8a8a8a8a6116fb565b505050505050505050565b6001600160a01b0383166113125760405162461bcd60e51b81526004016103cb9061234d565b33600061131e846116b0565b9050600061132b846116b0565b6040805160208082018352600091829052888252600281528282206001600160a01b038b16835290522054909150848110156113795760405162461bcd60e51b81526004016103cb9061227b565b60008681526002602090815260408083206001600160a01b038b81168086529184528285208a8703905582518b81529384018a90529092908816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46040805160208101909152600090526110be565b600081815260018301602052604081205461143a575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556103f9565b5060006103f9565b60006001600160e01b03198216635a05180f60e01b14806103f957506103f9826117ef565b6001600160a01b0384163b15610e055760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906114ab908990899088908890889060040161213c565b602060405180830381600087803b1580156114c557600080fd5b505af19250505080156114f5575060408051601f3d908101601f191682019092526114f291810190612043565b60015b6115a2576115016125f3565b806308c379a0141561153b575061151661260f565b80611521575061153d565b8060405162461bcd60e51b81526004016103cb9190612220565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016103cb565b6001600160e01b0319811663bc197c8160e01b146110be5760405162461bcd60e51b81526004016103cb90612233565b6115dc8282610951565b610746576115f4816001600160a01b03166014611824565b6115ff836020611824565b6040516020016116109291906120c7565b60408051601f198184030181529082905262461bcd60e51b82526103cb91600401612220565b6116408282610951565b15610746576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600061094a836001600160a01b0384166119c0565b604080516001808252818301909252606091600091906020808301908036833701905050905082816000815181106116ea576116ea6125c7565b602090810291909101015292915050565b6001600160a01b0384163b15610e055760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e619061173f908990899088908890889060040161219a565b602060405180830381600087803b15801561175957600080fd5b505af1925050508015611789575060408051601f3d908101601f1916820190925261178691810190612043565b60015b611795576115016125f3565b6001600160e01b0319811663f23a6e6160e01b146110be5760405162461bcd60e51b81526004016103cb90612233565b60008260000182815481106117dc576117dc6125c7565b9060005260206000200154905092915050565b60006001600160e01b03198216637965db0b60e01b14806103f957506301ffc9a760e01b6001600160e01b03198316146103f9565b6060600061183383600261249f565b61183e906002612487565b67ffffffffffffffff811115611856576118566125dd565b6040519080825280601f01601f191660200182016040528015611880576020820181803683370190505b509050600360fc1b8160008151811061189b5761189b6125c7565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106118ca576118ca6125c7565b60200101906001600160f81b031916908160001a90535060006118ee84600261249f565b6118f9906001612487565b90505b6001811115611971576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061192d5761192d6125c7565b1a60f81b828281518110611943576119436125c7565b60200101906001600160f81b031916908160001a90535060049490941c9361196a81612501565b90506118fc565b50831561094a5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016103cb565b60008181526001830160205260408120548015611aa95760006119e46001836124be565b85549091506000906119f8906001906124be565b9050818114611a5d576000866000018281548110611a1857611a186125c7565b9060005260206000200154905080876000018481548110611a3b57611a3b6125c7565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611a6e57611a6e6125b1565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506103f9565b60009150506103f9565b80356001600160a01b0381168114611aca57600080fd5b919050565b600082601f830112611ae057600080fd5b81356020611aed82612463565b604051611afa8282612553565b8381528281019150858301600585901b87018401881015611b1a57600080fd5b60005b85811015611b3957813584529284019290840190600101611b1d565b5090979650505050505050565b600082601f830112611b5757600080fd5b813567ffffffffffffffff811115611b7157611b716125dd565b604051611b88601f8301601f191660200182612553565b818152846020838601011115611b9d57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060408385031215611bcd57600080fd5b611bd683611ab3565b9150611be460208401611ab3565b90509250929050565b600080600080600060a08688031215611c0557600080fd5b611c0e86611ab3565b9450611c1c60208701611ab3565b9350604086013567ffffffffffffffff80821115611c3957600080fd5b611c4589838a01611acf565b94506060880135915080821115611c5b57600080fd5b611c6789838a01611acf565b93506080880135915080821115611c7d57600080fd5b50611c8a88828901611b46565b9150509295509295909350565b600080600080600060a08688031215611caf57600080fd5b611cb886611ab3565b9450611cc660208701611ab3565b93506040860135925060608601359150608086013567ffffffffffffffff811115611cf057600080fd5b611c8a88828901611b46565b600080600060608486031215611d1157600080fd5b611d1a84611ab3565b9250602084013567ffffffffffffffff80821115611d3757600080fd5b611d4387838801611acf565b93506040860135915080821115611d5957600080fd5b50611d6686828701611acf565b9150509250925092565b60008060008060808587031215611d8657600080fd5b611d8f85611ab3565b9350602085013567ffffffffffffffff80821115611dac57600080fd5b611db888838901611acf565b94506040870135915080821115611dce57600080fd5b611dda88838901611acf565b93506060870135915080821115611df057600080fd5b50611dfd87828801611b46565b91505092959194509250565b60008060408385031215611e1c57600080fd5b611e2583611ab3565b915060208301358015158114611e3a57600080fd5b809150509250929050565b60008060408385031215611e5857600080fd5b611e6183611ab3565b946020939093013593505050565b600080600060608486031215611e8457600080fd5b611e8d84611ab3565b95602085013595506040909401359392505050565b60008060008060808587031215611eb857600080fd5b611ec185611ab3565b93506020850135925060408501359150606085013567ffffffffffffffff811115611eeb57600080fd5b611dfd87828801611b46565b60008060408385031215611f0a57600080fd5b823567ffffffffffffffff80821115611f2257600080fd5b818501915085601f830112611f3657600080fd5b81356020611f4382612463565b604051611f508282612553565b8381528281019150858301600585901b870184018b1015611f7057600080fd5b600096505b84871015611f9a57611f8681611ab3565b835260019690960195918301918301611f75565b5096505086013592505080821115611fb157600080fd5b50611fbe85828601611acf565b9150509250929050565b600060208284031215611fda57600080fd5b5035919050565b60008060408385031215611ff457600080fd5b82359150611be460208401611ab3565b6000806040838503121561201757600080fd5b50508035926020909101359150565b60006020828403121561203857600080fd5b813561094a81612699565b60006020828403121561205557600080fd5b815161094a81612699565b600081518084526020808501945080840160005b8381101561209057815187529582019590820190600101612074565b509495945050505050565b600081518084526120b38160208601602086016124d5565b601f01601f19169290920160200192915050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516120ff8160178501602088016124d5565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516121308160288401602088016124d5565b01602801949350505050565b6001600160a01b0386811682528516602082015260a06040820181905260009061216890830186612060565b828103606084015261217a8186612060565b9050828103608084015261218e818561209b565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906121d49083018461209b565b979650505050505050565b60208152600061094a6020830184612060565b6040815260006122056040830185612060565b82810360208401526122178185612060565b95945050505050565b60208152600061094a602083018461209b565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b60208082526024908201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604082015263616e636560e01b606082015260800190565b60208082526029908201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260408201526808185c1c1c9bdd995960ba1b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526023908201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260408201526265737360e81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206040820152670dad2e6dac2e8c6d60c31b606082015260800190565b60208082526021908201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736040820152607360f81b606082015260800190565b600067ffffffffffffffff82111561247d5761247d6125dd565b5060051b60200190565b6000821982111561249a5761249a61259b565b500190565b60008160001904831182151516156124b9576124b961259b565b500290565b6000828210156124d0576124d061259b565b500390565b60005b838110156124f05781810151838201526020016124d8565b838111156106055750506000910152565b6000816125105761251061259b565b506000190190565b600181811c9082168061252c57607f821691505b6020821081141561254d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f1916810167ffffffffffffffff81118282101715612579576125796125dd565b6040525050565b60006000198214156125945761259461259b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d111561260c5760046000803e5060005160e01c5b90565b600060443d101561261d5790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561264d57505050505090565b82850191508151818111156126655750505050505090565b843d870101602082850101111561267f5750505050505090565b61268e60208286010187612553565b509095945050505050565b6001600160e01b031981168114610e1757600080fdfea26469706673582212200fa0fdea6701ee1bb20867083a3f31b5bd212618271f6f70ca8526566fcd5cec64736f6c634300080600339f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6"
    }
}
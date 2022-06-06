const IS_MAINNET = process.env.REACT_APP_ENVIRONMENT === 'mainnet';

const MAINNET_ABIS = {
    multisig_wallet: [
        {
          "constant": true,
          "inputs": [{ "name": "", "type": "uint256" }],
          "name": "owners",
          "outputs": [{ "name": "", "type": "address" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [{ "name": "owner", "type": "address" }],
          "name": "removeOwner",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [{ "name": "transactionId", "type": "uint256" }],
          "name": "revokeConfirmation",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [{ "name": "", "type": "address" }],
          "name": "isOwner",
          "outputs": [{ "name": "", "type": "bool" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            { "name": "", "type": "uint256" },
            { "name": "", "type": "address" }
          ],
          "name": "confirmations",
          "outputs": [{ "name": "", "type": "bool" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            { "name": "pending", "type": "bool" },
            { "name": "executed", "type": "bool" }
          ],
          "name": "getTransactionCount",
          "outputs": [{ "name": "count", "type": "uint256" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [{ "name": "owner", "type": "address" }],
          "name": "addOwner",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [{ "name": "transactionId", "type": "uint256" }],
          "name": "isConfirmed",
          "outputs": [{ "name": "", "type": "bool" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [{ "name": "transactionId", "type": "uint256" }],
          "name": "getConfirmationCount",
          "outputs": [{ "name": "count", "type": "uint256" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [{ "name": "", "type": "uint256" }],
          "name": "transactions",
          "outputs": [
            { "name": "destination", "type": "address" },
            { "name": "value", "type": "uint256" },
            { "name": "data", "type": "bytes" },
            { "name": "executed", "type": "bool" }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getOwners",
          "outputs": [{ "name": "", "type": "address[]" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            { "name": "from", "type": "uint256" },
            { "name": "to", "type": "uint256" },
            { "name": "pending", "type": "bool" },
            { "name": "executed", "type": "bool" }
          ],
          "name": "getTransactionIds",
          "outputs": [{ "name": "_transactionIds", "type": "uint256[]" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [{ "name": "transactionId", "type": "uint256" }],
          "name": "getConfirmations",
          "outputs": [{ "name": "_confirmations", "type": "address[]" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "transactionCount",
          "outputs": [{ "name": "", "type": "uint256" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [{ "name": "_required", "type": "uint256" }],
          "name": "changeRequirement",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [{ "name": "transactionId", "type": "uint256" }],
          "name": "confirmTransaction",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            { "name": "destination", "type": "address" },
            { "name": "value", "type": "uint256" },
            { "name": "data", "type": "bytes" }
          ],
          "name": "submitTransaction",
          "outputs": [{ "name": "transactionId", "type": "uint256" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "MAX_OWNER_COUNT",
          "outputs": [{ "name": "", "type": "uint256" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "required",
          "outputs": [{ "name": "", "type": "uint256" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            { "name": "owner", "type": "address" },
            { "name": "newOwner", "type": "address" }
          ],
          "name": "replaceOwner",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [{ "name": "transactionId", "type": "uint256" }],
          "name": "executeTransaction",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "inputs": [
            { "name": "_owners", "type": "address[]" },
            { "name": "_required", "type": "uint256" }
          ],
          "payable": false,
          "type": "constructor"
        },
        { "payable": true, "type": "fallback" },
        {
          "anonymous": false,
          "inputs": [
            { "indexed": true, "name": "sender", "type": "address" },
            { "indexed": true, "name": "transactionId", "type": "uint256" }
          ],
          "name": "Confirmation",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            { "indexed": true, "name": "sender", "type": "address" },
            { "indexed": true, "name": "transactionId", "type": "uint256" }
          ],
          "name": "Revocation",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            { "indexed": true, "name": "transactionId", "type": "uint256" }
          ],
          "name": "Submission",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            { "indexed": true, "name": "transactionId", "type": "uint256" }
          ],
          "name": "Execution",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            { "indexed": true, "name": "transactionId", "type": "uint256" }
          ],
          "name": "ExecutionFailure",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            { "indexed": true, "name": "sender", "type": "address" },
            { "indexed": false, "name": "value", "type": "uint256" }
          ],
          "name": "Deposit",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [{ "indexed": true, "name": "owner", "type": "address" }],
          "name": "OwnerAddition",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [{ "indexed": true, "name": "owner", "type": "address" }],
          "name": "OwnerRemoval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [{ "indexed": false, "name": "required", "type": "uint256" }],
          "name": "RequirementChange",
          "type": "event"
        }
      ],
    message_proxy_mainnet_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "ExtraContractRegistered",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "contractAddress",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ExtraContractRemoved",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "contractAddress",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "GasCostMessageHeaderWasChanged",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "uint256",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "GasCostMessageWasChanged",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "uint256",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "GasLimitWasChanged",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "uint256",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "OutgoingMessage",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "dstChainHash",
                    "indexed": true
                },
                {
                    "type": "uint256",
                    "name": "msgCounter",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "srcContract",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "dstContract",
                    "indexed": false
                },
                {
                    "type": "bytes",
                    "name": "data",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "PostMessageError",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "msgCounter",
                    "indexed": true
                },
                {
                    "type": "bytes",
                    "name": "message",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "VersionUpdated",
            "inputs": [
                {
                    "type": "string",
                    "name": "oldVersion",
                    "indexed": false
                },
                {
                    "type": "string",
                    "name": "newVersion",
                    "indexed": false
                }
            ]
        },
        {
            "type": "function",
            "name": "CHAIN_CONNECTOR_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "CONSTANT_SETTER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "EXTRA_CONTRACT_REGISTRAR_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "MAINNET_HASH",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "MESSAGES_LENGTH",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "REVERT_REASON_LENGTH",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addConnectedChain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "communityPool",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "connectedChains",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "incomingMessageCounter"
                },
                {
                    "type": "uint256",
                    "name": "outgoingMessageCounter"
                },
                {
                    "type": "bool",
                    "name": "inited"
                }
            ]
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "gasLimit",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getContractRegisteredLength",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getContractRegisteredRange",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "uint256",
                    "name": "from"
                },
                {
                    "type": "uint256",
                    "name": "to"
                }
            ],
            "outputs": [
                {
                    "type": "address[]",
                    "name": "contractsInRange"
                }
            ]
        },
        {
            "type": "function",
            "name": "getIncomingMessagesCounter",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "fromSchainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getOutgoingMessagesCounter",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "targetSchainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "headerMessageGasCost",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllRegisteredContracts",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address[]",
                    "name": "contracts"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeMessageProxy",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newGasLimit"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isConnectedChain",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isContractRegistered",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "contractAddress"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageGasCost",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageInProgress",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "postIncomingMessages",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "fromSchainName"
                },
                {
                    "type": "uint256",
                    "name": "startingCounter"
                },
                {
                    "type": "tuple[]",
                    "name": "messages",
                    "components": [
                        {
                            "type": "address",
                            "name": "sender"
                        },
                        {
                            "type": "address",
                            "name": "destinationContract"
                        },
                        {
                            "type": "bytes",
                            "name": "data"
                        }
                    ]
                },
                {
                    "type": "tuple",
                    "name": "sign",
                    "components": [
                        {
                            "type": "uint256[2]",
                            "name": "blsSignature"
                        },
                        {
                            "type": "uint256",
                            "name": "hashA"
                        },
                        {
                            "type": "uint256",
                            "name": "hashB"
                        },
                        {
                            "type": "uint256",
                            "name": "counter"
                        }
                    ]
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "postOutgoingMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "targetChainHash"
                },
                {
                    "type": "address",
                    "name": "targetContract"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "registerExtraContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "extraContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "registerExtraContractForAll",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "extraContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeConnectedChain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeExtraContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "extraContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeExtraContractForAll",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "extraContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setCommunityPool",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newCommunityPoolAddress"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setNewGasLimit",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newGasLimit"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setNewHeaderMessageGasCost",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newHeaderMessageGasCost"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setNewMessageGasCost",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newMessageGasCost"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setVersion",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "newVersion"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "version",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "string",
                    "name": ""
                }
            ]
        }
    ],
    linker_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "connectSchain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address[]",
                    "name": "schainContracts"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "disconnectSchain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasMainnetContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "mainnetContract"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchain",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": "connected"
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isNotKilled",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "kill",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "registerMainnetContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newMainnetContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeMainnetContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "mainnetContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "statuses",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "uint8",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        }
    ],
    community_pool_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "MinTransactionGasWasChanged",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "uint256",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "CONSTANT_SETTER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "activeUsers",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": ""
                },
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "checkUserBalance",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "receiver"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getBalance",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "user"
                },
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "linker"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "minTransactionGas",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "rechargeUserWallet",
            "constant": false,
            "stateMutability": "payable",
            "payable": true,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "user"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "refundGasBySchainWallet",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "node"
                },
                {
                    "type": "uint256",
                    "name": "gas"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "refundGasByUser",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "node"
                },
                {
                    "type": "address",
                    "name": "user"
                },
                {
                    "type": "uint256",
                    "name": "gas"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "setMinTransactionGas",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newMinTransactionGas"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "withdrawFunds",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "uint256",
                    "name": "amount"
                }
            ],
            "outputs": []
        }
    ],
    deposit_box_eth_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "ActiveEthTransfers",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash",
                    "indexed": true
                },
                {
                    "type": "bool",
                    "name": "active",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEPOSIT_BOX_MANAGER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "activeEthTransfers",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "approveTransfers",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "deposit",
            "constant": false,
            "stateMutability": "payable",
            "payable": true,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "disableActiveEthTransfers",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "disableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableActiveEthTransfers",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "gasPayer",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getFunds",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "receiver"
                },
                {
                    "type": "uint256",
                    "name": "amount"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getMyEth",
            "constant": false,
            "payable": false,
            "inputs": [],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "linkerValue"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isWhitelisted",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "linker",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "postMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "transferredAmount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        }
    ],
    deposit_box_erc20_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC20TokenAdded",
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName",
                    "indexed": false
                },
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC20TokenReady",
            "inputs": [
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                },
                {
                    "type": "uint256",
                    "name": "amount",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEPOSIT_BOX_MANAGER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addERC20TokenByOwner",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc20OnMainnet"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "depositERC20",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc20OnMainnet"
                },
                {
                    "type": "uint256",
                    "name": "amount"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "disableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "gasPayer",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getFunds",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc20OnMainnet"
                },
                {
                    "type": "address",
                    "name": "receiver"
                },
                {
                    "type": "uint256",
                    "name": "amount"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC20",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "uint256",
                    "name": "from"
                },
                {
                    "type": "uint256",
                    "name": "to"
                }
            ],
            "outputs": [
                {
                    "type": "address[]",
                    "name": "tokensInRange"
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC20Length",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToERC20",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc20OnMainnet"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "linkerValue"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllTokensForSchain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address[]",
                    "name": "tokens"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isWhitelisted",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "linker",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "postMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "transferredAmount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                },
                {
                    "type": "address",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        }
    ],
    deposit_box_erc721_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC721TokenAdded",
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName",
                    "indexed": false
                },
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC721TokenReady",
            "inputs": [
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                },
                {
                    "type": "uint256",
                    "name": "tokenId",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEPOSIT_BOX_MANAGER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addERC721TokenByOwner",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "depositERC721",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                },
                {
                    "type": "uint256",
                    "name": "tokenId"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "disableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "gasPayer",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getFunds",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                },
                {
                    "type": "address",
                    "name": "receiver"
                },
                {
                    "type": "uint256",
                    "name": "tokenId"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC721",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "uint256",
                    "name": "from"
                },
                {
                    "type": "uint256",
                    "name": "to"
                }
            ],
            "outputs": [
                {
                    "type": "address[]",
                    "name": "tokensInRange"
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC721Length",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToERC721",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "linkerValue"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllTokensForSchain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address[]",
                    "name": "tokens"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isWhitelisted",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "linker",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "postMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "transferredAmount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": ""
                },
                {
                    "type": "uint256",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        }
    ],
    deposit_box_erc1155_abi : [
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC1155TokenAdded",
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName",
                    "indexed": false
                },
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC1155TokenReady",
            "inputs": [
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                },
                {
                    "type": "uint256[]",
                    "name": "ids",
                    "indexed": false
                },
                {
                    "type": "uint256[]",
                    "name": "amounts",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEPOSIT_BOX_MANAGER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addERC1155TokenByOwner",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "depositERC1155",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet"
                },
                {
                    "type": "uint256",
                    "name": "id"
                },
                {
                    "type": "uint256",
                    "name": "amount"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "depositERC1155Batch",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet"
                },
                {
                    "type": "uint256[]",
                    "name": "ids"
                },
                {
                    "type": "uint256[]",
                    "name": "amounts"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "disableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "gasPayer",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getFunds",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet"
                },
                {
                    "type": "address",
                    "name": "receiver"
                },
                {
                    "type": "uint256[]",
                    "name": "ids"
                },
                {
                    "type": "uint256[]",
                    "name": "amounts"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC1155",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "uint256",
                    "name": "from"
                },
                {
                    "type": "uint256",
                    "name": "to"
                }
            ],
            "outputs": [
                {
                    "type": "address[]",
                    "name": "tokensInRange"
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC1155Length",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToERC1155",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "linkerValue"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllTokensForSchain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address[]",
                    "name": "tokens"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isWhitelisted",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "linker",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "onERC1155BatchReceived",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "operator"
                },
                {
                    "type": "address",
                    "name": ""
                },
                {
                    "type": "uint256[]",
                    "name": ""
                },
                {
                    "type": "uint256[]",
                    "name": ""
                },
                {
                    "type": "bytes",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "bytes4",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "onERC1155Received",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "operator"
                },
                {
                    "type": "address",
                    "name": ""
                },
                {
                    "type": "uint256",
                    "name": ""
                },
                {
                    "type": "uint256",
                    "name": ""
                },
                {
                    "type": "bytes",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "bytes4",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "postMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "transferredAmount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                },
                {
                    "type": "address",
                    "name": ""
                },
                {
                    "type": "uint256",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        }
    ],
    deposit_box_erc721_with_metadata_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC721TokenAdded",
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName",
                    "indexed": false
                },
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC721TokenReady",
            "inputs": [
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                },
                {
                    "type": "uint256",
                    "name": "tokenId",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEPOSIT_BOX_MANAGER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addERC721TokenByOwner",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "depositERC721",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                },
                {
                    "type": "uint256",
                    "name": "tokenId"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "disableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "gasPayer",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getFunds",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                },
                {
                    "type": "address",
                    "name": "receiver"
                },
                {
                    "type": "uint256",
                    "name": "tokenId"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC721",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "uint256",
                    "name": "from"
                },
                {
                    "type": "uint256",
                    "name": "to"
                }
            ],
            "outputs": [
                {
                    "type": "address[]",
                    "name": "tokensInRange"
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC721Length",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToERC721",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "linkerValue"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllTokensForSchain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address[]",
                    "name": "tokens"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isWhitelisted",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "linker",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "postMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "transferredAmount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": ""
                },
                {
                    "type": "uint256",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        }
    ],
    etherbase: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "EtherReceived",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "EtherSent",
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
            "name": "ETHER_MANAGER_ROLE",
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
                    "name": "schainOwner",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "partiallyRetrieve",
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
                    "internalType": "address payable",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "retrieve",
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
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    marionette: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "EtherReceived",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "EtherSent",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "output",
                    "type": "bytes"
                }
            ],
            "name": "FunctionCallResult",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint8",
                    "name": "version",
                    "type": "uint8"
                }
            ],
            "name": "Initialized",
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
            "inputs": [],
            "name": "ACCESS_VIOLATION",
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
            "name": "IMA_ROLE",
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
            "name": "PUPPETEER_ROLE",
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
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "encodeFunctionCall",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "execute",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "payable",
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
                    "name": "ima",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "postMessage",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
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
                    "internalType": "address payable",
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "sendEth",
            "outputs": [],
            "stateMutability": "payable",
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
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    config_controller: [
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
          "name": "DEPLOYER_ADMIN_ROLE",
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
          "name": "DEPLOYER_ROLE",
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
          "name": "MTM_ADMIN_ROLE",
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
          "name": "enableMTM",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "disableMTM",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "enableFreeContractDeployment",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "disableFreeContractDeployment",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "addToWhitelist",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "removeFromWhitelist",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "isAddressWhitelisted",
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
          "name": "isMTMEnabled",
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
          "name": "isFCDEnabled",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
}

const TESTNET_ABIS = {
    message_proxy_mainnet_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "ExtraContractRegistered",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "contractAddress",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ExtraContractRemoved",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "contractAddress",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "GasCostMessageHeaderWasChanged",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "uint256",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "GasCostMessageWasChanged",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "uint256",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "GasLimitWasChanged",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "uint256",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "OutgoingMessage",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "dstChainHash",
                    "indexed": true
                },
                {
                    "type": "uint256",
                    "name": "msgCounter",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "srcContract",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "dstContract",
                    "indexed": false
                },
                {
                    "type": "bytes",
                    "name": "data",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "PostMessageError",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "msgCounter",
                    "indexed": true
                },
                {
                    "type": "bytes",
                    "name": "message",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "VersionUpdated",
            "inputs": [
                {
                    "type": "string",
                    "name": "oldVersion",
                    "indexed": false
                },
                {
                    "type": "string",
                    "name": "newVersion",
                    "indexed": false
                }
            ]
        },
        {
            "type": "function",
            "name": "CHAIN_CONNECTOR_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "CONSTANT_SETTER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "EXTRA_CONTRACT_REGISTRAR_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "MAINNET_HASH",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "MESSAGES_LENGTH",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "REVERT_REASON_LENGTH",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addConnectedChain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "communityPool",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "connectedChains",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "incomingMessageCounter"
                },
                {
                    "type": "uint256",
                    "name": "outgoingMessageCounter"
                },
                {
                    "type": "bool",
                    "name": "inited"
                }
            ]
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "gasLimit",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getContractRegisteredLength",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getContractRegisteredRange",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "uint256",
                    "name": "from"
                },
                {
                    "type": "uint256",
                    "name": "to"
                }
            ],
            "outputs": [
                {
                    "type": "address[]",
                    "name": "contractsInRange"
                }
            ]
        },
        {
            "type": "function",
            "name": "getIncomingMessagesCounter",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "fromSchainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getOutgoingMessagesCounter",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "targetSchainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "headerMessageGasCost",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllRegisteredContracts",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address[]",
                    "name": "contracts"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeMessageProxy",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newGasLimit"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isConnectedChain",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isContractRegistered",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "contractAddress"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageGasCost",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageInProgress",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "postIncomingMessages",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "fromSchainName"
                },
                {
                    "type": "uint256",
                    "name": "startingCounter"
                },
                {
                    "type": "tuple[]",
                    "name": "messages",
                    "components": [
                        {
                            "type": "address",
                            "name": "sender"
                        },
                        {
                            "type": "address",
                            "name": "destinationContract"
                        },
                        {
                            "type": "bytes",
                            "name": "data"
                        }
                    ]
                },
                {
                    "type": "tuple",
                    "name": "sign",
                    "components": [
                        {
                            "type": "uint256[2]",
                            "name": "blsSignature"
                        },
                        {
                            "type": "uint256",
                            "name": "hashA"
                        },
                        {
                            "type": "uint256",
                            "name": "hashB"
                        },
                        {
                            "type": "uint256",
                            "name": "counter"
                        }
                    ]
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "postOutgoingMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "targetChainHash"
                },
                {
                    "type": "address",
                    "name": "targetContract"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "registerExtraContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "extraContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "registerExtraContractForAll",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "extraContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeConnectedChain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeExtraContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "extraContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeExtraContractForAll",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "extraContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setCommunityPool",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newCommunityPoolAddress"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setNewGasLimit",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newGasLimit"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setNewHeaderMessageGasCost",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newHeaderMessageGasCost"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setNewMessageGasCost",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newMessageGasCost"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setVersion",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "newVersion"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "version",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "string",
                    "name": ""
                }
            ]
        }
    ],
    linker_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "connectSchain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address[]",
                    "name": "schainContracts"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "disconnectSchain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasMainnetContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "mainnetContract"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchain",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": "connected"
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isNotKilled",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "kill",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "registerMainnetContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newMainnetContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeMainnetContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "mainnetContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "statuses",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "uint8",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        }
    ],
    community_pool_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "MinTransactionGasWasChanged",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "uint256",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "CONSTANT_SETTER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "activeUsers",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": ""
                },
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "checkUserBalance",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "receiver"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getBalance",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "user"
                },
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "linker"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "minTransactionGas",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "rechargeUserWallet",
            "constant": false,
            "stateMutability": "payable",
            "payable": true,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "user"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "refundGasBySchainWallet",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "node"
                },
                {
                    "type": "uint256",
                    "name": "gas"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "refundGasByUser",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "node"
                },
                {
                    "type": "address",
                    "name": "user"
                },
                {
                    "type": "uint256",
                    "name": "gas"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "setMinTransactionGas",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newMinTransactionGas"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "withdrawFunds",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "uint256",
                    "name": "amount"
                }
            ],
            "outputs": []
        }
    ],
    deposit_box_eth_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "ActiveEthTransfers",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash",
                    "indexed": true
                },
                {
                    "type": "bool",
                    "name": "active",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEPOSIT_BOX_MANAGER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "activeEthTransfers",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "approveTransfers",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "deposit",
            "constant": false,
            "stateMutability": "payable",
            "payable": true,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "disableActiveEthTransfers",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "disableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableActiveEthTransfers",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "gasPayer",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getFunds",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "receiver"
                },
                {
                    "type": "uint256",
                    "name": "amount"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getMyEth",
            "constant": false,
            "payable": false,
            "inputs": [],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "linkerValue"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isWhitelisted",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "linker",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "postMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "transferredAmount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        }
    ],
    deposit_box_erc20_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC20TokenAdded",
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName",
                    "indexed": false
                },
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC20TokenReady",
            "inputs": [
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                },
                {
                    "type": "uint256",
                    "name": "amount",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEPOSIT_BOX_MANAGER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addERC20TokenByOwner",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc20OnMainnet"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "depositERC20",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc20OnMainnet"
                },
                {
                    "type": "uint256",
                    "name": "amount"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "disableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "gasPayer",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getFunds",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc20OnMainnet"
                },
                {
                    "type": "address",
                    "name": "receiver"
                },
                {
                    "type": "uint256",
                    "name": "amount"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC20",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "uint256",
                    "name": "from"
                },
                {
                    "type": "uint256",
                    "name": "to"
                }
            ],
            "outputs": [
                {
                    "type": "address[]",
                    "name": "tokensInRange"
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC20Length",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToERC20",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc20OnMainnet"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "linkerValue"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllTokensForSchain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address[]",
                    "name": "tokens"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isWhitelisted",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "linker",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "postMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "transferredAmount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                },
                {
                    "type": "address",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        }
    ],
    deposit_box_erc721_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC721TokenAdded",
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName",
                    "indexed": false
                },
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC721TokenReady",
            "inputs": [
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                },
                {
                    "type": "uint256",
                    "name": "tokenId",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEPOSIT_BOX_MANAGER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addERC721TokenByOwner",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "depositERC721",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                },
                {
                    "type": "uint256",
                    "name": "tokenId"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "disableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "gasPayer",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getFunds",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                },
                {
                    "type": "address",
                    "name": "receiver"
                },
                {
                    "type": "uint256",
                    "name": "tokenId"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC721",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "uint256",
                    "name": "from"
                },
                {
                    "type": "uint256",
                    "name": "to"
                }
            ],
            "outputs": [
                {
                    "type": "address[]",
                    "name": "tokensInRange"
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC721Length",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToERC721",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "linkerValue"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllTokensForSchain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address[]",
                    "name": "tokens"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isWhitelisted",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "linker",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "postMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "transferredAmount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": ""
                },
                {
                    "type": "uint256",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        }
    ],
    deposit_box_erc1155_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC1155TokenAdded",
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName",
                    "indexed": false
                },
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC1155TokenReady",
            "inputs": [
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                },
                {
                    "type": "uint256[]",
                    "name": "ids",
                    "indexed": false
                },
                {
                    "type": "uint256[]",
                    "name": "amounts",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEPOSIT_BOX_MANAGER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addERC1155TokenByOwner",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "depositERC1155",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet"
                },
                {
                    "type": "uint256",
                    "name": "id"
                },
                {
                    "type": "uint256",
                    "name": "amount"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "depositERC1155Batch",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet"
                },
                {
                    "type": "uint256[]",
                    "name": "ids"
                },
                {
                    "type": "uint256[]",
                    "name": "amounts"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "disableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "gasPayer",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getFunds",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet"
                },
                {
                    "type": "address",
                    "name": "receiver"
                },
                {
                    "type": "uint256[]",
                    "name": "ids"
                },
                {
                    "type": "uint256[]",
                    "name": "amounts"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC1155",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "uint256",
                    "name": "from"
                },
                {
                    "type": "uint256",
                    "name": "to"
                }
            ],
            "outputs": [
                {
                    "type": "address[]",
                    "name": "tokensInRange"
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC1155Length",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToERC1155",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "linkerValue"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllTokensForSchain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address[]",
                    "name": "tokens"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isWhitelisted",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "linker",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "onERC1155BatchReceived",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "operator"
                },
                {
                    "type": "address",
                    "name": ""
                },
                {
                    "type": "uint256[]",
                    "name": ""
                },
                {
                    "type": "uint256[]",
                    "name": ""
                },
                {
                    "type": "bytes",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "bytes4",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "onERC1155Received",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "operator"
                },
                {
                    "type": "address",
                    "name": ""
                },
                {
                    "type": "uint256",
                    "name": ""
                },
                {
                    "type": "uint256",
                    "name": ""
                },
                {
                    "type": "bytes",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "bytes4",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "postMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "transferredAmount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                },
                {
                    "type": "address",
                    "name": ""
                },
                {
                    "type": "uint256",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        }
    ],
    deposit_box_erc721_with_metadata_abi: [
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC721TokenAdded",
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName",
                    "indexed": false
                },
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC721TokenReady",
            "inputs": [
                {
                    "type": "address",
                    "name": "contractOnMainnet",
                    "indexed": true
                },
                {
                    "type": "uint256",
                    "name": "tokenId",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEPOSIT_BOX_MANAGER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "LINKER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addERC721TokenByOwner",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "contractReceiver"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "depositERC721",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                },
                {
                    "type": "uint256",
                    "name": "tokenId"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "disableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableWhitelist",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "gasPayer",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getFunds",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                },
                {
                    "type": "address",
                    "name": "receiver"
                },
                {
                    "type": "uint256",
                    "name": "tokenId"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC721",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "uint256",
                    "name": "from"
                },
                {
                    "type": "uint256",
                    "name": "to"
                }
            ],
            "outputs": [
                {
                    "type": "address[]",
                    "name": "tokensInRange"
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToAllERC721Length",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getSchainToERC721",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainnet"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "hasSchainContract",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                },
                {
                    "type": "address",
                    "name": "linkerValue"
                },
                {
                    "type": "address",
                    "name": "messageProxyValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newContractManagerOfSkaleManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllTokensForSchain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address[]",
                    "name": "tokens"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isWhitelisted",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "linker",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageProxy",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "postMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeSchainContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "schainLinks",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "transferredAmount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": ""
                },
                {
                    "type": "uint256",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        }
    ],
    etherbase: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "EtherReceived",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "EtherSent",
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
            "name": "ETHER_MANAGER_ROLE",
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
                    "name": "schainOwner",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "partiallyRetrieve",
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
                    "internalType": "address payable",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "retrieve",
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
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    marionette: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "EtherReceived",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "EtherSent",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "output",
                    "type": "bytes"
                }
            ],
            "name": "FunctionCallResult",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint8",
                    "name": "version",
                    "type": "uint8"
                }
            ],
            "name": "Initialized",
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
            "inputs": [],
            "name": "ACCESS_VIOLATION",
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
            "name": "IMA_ROLE",
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
            "name": "PUPPETEER_ROLE",
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
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "encodeFunctionCall",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "execute",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "payable",
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
                    "name": "ima",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "postMessage",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
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
                    "internalType": "address payable",
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "sendEth",
            "outputs": [],
            "stateMutability": "payable",
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
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    config_controller: [
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
          "name": "DEPLOYER_ADMIN_ROLE",
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
          "name": "DEPLOYER_ROLE",
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
          "name": "MTM_ADMIN_ROLE",
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
          "name": "enableMTM",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "disableMTM",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "enableFreeContractDeployment",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "disableFreeContractDeployment",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "addToWhitelist",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "removeFromWhitelist",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "isAddressWhitelisted",
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
          "name": "isMTMEnabled",
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
          "name": "isFCDEnabled",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ],
    multisig_wallet: [
        {
          "constant": true,
          "inputs": [{ "name": "", "type": "uint256" }],
          "name": "owners",
          "outputs": [{ "name": "", "type": "address" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [{ "name": "owner", "type": "address" }],
          "name": "removeOwner",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [{ "name": "transactionId", "type": "uint256" }],
          "name": "revokeConfirmation",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [{ "name": "", "type": "address" }],
          "name": "isOwner",
          "outputs": [{ "name": "", "type": "bool" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            { "name": "", "type": "uint256" },
            { "name": "", "type": "address" }
          ],
          "name": "confirmations",
          "outputs": [{ "name": "", "type": "bool" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            { "name": "pending", "type": "bool" },
            { "name": "executed", "type": "bool" }
          ],
          "name": "getTransactionCount",
          "outputs": [{ "name": "count", "type": "uint256" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [{ "name": "owner", "type": "address" }],
          "name": "addOwner",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [{ "name": "transactionId", "type": "uint256" }],
          "name": "isConfirmed",
          "outputs": [{ "name": "", "type": "bool" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [{ "name": "transactionId", "type": "uint256" }],
          "name": "getConfirmationCount",
          "outputs": [{ "name": "count", "type": "uint256" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [{ "name": "", "type": "uint256" }],
          "name": "transactions",
          "outputs": [
            { "name": "destination", "type": "address" },
            { "name": "value", "type": "uint256" },
            { "name": "data", "type": "bytes" },
            { "name": "executed", "type": "bool" }
          ],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getOwners",
          "outputs": [{ "name": "", "type": "address[]" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            { "name": "from", "type": "uint256" },
            { "name": "to", "type": "uint256" },
            { "name": "pending", "type": "bool" },
            { "name": "executed", "type": "bool" }
          ],
          "name": "getTransactionIds",
          "outputs": [{ "name": "_transactionIds", "type": "uint256[]" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [{ "name": "transactionId", "type": "uint256" }],
          "name": "getConfirmations",
          "outputs": [{ "name": "_confirmations", "type": "address[]" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "transactionCount",
          "outputs": [{ "name": "", "type": "uint256" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [{ "name": "_required", "type": "uint256" }],
          "name": "changeRequirement",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [{ "name": "transactionId", "type": "uint256" }],
          "name": "confirmTransaction",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            { "name": "destination", "type": "address" },
            { "name": "value", "type": "uint256" },
            { "name": "data", "type": "bytes" }
          ],
          "name": "submitTransaction",
          "outputs": [{ "name": "transactionId", "type": "uint256" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "MAX_OWNER_COUNT",
          "outputs": [{ "name": "", "type": "uint256" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "required",
          "outputs": [{ "name": "", "type": "uint256" }],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            { "name": "owner", "type": "address" },
            { "name": "newOwner", "type": "address" }
          ],
          "name": "replaceOwner",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [{ "name": "transactionId", "type": "uint256" }],
          "name": "executeTransaction",
          "outputs": [],
          "payable": false,
          "type": "function"
        },
        {
          "inputs": [
            { "name": "_owners", "type": "address[]" },
            { "name": "_required", "type": "uint256" }
          ],
          "payable": false,
          "type": "constructor"
        },
        { "payable": true, "type": "fallback" },
        {
          "anonymous": false,
          "inputs": [
            { "indexed": true, "name": "sender", "type": "address" },
            { "indexed": true, "name": "transactionId", "type": "uint256" }
          ],
          "name": "Confirmation",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            { "indexed": true, "name": "sender", "type": "address" },
            { "indexed": true, "name": "transactionId", "type": "uint256" }
          ],
          "name": "Revocation",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            { "indexed": true, "name": "transactionId", "type": "uint256" }
          ],
          "name": "Submission",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            { "indexed": true, "name": "transactionId", "type": "uint256" }
          ],
          "name": "Execution",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            { "indexed": true, "name": "transactionId", "type": "uint256" }
          ],
          "name": "ExecutionFailure",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            { "indexed": true, "name": "sender", "type": "address" },
            { "indexed": false, "name": "value", "type": "uint256" }
          ],
          "name": "Deposit",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [{ "indexed": true, "name": "owner", "type": "address" }],
          "name": "OwnerAddition",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [{ "indexed": true, "name": "owner", "type": "address" }],
          "name": "OwnerRemoval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [{ "indexed": false, "name": "required", "type": "uint256" }],
          "name": "RequirementChange",
          "type": "event"
        }
      ]
}

let sharedAbis = {
    s_fuel_registry: [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_eoa",
              "type": "address"
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
          "name": "WRITER_ROLE",
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
              "name": "contractAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "dAppName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "contractType",
              "type": "string"
            }
          ],
          "name": "addContract",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getContracts",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "contractAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "dAppName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "contractType",
                  "type": "string"
                },
                {
                  "internalType": "bool",
                  "name": "isActive",
                  "type": "bool"
                }
              ],
              "internalType": "struct SFuelRegistry.SFuelContract[]",
              "name": "",
              "type": "tuple[]"
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
              "name": "contractAddress",
              "type": "address"
            }
          ],
          "name": "removeContract",
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
        }
      ],
    s_fuel_contracts_whitelist: [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "caller",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "ContractFilled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "EtherDeposit",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "reciever",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "whitelistedContract",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "RetrievedSFuel",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "returner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "whitelistedContract",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "ReturnedSFuel",
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
          "stateMutability": "payable",
          "type": "fallback"
        },
        {
          "inputs": [],
          "name": "CONTRACT_MANAGER_ROLE",
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
          "name": "IS_WHITELISTED_CONTRACT",
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
          "name": "WHITELIST_MANAGER_ROLE",
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
          "name": "fillContract",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getActiveState",
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
              "name": "_address",
              "type": "address"
            }
          ],
          "name": "getBalance",
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
          "inputs": [],
          "name": "getExpectedContractBalance",
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
          "inputs": [],
          "name": "getExpectedUserBalance",
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
              "internalType": "address payable",
              "name": "_retriever",
              "type": "address"
            }
          ],
          "name": "retrieveSFuel",
          "outputs": [],
          "stateMutability": "payable",
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
          "inputs": [],
          "name": "selfDestruct",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            }
          ],
          "name": "setExpectedContractBalance",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            }
          ],
          "name": "setExpectedUserBalance",
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
          "name": "updateActiveState",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ]
}


if (IS_MAINNET) {
    Object.assign(sharedAbis, MAINNET_ABIS);
} else {
    Object.assign(sharedAbis, TESTNET_ABIS);
}

export default sharedAbis;
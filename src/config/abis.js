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
    message_proxy_mainnet: [
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
    linker: [
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
    community_pool: [
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
    deposit_box_eth: [
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
    deposit_box_erc20: [
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
    deposit_box_erc721: [
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
    deposit_box_erc1155 : [
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
    deposit_box_erc721_with_metadata: [
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
    message_proxy_mainnet: [
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
    linker: [
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
    community_pool: [
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
    deposit_box_eth: [
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
    deposit_box_erc20: [
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
    deposit_box_erc721: [
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
    deposit_box_erc1155: [
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
    deposit_box_erc721_with_metadata: [
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
      ],
    ERC1155OnChain: [
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
    ERC20OnChain: [
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
                    "name": "recipient",
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
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
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
    ERC721OnChain: [
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
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
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
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "tokenUri",
                    "type": "string"
                }
            ],
            "name": "setTokenURI",
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
    community_locker: [
        {
            "type": "event",
            "anonymous": false,
            "name": "ActivateUser",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash",
                    "indexed": false
                },
                {
                    "type": "address",
                    "name": "user",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ConstantUpdated",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "constantHash",
                    "indexed": true
                },
                {
                    "type": "uint256",
                    "name": "previousValue",
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
            "name": "LockUser",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash",
                    "indexed": false
                },
                {
                    "type": "address",
                    "name": "user",
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
            "name": "MAINNET_NAME",
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
            "name": "checkAllowedToSendMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "receiver"
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
            "name": "gasPriceTimestamp",
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
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "newSchainName"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                },
                {
                    "type": "address",
                    "name": "newTokenManagerLinker"
                },
                {
                    "type": "address",
                    "name": "newCommunityPool"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "lastMessageTimeStamp",
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
            "name": "mainnetGasPrice",
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
                    "name": "fromChainHash"
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
            "name": "schainHash",
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
            "name": "setGasPrice",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "gasPrice"
                },
                {
                    "type": "uint256",
                    "name": "timestamp"
                },
                {
                    "type": "tuple",
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
                    ],
                    "name": ""
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setTimeLimitPerMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newTimeLimitPerMessage"
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
            "name": "timeLimitPerMessage",
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
            "name": "tokenManagerLinker",
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
        }
    ],
    eth_erc20: [
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
            "name": "BURNER_ROLE",
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
            "name": "forceBurn",
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
                    "name": "tokenManagerEthAddress",
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
                    "name": "recipient",
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
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
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
    key_storage: [
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
            "name": "FN_NUM_GET_CONFIG_VARIABLE_UINT256",
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
            "name": "FN_NUM_GET_CURRENT_BLS_PUBLIC_KEY",
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
            "name": "FREE_MEM_PTR",
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
            "name": "getBlsCommonPublicKey",
            "outputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "a",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "b",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IFieldOperations.Fp2Point",
                            "name": "x",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "a",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "b",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IFieldOperations.Fp2Point",
                            "name": "y",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct IFieldOperations.G2Point",
                    "name": "",
                    "type": "tuple"
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
            "inputs": [],
            "name": "initialize",
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
    message_proxy_chain: [
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
            "name": "ETHERBASE",
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
            "name": "MINIMUM_BALANCE",
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
                    "name": "chainName"
                }
            ],
            "outputs": []
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
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "blsKeyStorage"
                },
                {
                    "type": "string",
                    "name": "schainName"
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
                    "name": "chainHash"
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
            "name": "keyStorage",
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
                    "name": "fromChainName"
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
                    "name": "signature",
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
                    "name": "chainName"
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
                    "name": "chainName"
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
                    "name": "chainName"
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
            "name": "schainHash",
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
            "name": "verifyOutgoingMessageData",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "tuple",
                    "name": "message",
                    "components": [
                        {
                            "type": "bytes32",
                            "name": "dstChainHash"
                        },
                        {
                            "type": "uint256",
                            "name": "msgCounter"
                        },
                        {
                            "type": "address",
                            "name": "srcContract"
                        },
                        {
                            "type": "address",
                            "name": "dstContract"
                        },
                        {
                            "type": "bytes",
                            "name": "data"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": "isValidMessage"
                }
            ]
        },
        {
            "type": "function",
            "name": "verifySignature",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "hashedMessage"
                },
                {
                    "type": "tuple",
                    "name": "signature",
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
    proxy_admin: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "contract TransparentUpgradeableProxy",
                    "name": "proxy",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "newAdmin",
                    "type": "address"
                }
            ],
            "name": "changeProxyAdmin",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract TransparentUpgradeableProxy",
                    "name": "proxy",
                    "type": "address"
                }
            ],
            "name": "getProxyAdmin",
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
                    "internalType": "contract TransparentUpgradeableProxy",
                    "name": "proxy",
                    "type": "address"
                }
            ],
            "name": "getProxyImplementation",
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
            "inputs": [],
            "name": "owner",
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
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract TransparentUpgradeableProxy",
                    "name": "proxy",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "implementation",
                    "type": "address"
                }
            ],
            "name": "upgrade",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract TransparentUpgradeableProxy",
                    "name": "proxy",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "implementation",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "upgradeAndCall",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    token_manager_erc1155: [
        {
            "type": "event",
            "anonymous": false,
            "name": "DepositBoxWasChanged",
            "inputs": [
                {
                    "type": "address",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "address",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC1155TokenAdded",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc1155OnSchain",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC1155TokenCreated",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc1155OnSchain",
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
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
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
            "name": "ERC1155TokenReceived",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc1155OnSchain",
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
            "name": "AUTOMATIC_DEPLOY_ROLE",
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
            "name": "MAINNET_NAME",
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
        },
        {
            "type": "function",
            "name": "TOKEN_REGISTRAR_ROLE",
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
                    "name": "targetChainName"
                },
                {
                    "type": "address",
                    "name": "erc1155OnMainnet"
                },
                {
                    "type": "address",
                    "name": "erc1155OnSchain"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addTokenManager",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "newTokenManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addedClones",
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
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "automaticDeploy",
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
            "name": "changeDepositBoxAddress",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newDepositBox"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "clonesErc1155",
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
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "communityLocker",
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
            "name": "depositBox",
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
            "name": "deprecatedClonesErc1155",
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
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "disableAutomaticDeploy",
            "constant": false,
            "payable": false,
            "inputs": [],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableAutomaticDeploy",
            "constant": false,
            "payable": false,
            "inputs": [],
            "outputs": []
        },
        {
            "type": "function",
            "name": "exitToMainERC1155",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractOnMainnet"
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
            "name": "exitToMainERC1155Batch",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractOnMainnet"
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
            "name": "hasTokenManager",
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
                    "type": "string",
                    "name": "newChainName"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                },
                {
                    "type": "address",
                    "name": "newIMALinker"
                },
                {
                    "type": "address",
                    "name": "newCommunityLocker"
                },
                {
                    "type": "address",
                    "name": "newDepositBox"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllClonesERC1155",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address[]",
                    "name": "contracts"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeTokenManager",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "newSchainName"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                },
                {
                    "type": "address",
                    "name": "newIMALinker"
                },
                {
                    "type": "address",
                    "name": "newCommunityLocker"
                },
                {
                    "type": "address",
                    "name": "newDepositBox"
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
                    "name": "fromChainHash"
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
            "name": "removeTokenManager",
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
            "name": "schainHash",
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
            "name": "tokenManagerLinker",
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
            "name": "tokenManagers",
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
            "name": "transferToSchainERC1155",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "targetSchainName"
                },
                {
                    "type": "address",
                    "name": "contractOnMainnet"
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
            "name": "transferToSchainERC1155Batch",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "targetSchainName"
                },
                {
                    "type": "address",
                    "name": "contractOnMainnet"
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
    token_manager_erc20: [
        {
            "type": "event",
            "anonymous": false,
            "name": "DepositBoxWasChanged",
            "inputs": [
                {
                    "type": "address",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "address",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC20TokenAdded",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc20OnMainChain",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc20OnSchain",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC20TokenCreated",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc20OnMainChain",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc20OnSchain",
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
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
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
            "name": "ERC20TokenReceived",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc20OnMainChain",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc20OnSchain",
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
            "name": "AUTOMATIC_DEPLOY_ROLE",
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
            "name": "MAINNET_NAME",
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
        },
        {
            "type": "function",
            "name": "TOKEN_REGISTRAR_ROLE",
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
                    "name": "targetChainName"
                },
                {
                    "type": "address",
                    "name": "erc20OnMainChain"
                },
                {
                    "type": "address",
                    "name": "erc20OnSchain"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addTokenManager",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "newTokenManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addedClones",
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
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "automaticDeploy",
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
            "name": "changeDepositBoxAddress",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newDepositBox"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "clonesErc20",
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
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "communityLocker",
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
            "name": "depositBox",
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
            "name": "deprecatedClonesErc20",
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
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "disableAutomaticDeploy",
            "constant": false,
            "payable": false,
            "inputs": [],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableAutomaticDeploy",
            "constant": false,
            "payable": false,
            "inputs": [],
            "outputs": []
        },
        {
            "type": "function",
            "name": "exitToMainERC20",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractOnMainnet"
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
            "name": "hasTokenManager",
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
                    "type": "string",
                    "name": "newChainName"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                },
                {
                    "type": "address",
                    "name": "newIMALinker"
                },
                {
                    "type": "address",
                    "name": "newCommunityLocker"
                },
                {
                    "type": "address",
                    "name": "newDepositBox"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllClonesERC20",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address[]",
                    "name": "contracts"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeTokenManager",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "newSchainName"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                },
                {
                    "type": "address",
                    "name": "newIMALinker"
                },
                {
                    "type": "address",
                    "name": "newCommunityLocker"
                },
                {
                    "type": "address",
                    "name": "newDepositBox"
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
            "name": "postMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "fromChainHash"
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
            "name": "removeTokenManager",
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
            "name": "schainHash",
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
            "name": "tokenManagerLinker",
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
            "name": "tokenManagers",
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
            "name": "totalSupplyOnMainnet",
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
            "name": "transferToSchainERC20",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "targetSchainName"
                },
                {
                    "type": "address",
                    "name": "contractOnMainnet"
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
    token_manager_erc721: [
        {
            "type": "event",
            "anonymous": false,
            "name": "DepositBoxWasChanged",
            "inputs": [
                {
                    "type": "address",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "address",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC721TokenAdded",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc721OnMainChain",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc721OnSchain",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ERC721TokenCreated",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc721OnMainChain",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc721OnSchain",
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
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
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
            "name": "ERC721TokenReceived",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc721OnMainChain",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "erc721OnSchain",
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
            "name": "AUTOMATIC_DEPLOY_ROLE",
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
            "name": "MAINNET_NAME",
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
        },
        {
            "type": "function",
            "name": "TOKEN_REGISTRAR_ROLE",
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
                    "name": "targetChainName"
                },
                {
                    "type": "address",
                    "name": "erc721OnMainChain"
                },
                {
                    "type": "address",
                    "name": "erc721OnSchain"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addTokenManager",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "newTokenManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "addedClones",
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
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "automaticDeploy",
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
            "name": "changeDepositBoxAddress",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newDepositBox"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "clonesErc721",
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
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "communityLocker",
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
            "name": "depositBox",
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
            "name": "deprecatedClonesErc721",
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
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "disableAutomaticDeploy",
            "constant": false,
            "payable": false,
            "inputs": [],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableAutomaticDeploy",
            "constant": false,
            "payable": false,
            "inputs": [],
            "outputs": []
        },
        {
            "type": "function",
            "name": "exitToMainERC721",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractOnMainnet"
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
            "name": "hasTokenManager",
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
                    "type": "string",
                    "name": "newChainName"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                },
                {
                    "type": "address",
                    "name": "newIMALinker"
                },
                {
                    "type": "address",
                    "name": "newCommunityLocker"
                },
                {
                    "type": "address",
                    "name": "newDepositBox"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllClonesERC721",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address[]",
                    "name": "contracts"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeTokenManager",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "newSchainName"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                },
                {
                    "type": "address",
                    "name": "newIMALinker"
                },
                {
                    "type": "address",
                    "name": "newCommunityLocker"
                },
                {
                    "type": "address",
                    "name": "newDepositBox"
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
            "name": "postMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "fromChainHash"
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
            "name": "removeTokenManager",
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
            "name": "schainHash",
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
            "name": "tokenManagerLinker",
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
            "name": "tokenManagers",
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
            "name": "transferToSchainERC721",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "targetSchainName"
                },
                {
                    "type": "address",
                    "name": "contractOnMainnet"
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
    token_manager_eth: [
        {
            "type": "event",
            "anonymous": false,
            "name": "DepositBoxWasChanged",
            "inputs": [
                {
                    "type": "address",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "address",
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
            "name": "AUTOMATIC_DEPLOY_ROLE",
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
            "name": "MAINNET_NAME",
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
        },
        {
            "type": "function",
            "name": "TOKEN_REGISTRAR_ROLE",
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
            "name": "addTokenManager",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "newTokenManager"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "automaticDeploy",
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
            "name": "changeDepositBoxAddress",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newDepositBox"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "communityLocker",
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
            "name": "depositBox",
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
            "name": "disableAutomaticDeploy",
            "constant": false,
            "payable": false,
            "inputs": [],
            "outputs": []
        },
        {
            "type": "function",
            "name": "enableAutomaticDeploy",
            "constant": false,
            "payable": false,
            "inputs": [],
            "outputs": []
        },
        {
            "type": "function",
            "name": "ethErc20",
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
            "name": "exitToMain",
            "constant": false,
            "payable": false,
            "inputs": [
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
            "name": "hasTokenManager",
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
                    "type": "string",
                    "name": "newChainName"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                },
                {
                    "type": "address",
                    "name": "newIMALinker"
                },
                {
                    "type": "address",
                    "name": "newCommunityLocker"
                },
                {
                    "type": "address",
                    "name": "newDepositBox"
                },
                {
                    "type": "address",
                    "name": "ethErc20Address"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeTokenManager",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "newSchainName"
                },
                {
                    "type": "address",
                    "name": "newMessageProxy"
                },
                {
                    "type": "address",
                    "name": "newIMALinker"
                },
                {
                    "type": "address",
                    "name": "newCommunityLocker"
                },
                {
                    "type": "address",
                    "name": "newDepositBox"
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
            "name": "postMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "fromChainHash"
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
            "name": "removeTokenManager",
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
            "name": "schainHash",
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
            "name": "setEthErc20Address",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newEthErc20Address"
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
            "name": "tokenManagerLinker",
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
            "name": "tokenManagers",
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
        }
    ],
    token_manager_linker: [
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
            "name": "MAINNET_HASH",
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
            "name": "MAINNET_NAME",
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
            "name": "REGISTRAR_ROLE",
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
                    "internalType": "string",
                    "name": "schainName",
                    "type": "string"
                }
            ],
            "name": "connectSchain",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "schainName",
                    "type": "string"
                }
            ],
            "name": "disconnectSchain",
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
                    "internalType": "string",
                    "name": "schainName",
                    "type": "string"
                }
            ],
            "name": "hasSchain",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "connected",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract ITokenManager",
                    "name": "tokenManager",
                    "type": "address"
                }
            ],
            "name": "hasTokenManager",
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
                    "internalType": "contract IMessageProxyForSchain",
                    "name": "newMessageProxyAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "linker",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "linkerAddress",
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
            "inputs": [],
            "name": "messageProxy",
            "outputs": [
                {
                    "internalType": "contract IMessageProxyForSchain",
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
                    "internalType": "contract ITokenManager",
                    "name": "newTokenManager",
                    "type": "address"
                }
            ],
            "name": "registerTokenManager",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract ITokenManager",
                    "name": "tokenManagerAddress",
                    "type": "address"
                }
            ],
            "name": "removeTokenManager",
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
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "tokenManagers",
            "outputs": [
                {
                    "internalType": "contract ITokenManager",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    token_manager_erc721_with_metadata: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "oldValue",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "newValue",
                    "type": "address"
                }
            ],
            "name": "DepositBoxWasChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "chainHash",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "erc721OnMainChain",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "erc721OnSchain",
                    "type": "address"
                }
            ],
            "name": "ERC721TokenAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "chainHash",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "erc721OnMainChain",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "erc721OnSchain",
                    "type": "address"
                }
            ],
            "name": "ERC721TokenCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "chainHash",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "contractOnMainnet",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ERC721TokenReady",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "chainHash",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "erc721OnMainChain",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "erc721OnSchain",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ERC721TokenReceived",
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
            "name": "AUTOMATIC_DEPLOY_ROLE",
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
            "name": "MAINNET_HASH",
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
            "name": "MAINNET_NAME",
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
            "name": "TOKEN_REGISTRAR_ROLE",
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
                    "internalType": "string",
                    "name": "targetChainName",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "erc721OnMainChain",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "erc721OnSchain",
                    "type": "address"
                }
            ],
            "name": "addERC721TokenByOwner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "schainName",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "newTokenManager",
                    "type": "address"
                }
            ],
            "name": "addTokenManager",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract ERC721OnChain",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "addedClones",
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
            "name": "automaticDeploy",
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
                    "name": "newDepositBox",
                    "type": "address"
                }
            ],
            "name": "changeDepositBoxAddress",
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
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "clonesErc721",
            "outputs": [
                {
                    "internalType": "contract ERC721OnChain",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "communityLocker",
            "outputs": [
                {
                    "internalType": "contract ICommunityLocker",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "depositBox",
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
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "deprecatedClonesErc721",
            "outputs": [
                {
                    "internalType": "contract ERC721OnChain",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "disableAutomaticDeploy",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "enableAutomaticDeploy",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "contractOnMainnet",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "exitToMainERC721",
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
                    "internalType": "string",
                    "name": "schainName",
                    "type": "string"
                }
            ],
            "name": "hasTokenManager",
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
                    "internalType": "string",
                    "name": "newChainName",
                    "type": "string"
                },
                {
                    "internalType": "contract IMessageProxyForSchain",
                    "name": "newMessageProxy",
                    "type": "address"
                },
                {
                    "internalType": "contract ITokenManagerLinker",
                    "name": "newIMALinker",
                    "type": "address"
                },
                {
                    "internalType": "contract ICommunityLocker",
                    "name": "newCommunityLocker",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "newDepositBox",
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
                    "internalType": "address[]",
                    "name": "contracts",
                    "type": "address[]"
                }
            ],
            "name": "initializeAllClonesERC721",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "newSchainName",
                    "type": "string"
                },
                {
                    "internalType": "contract IMessageProxyForSchain",
                    "name": "newMessageProxy",
                    "type": "address"
                },
                {
                    "internalType": "contract ITokenManagerLinker",
                    "name": "newIMALinker",
                    "type": "address"
                },
                {
                    "internalType": "contract ICommunityLocker",
                    "name": "newCommunityLocker",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "newDepositBox",
                    "type": "address"
                }
            ],
            "name": "initializeTokenManager",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "messageProxy",
            "outputs": [
                {
                    "internalType": "contract IMessageProxyForSchain",
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
                    "name": "fromChainHash",
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
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "schainName",
                    "type": "string"
                }
            ],
            "name": "removeTokenManager",
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
            "inputs": [],
            "name": "schainHash",
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
            "name": "tokenManagerLinker",
            "outputs": [
                {
                    "internalType": "contract ITokenManagerLinker",
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
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "tokenManagers",
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
                    "internalType": "string",
                    "name": "targetSchainName",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "contractOnMainnet",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferToSchainERC721",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "transferredAmount",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],

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
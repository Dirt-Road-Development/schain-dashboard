import { ethers } from "ethers";
import addresses from "../../config/addresses";

class IMARole {

    

    constructor(abi, address, ethereum) {
        this.MINTER_ROLE = ethers.utils.id("MINTER_ROLE");
        this.BURNER_ROLE = ethers.utils.id("BURNER_ROLE");
        abi = [
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "symbol",
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
						"name": "to",
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
		];
        this.provider = new ethers.providers.Web3Provider(ethereum);
        this.contract = new ethers.Contract(address, abi, this.provider.getSigner());
        console.log(this.contract);
    }

    async initializeChecks(type) {
        const _tokenManagerAddress = this._getTokenManagerAddress(type);
        const calls = [this.contract.callStatic.hasRole(this.MINTER_ROLE, _tokenManagerAddress)];
        if (this.contract['BURNER_ROLE']) calls.push(this.contract.callStatic.hasRole(this.BURNER_ROLE, _tokenManagerAddress))
        try { 
            return Promise.all(calls).then((res) => {
                return res;
            }).catch((err) => {
                console.log("ERROR: ", err);
                throw new Error(err);
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    async assignRole(role, type) {
        try {
            console.log("Type: ", type);
            const _assignType = this._getFunctionType(role);
            const _tokenManagerAddress = this._getTokenManagerAddress(type);
            console.log(_tokenManagerAddress);
            return await this._grantRole(_tokenManagerAddress, role);
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }

    /// Checks for How to Assign Minter Role to Contract
    _getFunctionType(role) {
        console.log("ROLE: ", role);
        console.log(this.contract);
        if (this.contract['grantRole']) {
            if (role === 'minter' && this.contract['MINTER_ROLE']) {
                return 'grantRole';
            } else if (role === 'burner' && this.contract['BURNER_ROLE']) {
                return 'grantRole';
            } else {
                throw new Error(`This contract does not contain ${role} functionality`);
            }
        } else {
            throw new Error(`This contract does not contain ${role} functionality`);
        }
    }

    /// Gets Address of Token Manager
    _getTokenManagerAddress(type) {
        return addresses[`token_manager_${type}`];
    }

    /// Assigns [Minter/Burner] Role via Grant Role Function
    async _grantRole(assigneeAddress, role) {
        
        let assignment = role === 'minter' ? this.MINTER_ROLE : this.BURNER_ROLE;
        try {
            // console.log(1);
            // console.log(assignment);
            // const _hasRoleBefore = await this.contract.callStatic.hasRole([assignment, assigneeAddress]);
            // console.log(2);
            // if (_hasRoleBefore) {
            //     return {
            //         hasRole: _hasRoleBefore
            //     };
            // }
            // console.log(3);
            const _assignFn = await (await this.contract.grantRole(assignment, assigneeAddress, {
                gasLimit: ethers.utils.hexlify(5000000)
            })).wait();
            console.log(4);
            // const _hasRoleAfter = await this.contract.callStatic.hasRole([assignment, assigneeAddress]);

            return {
                txHash: _assignFn,
                hasRole: true
            };

        } catch (err) {
            console.log("ERROR: ", err);
            throw new Error('Error Granting Role');
        }
    }
}

export {
    IMARole
}
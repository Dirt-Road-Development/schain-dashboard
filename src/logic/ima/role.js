import { ethers } from "ethers";
import addresses from "../../config/addresses";

class IMARole {

    constructor(abi, address, ethereum) {
        this.provider = new ethers.providers.Web3Provider(ethereum);
        this.contract = new ethers.Contract(address, abi, this.provider.getSigner());
    }

    async assignRole(isS2S, role, type) {
        try {
            const _assignType = this._getFunctionType(role);
            const _tokenManagerAddress = this._getTokenManagerAddress(type);
            if (_assignType === 'addMinter') {
                /// Add Token Manager via addMinter Function
                return await this._addMinter(_tokenManagerAddress);
            } else if (_assignType === 'grantRole') {
                /// Add Token Manager via grantRole Function
                return await this._grantRole(_tokenManagerAddress);
            } else {
                /// Throw Error (Should be Impossible)
                throw new Error('Impossible');
            }
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }

    /// Checks for How to Assign Minter Role to Contract
    _getFunctionType(type) {
        // const possibleRoles = ['MINTER_ROLE'];
        // const possibleFunctions = ['grantRole', 'addMinter'];
        console.log(this.contract);
        if (this.contract['addMinter']) {
            return 'addMinter';
        } else if (this.contract['grantRole']) {
            if (this.contract['MINTER_ROLE']) {
                return 'grantRole';
            } else {
                throw new Error(`This contract does not contain ${type} functionality`);
            }
        } else {
            throw new Error(`This contract does not contain ${type} functionality`);
        }
        
    }

    /// Gets Address of Token Manager
    _getTokenManagerAddress(type) {
        return addresses[`token_manager_${type}`];
    }

    /// Assigns Minter role via addMinter Function
    async _addMinter(assigneeAddress) {
        try {
            console.log("ADD MINTER");
        } catch (err) {
            throw new Error(err);
        }    
    }

    /// Assigns Minter Role via addMinter Function
    async _grantRole(assigneeAddress) {
        console.log(this.contract);
        try {
            const MINTER_ROLE = await this.contract.callStatic.MINTER_ROLE();
            const _hasRoleBefore = await this.contract.callStatic.hasRole(MINTER_ROLE, assigneeAddress);
            if (_hasRoleBefore) {
                return {
                    hasRole: _hasRoleBefore
                };
            }
            const _assignFn = await (await this.contract.grantRole(MINTER_ROLE, assigneeAddress, {
                gasLimit: ethers.utils.hexlify(5000000)
            })).wait();

            const _hasRoleAfter = await this.contract.callStatic.hasRole(MINTER_ROLE, assigneeAddress);

            return {
                txHash: _assignFn,
                hasRole: _hasRoleAfter
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
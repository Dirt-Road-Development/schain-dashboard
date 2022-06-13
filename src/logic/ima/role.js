import { ethers } from "ethers";
import addresses from "../../config/addresses";

class IMARole {

    MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6"
    BURNER_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("BURNER_ROLE"));

    constructor(abi, address, ethereum) {
        this.provider = new ethers.providers.Web3Provider(ethereum);
        this.contract = new ethers.Contract(address, abi, this.provider.getSigner());
    }

    async initializeChecks(type) {
        const _tokenManagerAddress = this._getTokenManagerAddress(type);
        const calls = [this.contract.callStatic.hasRole(this.MINTER_ROLE, _tokenManagerAddress)];
        if (this.contract['BURNER_ROLE']) calls.push(this.contract.callStatic.hasRole(this.BURNER_ROLE, _tokenManagerAddress))
        try { 
            return Promise.all(calls).then((res) => {
                return res;
            }).catch((err) => {
                throw new Error(err);
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    async assignRole(role, type) {
        try {
            const _assignType = this._getFunctionType(role);
            const _tokenManagerAddress = this._getTokenManagerAddress(type);
            return await this._grantRole(_tokenManagerAddress, role);
        } catch (err) {
            throw new Error(err);
        }
    }

    /// Checks for How to Assign Minter Role to Contract
    _getFunctionType(role) {
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
        let assignment = role === 'minter' ? await this.contract.callStatic.MINTER_ROLE() : await this.contract.calls.BURNER_ROLE();
        try {
            const _hasRoleBefore = await this.contract.callStatic.hasRole(assignment, assigneeAddress);
            if (_hasRoleBefore) {
                return {
                    hasRole: _hasRoleBefore
                };
            }
            const _assignFn = await (await this.contract.grantRole(assignment, assigneeAddress, {
                gasLimit: ethers.utils.hexlify(5000000)
            })).wait();

            const _hasRoleAfter = await this.contract.callStatic.hasRole(assignment, assigneeAddress);

            return {
                txHash: _assignFn,
                hasRole: _hasRoleAfter
            };

        } catch (err) {
            throw new Error('Error Granting Role');
        }
    }
}

export {
    IMARole
}
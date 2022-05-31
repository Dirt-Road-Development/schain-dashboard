import { ethers } from 'ethers';
import * as Config from '../../config';

class MultisigWallet {

    async initialize(_contract, _address) {
        console.log("INIT ADDRESS: ", _address);
        return Promise.all([
            this._getOwners(_contract),
            this._getTransactionCount(_contract)
        ]).then(([a, b]) => {
            return {
                owners: a,
                isOwner: a.includes(ethers.utils.getAddress(_address)),
                count: b
            };
        }).catch((err) => {
            console.log("ERROR INIT MSG: ", err);
            return undefined;
        })
    }

    async _getOwners(_contract) {
        try {
            return await _contract.callStatic.getOwners();
        } catch (err) {
            console.log("Error: Owners", err)
            throw new Error(err);
        }
    }

    async _getTransactionCount(_contract) {
        try {
            return Promise.all([
                _contract.callStatic.getTransactionCount(true, false),
                _contract.callStatic.getTransactionCount(false, true)
            ]).then(([a, b]) => {
                let pending = Number(a);
                let executed = Number(b);
                return {
                    pending,
                    executed,
                    total: pending + executed
                }
            }).catch(err => {
                console.log("Error: Inner MSG TX C", err)
                throw new Error(err);
            });
        } catch (err) {
            console.log("Error: Outer MSG TX C", err)
            return undefined;
        }
    }
}

export {
    MultisigWallet
}
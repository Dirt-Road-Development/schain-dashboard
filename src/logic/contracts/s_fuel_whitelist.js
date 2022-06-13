import { ethers } from "ethers";
import { Contracts } from "../../config";
import sharedAbis from "../../config/abis";
import { Utils } from "../utils";

class SFuelWhitelist extends Utils {

    _contracts = new Contracts();

    async assignRole(ethereum, contractAddress, assigneeAddress, role) {
        try {

            const provider = new ethers.providers.Web3Provider(ethereum);
            let contract = new ethers.Contract(contractAddress, sharedAbis.s_fuel_contracts_whitelist, provider.getSigner());
            const hasRole = await contract.callStatic.hasRole(role, assigneeAddress);
            if (hasRole) {
                return;
            }
            let receipt = await (await contract.grantRole(role, assigneeAddress, {
                gasLimit: ethers.utils.hexlify(50000000)
            }));

            return receipt;
        } catch (err) {
            throw new Error(err);
        }
    }

    async revokeRole(ethereum, contractAddress, assigneeAddress, role) {
        try {

            const provider = new ethers.providers.Web3Provider(ethereum);
            let contract = new ethers.Contract(contractAddress, sharedAbis.s_fuel_contracts_whitelist, provider.getSigner());
            const hasRole = await contract.callStatic.hasRole(role, assigneeAddress);
            if (!hasRole) {
                return;
            }
            let receipt = await (await contract.revokeRole(role, assigneeAddress, {
                gasLimit: ethers.utils.hexlify(50000000)
            }));

            return receipt;
        } catch (err) {
            throw new Error(err);
        }
    }
}

export {
    SFuelWhitelist
}
import { ethers } from "ethers";
import { Utils } from "../utils";

class FileStorage extends Utils {

    static async getDefaultAdminRole(_contract, address) {
        console.log(_contract);
        const role = await _contract.callStatic.DEFAULT_ADMIN_ROLE(); // ethers.utils.id("DEFAULT_ADMIN_ROLE");
        console.log("ROLE: ", role);
        const hasRole = await _contract.callStatic.hasRole(role, address);
        console.log("HAs role", hasRole);
        return {
            "DEFAULT_ADMIN_ROLE": hasRole
        }
    }
}

export {
    FileStorage
}
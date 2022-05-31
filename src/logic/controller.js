import { ethers } from "ethers";
import { ContractFunctions } from "./functions";

class GlobalController extends ContractFunctions {

    constructor(_rpcUrl, address) {
        super();
        this._rpcUrl = _rpcUrl;
        this._address = address;
        this._provider = this._buildProvider(_rpcUrl);
    }

    _buildProvider(_rpc) {
        return new ethers.providers.JsonRpcProvider(_rpc);
    }
    
    /// Initialize Chain State
    async initializeConfigController() {
        return await this._initializeConfigController();
    }

    /// Initialize Wallet Role Data
    async initializeRoles(address) {
        let _contracts = this._buildMultiContracts(['etherbase', 'marionette', 'config_controller']);
        return await this._initializeRoles(_contracts, address);
    }
}

export {
    GlobalController
}
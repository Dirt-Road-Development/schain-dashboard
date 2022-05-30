import { ethers } from "ethers";
import * as Config from '../config';
import { ContractFunctions } from "./functions";

class GlobalController {
    _state = {};
    _contracts = new Config.Contracts();
    _functions = new ContractFunctions();

    constructor(_rpcUrl, address) {
        this._rpcUrl = _rpcUrl;
        this._address = address;
        this._provider = this._buildProvider(_rpcUrl);
        // this._initializeChainState();
    }

    _buildProvider(_rpc) {
        return new ethers.providers.JsonRpcProvider(_rpc);
    }

    async _initializeChainState() {
        /// Create Stream for Free Contract Deployment
        console.log("Starting");
        return Promise.all([
            this._loadData('config_controller', 'freeContractDeployment'),
            this._loadData('config_controller', 'multiTransactionMode')
        ]).then(([a, b]) => {
            // console.log(a);
            return [a,b];
        })
        .catch((err) => {
            console.log(err);
        })
        // await this._buildWatchDog('config_controller', 'freeContractDeployment');
        /// Create Stream for Multi-Transaction Mode
        // await this._buildWatchDog('config_controller', 'multiTransactionMode');

        return this._state;
    }

    _buildMultiContracts(keys) {
        let _contracts = [];
        let _rpcs = [this._buildProvider(this._rpcUrl), this._buildProvider(this._rpcUrl), this._buildProvider(this._rpcUrl)]
        keys.forEach((key, index) => {
            const _config = this._contracts.getConfig(key);
            const _contract = new ethers.Contract(_config.address, _config.abi, _rpcs[index]);
            _contracts.push(_contract);
        });

        return _contracts;


    }

    async _getRoles(address) {
        console.log(address);
        let _contracts = this._buildMultiContracts(['etherbase', 'marionette', 'config_controller']);
        return await this._functions.getRoles(_contracts, address);
    }


    async _loadData(key, fn) {
        const _config = this._contracts.getConfig(key);
        const _contract = new ethers.Contract(_config.address, _config.abi, this._provider);
        let result;
        if (fn === 'freeContractDeployment') {
            key = 'freeContractDeploymentEnabled'
            result = await this._functions.getFreeContractDeployment(_contract);
        } else if (fn === 'multiTransactionMode') {
            key = 'multiTransactionModeEnabled';
            result = await this._functions.getMultiTransactionMode(_contract);
        }
        
        return [key, result];
        
    }

    get state() {
        return this._state;
    }   
}

export {
    GlobalController
}
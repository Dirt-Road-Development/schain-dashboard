import { ethers } from 'ethers';
import * as Config from '../config';

class Utils {

    constructor() {
        this._contracts = new Config.Contracts();
    }

    async _loadData(key, fn, _functions) {
        const _config = this._contracts.getConfig(key);
        const _contract = new ethers.Contract(_config.address, _config.abi, this._provider);
        let result;
        if (fn === 'freeContractDeployment') {
            key = 'freeContractDeploymentEnabled'
            result = await _functions.getFreeContractDeployment(_contract);
        } else if (fn === 'multiTransactionMode') {
            key = 'multiTransactionModeEnabled';
            result = await _functions.getMultiTransactionMode(_contract);
        }
        
        return [key, result];
    }

    _buildMultiContracts(keys) {
        let _multiContracts = [];
        let _rpcUrls = [this._buildProvider(this._rpcUrl), this._buildProvider(this._rpcUrl), this._buildProvider(this._rpcUrl)]
        keys.forEach((key, index) => {
            const _config = this._contracts.getConfig(key);
            const _contract = new ethers.Contract(_config.address, _config.abi, _rpcUrls[index]);
            _multiContracts.push(_contract);
        });
        return _multiContracts;
    }

    _buildMultiSigWallet(provider) {
        const _config = this._contracts.getConfig('multisig_wallet');
        if (!provider) {
            return new ethers.Contract(
                _config['address'],
                _config['abi'],
                this._buildProvider(this._rpcUrl)
            );
        }
        return new ethers.Contract(
            _config['address'],
            _config['abi'],
            provider.getSigner()
        );
    }

    _buildMarionette(provider) {
        const _config = this._contracts.getConfig('marionette');
        if (!provider) {
            return new ethers.Contract(
                _config['address'],
                _config['abi'],
                this._buildProvider(this._rpcUrl)
            )
        }
        return new ethers.Contract(
            _config['address'],
            _config['abi'],
            provider.getSigner()
        );
    }
}

export {
    Utils
}
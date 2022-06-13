import { ethers } from 'ethers';
import { MAINNET_RPC } from '../../config';
import { Utils } from '../utils';


class IMAEncoder extends Utils {

    

    constructor(type) {
        super();
        this.type = type;
    }

    _getConfig() {
        return this._contracts.getConfig(`deposit_box_${this.type}`);
    }

    encodeRegisterOnMainnet(chainName, originAddress) {
        const contractConfig = this._getConfig();
        const contract = new ethers.Contract(contractConfig.address, contractConfig.abi);

        try {
            return contract.interface.encodeFunctionData(
                `add${this.type.toUpperCase()}TokenByOwner`,
                [
                    chainName,
                    originAddress
                ]
            );
        } catch (err) {
            throw new Error(err);
        }
    }

    getTargetContract() {
        return this._getConfig().address;
    }

    async isTokenRegistered(chainName, token) {
        const contractConfig = this._getConfig();
        const provider = new ethers.providers.JsonRpcProvider(MAINNET_RPC);
        const contract = new ethers.Contract(contractConfig.address, contractConfig.abi, provider);
        try {
            let value = false;
            if (this.type === 'erc20') {
                value = await contract.callStatic.getSchainToERC20(chainName, token);
            } else if (this.type === 'erc721') {
                value = await contract.callStatic.getSchainToERC721(chainName, token);
            } else if (this.type === 'erc1155') {
                value = await contract.callStatic.getSchainToERC1155(chainName, token);
            } else {
                throw new Error('Token Not Acceptable');
            }
            return value;
        } catch (err) {
            throw new Error(err);
        }
    }
}

export {
    IMAEncoder 
}
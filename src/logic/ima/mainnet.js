import { ethers } from "ethers"
import { Utils } from '../utils';

class IMAMainnet extends Utils {

    constructor(ethereum, chainId) {
        super();
        this.provider = new ethers.providers.Web3Provider(ethereum);
        this._initializeContracts();
    }

    _initializeContracts() {
        this.message_proxy_mainnet = new ethers.Contract(this._contracts.getConfig('message_proxy_mainnet').address, this._contracts.getConfig('message_proxy_mainnet').abi, this.provider);
        this.linker = new ethers.Contract(this._contracts.getConfig('linker').address, this._contracts.getConfig('linker').abi, this.provider);
        this.community_pool = new ethers.Contract(this._contracts.getConfig('community_pool').address, this._contracts.getConfig('community_pool').abi, this.provider);
        this.deposit_box_eth = new ethers.Contract(this._contracts.getConfig('deposit_box_eth').address, this._contracts.getConfig('deposit_box_eth').abi, this.provider);
        this.deposit_box_erc20 = new ethers.Contract(this._contracts.getConfig('deposit_box_erc20').address, this._contracts.getConfig('deposit_box_erc20').abi, this.provider);
        this.deposit_box_erc721 = new ethers.Contract(this._contracts.getConfig('deposit_box_erc721').address, this._contracts.getConfig('deposit_box_erc721').abi, this.provider);
        this.deposit_box_erc1155 = new ethers.Contract(this._contracts.getConfig('deposit_box_erc1155').address, this._contracts.getConfig('deposit_box_erc1155').abi, this.provider);
        this.deposit_box_erc721 = new ethers.Contract(this._contracts.getConfig('deposit_box_erc721').address, this._contracts.getConfig('deposit_box_erc721').abi, this.provider);
    }
}

export {
    IMAMainnet
}
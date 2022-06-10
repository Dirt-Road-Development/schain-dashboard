import { ethers } from "ethers"
import { Utils } from '../utils';

class IMASchain extends Utils {

    constructor(ethereum, chainId) {
        super();
        this.provider = new ethers.providers.Web3Provider(ethereum);
        this._initializeContracts();
    }

    _initializeContracts() {
        this.community_locker = new ethers.Contract(this._contracts.getConfig('community_locker').address, this._contracts.getConfig('community_locker').abi, this.provider);
        this.eth_erc20 = new ethers.Contract(this._contracts.getConfig('eth_erc20').address, this._contracts.getConfig('eth_erc20').abi, this.provider);
        this.key_storage = new ethers.Contract(this._contracts.getConfig('key_storage').address, this._contracts.getConfig('key_storage').abi, this.provider);
        this.message_proxy_chain = new ethers.Contract(this._contracts.getConfig('message_proxy_chain').address, this._contracts.getConfig('message_proxy_chain').abi, this.provider);
        this.proxy_admin = new ethers.Contract(this._contracts.getConfig('proxy_admin').address, this._contracts.getConfig('proxy_admin').abi, this.provider);
        this.token_manager_erc1155 = new ethers.Contract(this._contracts.getConfig('token_manager_erc1155').address, this._contracts.getConfig('token_manager_erc1155').abi, this.provider);
        this.token_manager_erc20 = new ethers.Contract(this._contracts.getConfig('token_manager_erc20').address, this._contracts.getConfig('token_manager_erc20').abi, this.provider);
        this.token_manager_erc721 = new ethers.Contract(this._contracts.getConfig('token_manager_erc721').address, this._contracts.getConfig('token_manager_erc721').abi, this.provider);
        this.token_manager_eth = new ethers.Contract(this._contracts.getConfig('token_manager_eth').address, this._contracts.getConfig('token_manager_eth').abi, this.provider);
        this.token_manager_linker = new ethers.Contract(this._contracts.getConfig('token_manager_linker').address, this._contracts.getConfig('token_manager_linker').abi, this.provider);
        this.token_manager_erc721_with_metadata = new ethers.Contract(this._contracts.getConfig('token_manager_erc721_with_metadata').address, this._contracts.getConfig('token_manager_erc721_with_metadata').abi, this.provider);
    }
}

export {
    IMASchain
}
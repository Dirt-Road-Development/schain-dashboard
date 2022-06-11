import { ethers } from "ethers";

class IMARole {

    constructor(abi, address, ethereum) {
        this.provider = new ethers.providers.Web3Provider(ethereum);
        this.contract = new ethers.Contract(address, abi, this.provider.getSigner());
    }

}

export {
    IMARole
}
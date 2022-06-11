import { ethers, providers } from "ethers";
import { AUTOMATED_IMA_CONTRACTS } from '../../config/ima';


class DeployContract {
    
    constructor(type) {
        this.type = type;
    }

    setType(_type) {
        this.type = _type;
        console.log(this.type);
    }

    async automatedDeploy(ethereum, type, args) {
        try {
            const provider = new ethers.providers.Web3Provider(ethereum);    
            const factory = new ethers.ContractFactory(AUTOMATED_IMA_CONTRACTS[type]['abi'], AUTOMATED_IMA_CONTRACTS[type]['bytecode'], provider.getSigner());
            return await this._deployment(factory, args);
        } catch (err) {
            throw new Error(err);
        }
    }

    async manualDeployment(ethereum, abi, bytecode, args) {
        try {
            const provider = new ethers.providers.Web3Provider(ethereum);    
            const factory = new ethers.ContractFactory(abi, bytecode, provider.getSigner());
            return await this._deployment(factory, args);
        } catch (err) {
            throw new Error(err);
        }
    }

    async checkPreDeployedAddress(ethereum, address) {
        try {
            const provider = new ethers.providers.Web3Provider(ethereum);
            return await provider.getCode(address);        
        } catch (err) {
            throw new Error(err);
        }
    }

    async _deployment(factory, args) {
        let contract = await factory.deploy(args, {
            gasLimit: ethers.utils.hexlify(5000000)
        });

        let contractAddress = contract.address;

        let deployedTx = await contract.deployTransaction.wait();

        return {
            contractAddress,
            deployedTx
        };
    }



}

export {
    DeployContract
}
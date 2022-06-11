import { ethers, providers } from "ethers";
import { Interface } from "ethers/lib/utils";
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
            
            const factory = new ethers.ContractFactory(AUTOMATED_IMA_CONTRACTS[type]['abi'], AUTOMATED_IMA_CONTRACTS[type].bytecode, provider.getSigner());
            console.log("Factory: ", factory);

            return await this._deployment(factory, args, type);

            
        } catch (err) {
            console.log("ERROR: ", err);
            throw new Error(err);
        }
    }

    async manualDeployment(ethereum, abi, bytecode, args, type) {
        try {
            const provider = new ethers.providers.Web3Provider(ethereum);    
            const factory = new ethers.ContractFactory(abi, bytecode, provider.getSigner());
            return await this._deployment(factory, args, type);
        } catch (err) {
            throw new Error(err);
        }
    }

    async checkPreDeployedAddress(ethereum, address) {
        try {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const isContract = (await provider.getCode(address)) !== '0x';
            if (isContract) {
                return address;
            } else {
                throw new Error('This is not a contract');
            }
        } catch (err) {
            throw new Error(err);
        }
    }

    async _deployment(factory, args, type) {
        if (args.length === 3) args = args.pop();
        try {
            
            let contract;
            if (type === 'erc721') {
                contract = await factory.deploy(args.join(' ').trim(), {
                    gasLimit: ethers.utils.hexlify(5000000)
                });
            } else {
                contract = await factory.deploy(args, {
                    gasLimit: ethers.utils.hexlify(5000000)
                });
            }
            
            let contractAddress = contract.address;
    
            let deployedTx = await contract.deployTransaction.wait();
    
            return {
                contractAddress,
                deployedTx,
                abi: factory.interface
            };
        } catch (err) {
            console.log("Deployment Error: ", err);
            throw new Error(err);
        }
    }



}

export {
    DeployContract
}
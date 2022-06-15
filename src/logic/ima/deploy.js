import { ethers, providers } from "ethers";
import { Interface } from "ethers/lib/utils";
import { AUTOMATED_IMA_CONTRACTS } from '../../config/ima';


class DeployContract {
    
    constructor(type) {
        this.type = type;
    }

    setType(_type) {
        this.type = _type;
    }

    async automatedDeploy(ethereum, type, args) {
        try {
            const provider = new ethers.providers.Web3Provider(ethereum);
            console.log(type);
            const factory = new ethers.ContractFactory(AUTOMATED_IMA_CONTRACTS[type]['abi'], AUTOMATED_IMA_CONTRACTS[type].bytecode, provider.getSigner());

            return await this._deployment(factory, args, type);

            
        } catch (err) {
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
    
            let receipt = await contract.deployTransaction.wait();
            console.log("--------------EVENTS--------------")
            for (let event of receipt.events) {
                if (event.event != undefined) {
                    console.log(`${event.event}(${event.args})`);
                    console.log("Receipt: ", await event.getTransactionReceipt());
                }
            }
            console.log("----------------------------------")
            console.log(`Gas used: ${receipt.gasUsed}`)
            console.log(`Tx hash: ${receipt.transactionHash}`)
            // console.log(`Receipt: `, await provider.getTransactionReceipt(receipt.transactionHash));
            return {
                contractAddress,
                deployedTx: receipt,
                abi: factory.interface
            };
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }



}

export {
    DeployContract
}
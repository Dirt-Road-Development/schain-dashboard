import { BigNumber, ethers } from "ethers";
import { Contracts } from "../../config";
import { S_FUEL_CONTRACT_WHITELIST_BYTECODE, S_FUEL_REGISTRY_BYTE_CODE } from "../../config/bytecode";
import chains from "../../config/chains";
import { Utils } from "../utils";
import { AssignRole } from "../assign_role";
import { RevokeRole } from "../revoke_role";
import sharedAbis from "../../config/abis";
// import abis from "../../config/abis";
// import addresses from "../../config/addresses";

const INSECURE_PRIVATE_KEY = "0000000000000000000000000000000000000000000000000000000008000000";

class SFuelRegistry extends Utils {

    

    async deployRegistry(ethereum, chainId) {
        const _assignRole = new AssignRole();
        const _provider = new ethers.providers.Web3Provider(ethereum);
        let _insecureWallet = this._buildInsecureWallet(chainId);
        
        /// Seed Insecure Wallet with SFuel
        try {
            /// Step 1 -> Send Deployer 0.5 S-SFuel
            let _seed = await this._seedInsecureWallet(_provider, _insecureWallet);
            /// Step 2 -> Assign Deployer Role to Insecure Account
            let _assign = await _assignRole.buildTransaction(ethereum, 'config_controller', 'DEPLOYER_ROLE', _insecureWallet.address, 'msg_marionette');
            /// Step 3 -> Deploy Registry with Insecure Account, Sender as Secondary Owner ONLY if Owner on Predeployed Multisig-Wallet
            let _deploy = await this._deployRegistry(_insecureWallet, _provider.provider.selectedAddress);
            /// Step 4 -> Send Remaining S-Fuel back to Owner
            let _drain = await this._drainInsecureWallet(chainId, _provider.provider.selectedAddress);
            /// Step 5 -> Complete
            console.log("Registry Deployed");
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
        
    }

    async _deployRegistry(wallet, account) {
        console.log("Account: ", account);
        try {
            console.log(wallet);
            const _contract = this._contracts.getConfig('s_fuel_registry');
            const _bytecode = S_FUEL_REGISTRY_BYTE_CODE;
            
            let factory = new ethers.ContractFactory(_contract['abi'], _bytecode, wallet);
            const contract = await factory.deploy(account, {
                gasLimit: ethers.utils.hexlify(5000000)
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    async _drainInsecureWallet(chainId, account) {
        try {
            let wallet = this._buildWallet(chainId);
            let balance = await wallet.getBalance()
            let drainInsecureWallet = await wallet.sendTransaction({
                to: account,
                value: balance.sub(ethers.utils.parseEther("0.0000001")),
                gasLimit: ethers.utils.hexlify(5000000)
            });
    
            console.log("Drain Insecure Wallet Tx Hash: ", await drainInsecureWallet);
        } catch (err) {
            throw new Error(err);
        }

    }

    async _seedInsecureWallet(signer, wallet) {
        signer = signer.getSigner();
        try {
            // let _signedTx = await signer.sign()
            let tx = await signer.sendTransaction({
                to: wallet.address,
                value: ethers.utils.parseEther("0.5"),
                gasLimit: ethers.utils.hexlify(500000)
            });
        } catch (err) {
            console.log("Internal: ", err);
            throw new Error(err);
        }
    }

    _buildInsecureWallet(chainId) {
        try {
            let chainRpcUrl = chains.find((chain) => chain.id === parseInt(chainId)).rpcUrls.default;
            let provider = new ethers.providers.JsonRpcProvider(chainRpcUrl);
            let wallet = new ethers.Wallet(INSECURE_PRIVATE_KEY);
            wallet = wallet.connect(provider);
            return wallet;
        } catch (err) {
            throw new Error(err);
        }
    }

    async deployWhitelist(ethereum, chainId, dAppName, contractType, account) {
        try {
            const _assignRole = new AssignRole();
            const provider = new ethers.providers.Web3Provider(ethereum);
            const _contract = await this._contracts.getConfig('s_fuel_registry');
            let contract = new ethers.Contract(_contract['address'], _contract['abi'], provider.getSigner());
            /// 1 -> Deploy Whitelist (If Owner of MSG or Etherbase DEFAULT && WRITER_ROLE on registry)
            const _canProceed = await this._checkWriterRole(account, contract);
            if (!_canProceed) return 'Not a registry writer';
            const _deployed = await this._deployWhitelist(provider);
            /// 2 -> Give Contract ETHER_MANAGER_ROLE
            const _assignEtherManager = await _assignRole.buildTransaction(ethereum, 'etherbase', 'ETHER_MANAGER_ROLE', _deployed.address, 'msg_marionette');
            console.log(_assignEtherManager);

            /// 3 -> Add Whitelist to Registry
            const _addToRegistry = await this._addToRegistry(contract, dAppName, contractType, _deployed.address);
            console.log("Add To Registry: ", _addToRegistry);
        
            /// 4 -> Fill Up Contract
            let _fillUp = await _deployed.fillContract({
                gasPrice: ethers.utils.hexlify(10000000),
                gasLimit: ethers.utils.hexlify(50000000),
            })

            console.log("Fill Up: ", _fillUp);
            /// 5 -> Check Contract Balance
            let _contractBalance = await _deployed.callStatic.getBalance(_deployed.address);
            console.log('Contract Balance: ', _contractBalance);

        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }

    async _addToRegistry(contract, dAppName, contractType, whitelistAddress) {
        try {
            let _txHash = await contract.addContract(whitelistAddress, dAppName, contractType, {
                gasLimit: ethers.utils.hexlify(5000000)
            });
            return _txHash;
        } catch (err) {
            throw new Error(err);
        }
    }

    async _deployWhitelist(provider) {
        try {
            const _contract = this._contracts.getConfig('s_fuel_contracts_whitelist');
            const _bytecode = S_FUEL_CONTRACT_WHITELIST_BYTECODE;
            
            let factory = new ethers.ContractFactory(_contract['abi'], _bytecode, provider.getSigner());
            const contract = await factory.deploy({
                gasLimit: ethers.utils.hexlify(5000000)
            });

            return contract;
        } catch (err) {
            throw new Error(err);
        }
    }

    async _checkWriterRole(account, contract) {
        try {
            const WRITER_ROLE = await contract.callStatic.WRITER_ROLE();
            return await contract.callStatic.hasRole(WRITER_ROLE, account);
        } catch (err) {
            throw new Error(err);
        }
    }

    async loadRegistry(ethereum) {
        try {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const _contract = await this._contracts.getConfig('s_fuel_registry');
            let contract = new ethers.Contract(_contract['address'], _contract['abi'], provider.getSigner());
            return await contract.callStatic.getContracts();
        } catch (err) {
            console.log("ERROR: ", err);
            throw new Error(err);
        }
    }

    async deleteWhitelist(ethereum, whitelistAddress) {
        
        console.log("Whitelist V1: ", whitelistAddress);

        try {
            const revokeRole = new RevokeRole();
            /// 1 -> Provider
            const provider = new ethers.providers.Web3Provider(ethereum);
            const _contract = this._contracts.getConfig('s_fuel_registry');
            let contract = new ethers.Contract(_contract['address'], _contract['abi'], provider.getSigner());
            /// 2 -> Remove ETHER_BASE_ROLE from Whitelist
            let _revoke = await revokeRole.buildTransaction(ethereum, 'etherbase', 'ETHER_MANAGER_ROLE', whitelistAddress,  'msg_marionette');
            /// 2 -> Self Destruct Whitelist Contract -> Send to Etherbase
            let contract2 = new ethers.Contract(whitelistAddress, sharedAbis.s_fuel_contracts_whitelist, provider.getSigner());
            let _removeFromRegistry = await contract.removeContract(whitelistAddress);
            /// 3 -> Remove from SFuelRegistry
            let _selfDestruct = await contract2.selfDestruct({
                gasLimit: 500000
            });
            await this.loadRegistry();
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }

    async fillWhitelist(ethereum, contractAddress) {

        try {
            const provider = new ethers.providers.Web3Provider(ethereum);
            let contract2 = new ethers.Contract(contractAddress, sharedAbis.s_fuel_contracts_whitelist, provider.getSigner());
            let estimate = await contract2.estimateGas.fillContract();
            let gasPrice = (await provider.getGasPrice());
            let selection = estimate < gasPrice ? gasPrice : estimate;
            let receipt = await (await contract2.fillContract({
                gasPrice: 10000000,
                gasLimit: 50000000
            })).wait();

            console.log("Receipt: ", receipt);
                console.log("--------------EVENTS--------------")
                for (let event of receipt.events) {
                    if (event.event != undefined) {
                        console.log(`${event.event}(${event.args})`);
                    }
                }
                console.log("----------------------------------")
                console.log(`Gas used: ${receipt.gasUsed}`)
                console.log(`Tx hash: ${receipt.transactionHash}`)
        } catch (err) {
            console.log("Error: ", err);
            throw new Error(err);
        }
    }
    
    async whitelistContract(ethereum, contractAddress, whitelistee) {
        try {
            const provider = new ethers.providers.Web3Provider(ethereum);
            let contract = new ethers.Contract(contractAddress, sharedAbis.s_fuel_contracts_whitelist, provider.getSigner());

            let receipt = await (await contract.grantRole("0x5ce17f380ca23160a7c5ce147cd0292497d6246fba3530e88f1c6691cf3ce206", whitelistee, {
                gasLimit: ethers.utils.hexlify(50000000)
            })).wait()

            console.log("Receipt: ", receipt);
                console.log("--------------EVENTS--------------")
                for (let event of receipt.events) {
                    if (event.event != undefined) {
                        console.log(`${event.event}(${event.args})`);
                    }
                }
                console.log("----------------------------------")
                console.log(`Gas used: ${receipt.gasUsed}`)
                console.log(`Tx hash: ${receipt.transactionHash}`)

        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }
}

export {
    SFuelRegistry
}
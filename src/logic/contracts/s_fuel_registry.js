import { BigNumber, ethers } from "ethers";
import { Contracts } from "../../config";
import { S_FUEL_REGISTRY_BYTE_CODE } from "../../config/bytecode";
import chains from "../../config/chains";
import { Utils } from "../utils";
import { AssignRole } from "../assign_role";
// import abis from "../../config/abis";
// import addresses from "../../config/addresses";

const INSECURE_PRIVATE_KEY = "0000000000000000000000000000000000000000000000000000000007000000";

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
            const contract = await factory.deploy([account], {
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

}

export {
    SFuelRegistry
}
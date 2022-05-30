import abis from "./abis";
import addresses from "./addresses";
import { useContract } from "wagmi";
import { useEffect, useState } from "react";
import { Contract } from "ethers";

class Contracts {

    _abis = abis;
    _addresses = addresses;

    getConfig(_key) {
        return {
            address: this._addresses[_key],
            abi: this._abis[_key]
        };
    }
    
}

function useBuildContract(_key) {
    const contracts = new Contracts();

    const config = contracts.getConfig(_key);

    return useContract({
        addressOrName: config.address,
        contractInterface: config.abi
    });
}


export {
    Contracts,
    useBuildContract as buildContract
}
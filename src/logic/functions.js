import { ConfigController } from "./config_controller";
import { Etherbase } from "./etherbase";
import { Marionette } from "./marionette";

class ContractFunctions {

    async getFreeContractDeployment(contract) {
        try {
            let isEnabled = await contract.callStatic.isFCDEnabled();
            return isEnabled;
        } catch (err) {
            return undefined;
        }
    }

    async getMultiTransactionMode(contract) {
        try {
            let isEnabled = await contract.callStatic.isMTMEnabled();
            return isEnabled;
        } catch (err) {
            return undefined;
        }
    }

    async getRoles(_contracts, address) {
        let state = {};
        try {
            return Promise.all([
                Etherbase.getRoles(_contracts[0], address),
                Marionette.getRoles(_contracts[1], address),
                ConfigController.getRoles(_contracts[2], address)
            ]).then(([a, b, c]) => {
                console.log(a, b, c);
                return {
                    'etherbase': a,
                    'marionette': b,
                    'config_controller': c
                };
                // state['etherbase'] = a;
                // state['marionette'] = b;
                // state['config_controller'] = c;
            }).catch((err) => {
                throw new Error(err);
            });
            // // let etherbase = ;
            // // state['etherbase'] = etherbase;
            // // let marionette = await ;
            // // state['marionette'] = marionette;
            // // let configController = await ;
            // // state['config_controller'] = configController;
            // console.log("State Roles: ", state);
            // return state;
        } catch (err) {
            console.error(err);
            console.error(err);
            return undefined;
        }
    }
}

export {
    ContractFunctions
}
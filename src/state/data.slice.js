import { createSlice } from "@reduxjs/toolkit";

export const chainStateSlice = createSlice({
    name: 'chain_state',
    initialState: {
        isOwner: null,
        freeContractDeploymentEnabled: null,
        multiTransactionModeEnabled: null,
        roles: {},
        multisig: {},
        version: null,
        blockNumber: null,
    },
    reducers: {
        setData: (state, action) => {
            state[action.payload.key] = action.payload.value
        },
        setChainState: (state, action) => {
            Object.entries(action.payload).forEach((entry) => {
                state[entry[1][0]] = entry[1][1];
            })
        },
        setRoles: (state, action) => {
            state['roles'][action.payload['address']] = action.payload['roles'];
        },
        setMultisig: (state, action) => {
            console.log("MSG Payload");
            console.log(action.payload);
            state['multisig'] = action.payload;
        }
    }
});

export const { setData, setChainState, setRoles, setMultisig } = chainStateSlice.actions;

export default chainStateSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const chainStateSlice = createSlice({
    name: 'chain_state',
    initialState: {
        isOwner: null,
        freeContractDeploymentEnabled: null,
        multiTransactionModeEnabled: null,
        roles: null,
        version: null,
        blockNumber: null,
    },
    reducers: {
        setData: (state, action) => {
            state[action.payload.key] = action.payload.value
        },
        setChainState: (state, action) => {
            Object.entries(action.payload).forEach((entry) => {
                state[entry[0]] = entry[1];
            })
        },
        setRoles: (state, action) => {
            console.log("Setting Roles");
            console.log(action.payload);
            state['roles'] = action.payload;
        }
    }
});

export const { setData, setChainState, setRoles } = chainStateSlice.actions;

export default chainStateSlice.reducer;
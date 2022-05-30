import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        isOwner: null,
        fcd: null,
        mtm: null,
        version: null,
        blockNumber: null,
    },
    reducers: {
        setData: (state, action) => {
            state[action.payload.key] = action.payload.value
        }
    }
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
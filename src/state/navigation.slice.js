import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        value: 'Dashboard'
    },
    reducers: {
        setPage: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { setPage } = navigationSlice.actions;

export default navigationSlice.reducer;
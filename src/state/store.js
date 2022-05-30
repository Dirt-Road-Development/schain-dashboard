import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from './navigation.slice';
import dataReducer from './data.slice';
export default configureStore({
    reducer: {
        navigation: navigationReducer,
        chain_state: dataReducer
    }
});
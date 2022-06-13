/**
 * @license
 * 
 * SChain Dashboard
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * /**
 * @file src/state/data.slice.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 * 
 * Boilerplate from @reduxjs/toolit under MIT License
 * License Here https://github.com/reduxjs/redux-toolkit/blob/master/LICENSE
 */

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
        hasSFuelRegistry: null,
        sFuelContracts: []
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
            state['multisig'] = action.payload;
        },
        setSFuelContracts: (state, action) => {
            state['sFuelContracts'] = action.payload;
        }
    }
});

export const { setData, setChainState, setRoles, setMultisig, setSFuelContracts } = chainStateSlice.actions;

export default chainStateSlice.reducer;
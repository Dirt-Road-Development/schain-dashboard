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
 * @file src/state/ima.slice.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 * 
 * Boilerplate from @reduxjs/toolit under MIT License
 * License Here https://github.com/reduxjs/redux-toolkit/blob/master/LICENSE
 */

 import { createSlice } from "@reduxjs/toolkit";

 export const imaSlice = createSlice({
     name: 'ima',
     initialState: {
        selectedPage: null,
        addTokenIMA: {
            isActive: null,
            isComplete: null,
            type: null,
            S2S: null,
            targetABI: null,
            targetAddress: null,
            originAddress: null,
            targetName: null,
            originName: null
        }
     },
     reducers: {
         setIMAPage: (state, action) => {
            state['selectedPage'] = action.payload;
         },
         setAddTokenIMA: (state, action) => {
            console.log("PAYLOAD: ", action.payload);
            Object.entries(action.payload).map((entry, index) => {
                state['addTokenIMA'][entry[0]] = entry[1];
            })
         }
     }
 });
 
 export const { setIMAPage, setAddTokenIMA } = imaSlice.actions;
 
 export default imaSlice.reducer;
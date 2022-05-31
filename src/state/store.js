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
 * @file src/state/store.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 * 
 * Boilerplate from @reduxjs/toolit under MIT License
 * License Here https://github.com/reduxjs/redux-toolkit/blob/master/LICENSE
 * 
 */

import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from './navigation.slice';
import dataReducer from './data.slice';

export default configureStore({
    reducer: {
        navigation: navigationReducer,
        chain_state: dataReducer
    }
});
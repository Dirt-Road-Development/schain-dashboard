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
 * @file src/ui/ima/actions/mainnet/steps/copy.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import styled from "styled-components";
import { Colors } from "../../../../../config";

const CopyContainer = styled.div`
    width: 100%;
    height: 10%;
    color: white;
    text-align: center;
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 4px;
        word-break: break-all;
        max-width: 80%;
    }
`;

const Copy = ({ show, value }) => {

    if (show) {
        return <CopyContainer>
            <p>Copied <p style={{color: Colors.primary}}>{value}</p> to clipboard</p>
        </CopyContainer>
    }

    return null;
}

export {
    Copy
}
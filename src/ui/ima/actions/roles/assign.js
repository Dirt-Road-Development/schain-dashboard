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
 * @file src/ui/ima/actions/roles/assign.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */


import { useState } from "react";
import styled from "styled-components";
import { MinterBurnerButton } from "./button";
const AssignContainer = styled.div`
    margin: 16px 0;
    padding: 16px 0;
    height: 100%;
    width: 100%;
`;

const Assign = ({ isS2S, state, assignRole }) => {
    console.log(isS2S);
    return (
        <AssignContainer>
            <MinterBurnerButton type="Minter" assignRole={assignRole} />
            {isS2S && <MinterBurnerButton type="Burner" assignRole={assignRole} />}
        </AssignContainer>
    );
}


export {
    Assign
}
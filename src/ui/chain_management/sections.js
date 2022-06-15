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
 * @file src/ui/chain_management/sections.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import styled from "styled-components";
import { Section } from "./section";

const SectionsContainer = styled.div`
    height: 85%;
    position: absolute;
    left: 2.5%;
    right: 2.5%;
    top: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: space-evenly;
    justify-content: space-evenly;
`;

const Sections = () => {
    return (
        <SectionsContainer>
            <Section type="FCD" />
            <Section type="MTM" />
        </SectionsContainer>
    )
}

export {
    Sections
}
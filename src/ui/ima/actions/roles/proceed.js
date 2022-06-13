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
 * @file src/ui/ima/actions/roles/proceed.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../../config";

const RoleProceedContainer = styled.div`
    position: absolute;
    bottom: 5%;
    left: 2.5%;
    right: 2.5%;
    background: none;
    border: 1px solid ${Colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    border-radius: 16px;
    color: white;
    &:hover {
        background: white;
        color: black;
    }
`;
const RoleProceed = ({ isS2S, canProceed, nextStep }) => {
    
    const [proceed, setProceed] = useState(false);

    useEffect(() => {
        if (isS2S) {
            setProceed(!Object.values(canProceed).includes(false));
        } else {
            setProceed(canProceed.minter);
        }
    }, [canProceed])

    if (proceed) {
        return (
            <RoleProceedContainer onClick={nextStep}>
                Proceed
            </RoleProceedContainer>
        );
    }
    
}

export {
    RoleProceed
}
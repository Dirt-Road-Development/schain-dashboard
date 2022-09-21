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
 * @file src/ui/role_assigner/contract_selection.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 *
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */

import styled from "styled-components";
import { Colors } from "../../config";

const ContractSelectionContainer = styled.div`
    width: 85%;
    height: 5%;
    border: 1px solid grey;
    border-radius: 0 16px 16px 0;
    position: absolute;
    left: 2.5%;
    top: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 16px;
`;
const ContractSection = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-child(even) {
        border-left: 2px solid ${Colors.primary};
        border-right: 2px solid ${Colors.primary};
    }
`;
const ContractName = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    height: 100%;
    color: ${props => {
        if (!props.canAssign) {
            return 'black';
        } else {
            return props.active ? 'white' : 'grey';
        }
    }};
    background: ${props => {
        if (!props.canAssign) {
            return 'red';
        } else {
            return props.active ? Colors.primary : 'transparent';
        }
    }};
    border-radius: ${props => props.br ? props.br : 'none'};
`;

const ContractSelection = ({ currentContract, setContract, defaultAdminRoles }) => {
    return (
        <ContractSelectionContainer>
          {['Etherbase', 'Marionette', 'Config Controller', 'Message Proxy sChain', 'IMA', 'Token Manager', 'Token Manager Linker'].map((key, index) => {
                let borderRadius = null;
                if (index === 0) {
                    borderRadius = '16px 0 0 16px';
                } else if (index === 4) {
                    borderRadius = '0 16px 16px 0';
                }
                return (
                    <ContractSection onClick={(e) => {
                        e.preventDefault();
                        if (defaultAdminRoles[index]) {
                            setContract(key);
                        }
                    }}key={index}>
                        <ContractName canAssign={defaultAdminRoles[index]} br={borderRadius} active={currentContract === key}key={index}>{key}</ContractName>
                    </ContractSection>
                );
            })}
        </ContractSelectionContainer>
    );
}

export {
    ContractSelection
}

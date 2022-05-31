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
 * @file src/ui/role_assigner/assignee.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */

import { ethers } from "ethers";
import styled from "styled-components";
import { Colors } from "../../config";
import { useConnectedMetaMask } from 'metamask-react';

const AssigneeContainer = styled.div`
    position: absolute;
    top: 35%;
    height: 100%;
    width: 85%;
    left: 2.5%;
`;

const TextFieldContainer = styled.div`
    width: 100%;
    height: 5%;
    border: 1px solid grey;
    position: absolute;
    top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 16px;
`;


const TitleH2 = styled.h2`
    color: grey;
`;

const ValidEthereumAddressContainer = styled.div`

    width: 10%;
    height: 100%;
    border-radius: 16px 0 0 16px;
    display: flex;
    flex-direction: row;
    flex-direction: center;
    align-items: center;
    p {
        padding: 0 0 0 16px;
        text-align: center;
        color: ${props => props.isAddress ? 'green' : 'red'};
    }
`;

const ValidEthereumAddress = ({ assignee }) => {
    let isAddress = false;
    if (ethers.utils.isAddress(assignee)) {
        isAddress = true;
    }

    if (assignee) {
        
    }

    return (
        <ValidEthereumAddressContainer isAddress={isAddress}>
            {assignee && <p>{isAddress ? 'Valid' : 'Invalid'} Address </p>}
        </ValidEthereumAddressContainer>
    );
}

const TextFieldInput = styled.input`
    width: 50%;
    height: 100%;
    background: transparent;
    border: none;
    color: white;
    font-size: 1rem;
`;

const TextField = ({ assignee, setAssignee }) => {

    return <TextFieldInput value={assignee} placeholder="0x...." onChange={(e) => {
        e.preventDefault();
        setAssignee(e.target.value);
    }}/>
}

const PresetContainer = styled.div`
    width: 20%;
    height: 100%;
    color: ${Colors.primary};
    border-radius: 0 16px 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Predeployed = ({ setAssignee }) => {
    return (
        <PresetContainer onClick={(e) => {
            e.preventDefault();
            setAssignee('0xD244519000000000000000000000000000000000');
        }}>Click for Pre-Deployed MSG</PresetContainer>
    )
}

const Owner = ({ setAssignee, account }) => {
    return (
        <PresetContainer onClick={(e) => {
            e.preventDefault();
            setAssignee(account);
        }}>Click for Your Address</PresetContainer>
    )
}

const Assignee = ({ assignee, setAssignee }) => {

    const { account } = useConnectedMetaMask();

    return (
        <AssigneeContainer>
            <TitleH2>Assignee</TitleH2>
            <TextFieldContainer>
                <ValidEthereumAddress assignee={assignee} />
                <TextField assignee={assignee} setAssignee={setAssignee} />
                <Predeployed setAssignee={setAssignee} />
                <Owner account={account} setAssignee={setAssignee} />
            </TextFieldContainer>
        </AssigneeContainer>
    );
}

export {
    Assignee
}
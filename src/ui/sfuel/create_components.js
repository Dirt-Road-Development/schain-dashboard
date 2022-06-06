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
 * @file src/ui/sfuel/create_components.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import styled from "styled-components";
import { Colors } from "../../config";

const SetDappNameContainer = styled.div`
    height: 5%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid grey;
    border-radius: 16px;
`;

const InputLabel = styled.label`
    color: grey;
    font-size: 0.85rem;
    margin: 0 16px;
`;

const TextInput = styled.input`
    height: 50%;
    border: 2px solid white;
    width: 75%;
    background: none;
    border: none;
    color: white;
    font-size: 1.15rem;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px white;
    }
`;

const SetDappName = ({ dAppName, setDappName}) => {
    return (
        <SetDappNameContainer>
            <InputLabel>dApp Name</InputLabel>
            <TextInput type='text' value={dAppName ?? ""} autoFocus={true} onChange={(e) => {
                e.preventDefault();
                setDappName(e.target.value);
            }} />
        </SetDappNameContainer>
    );
}

const SelectWhitelistTypeContainer = styled.div`
    margin: 16px 0;
    height: 5%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid grey;
    border-radius: 16px;
`;

const WhitelistTypeContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: ${props => props.isSelected ? Colors.primary : Colors.background};
    border-radius: ${props => props.is1 ? '16px 0 0 16px' : '0 16px 16px 0'};
    border: 1px solid grey;
`;

const WhitelistType = ({ whitelistType, setWhitelistType, option }) => {
    return (
        <WhitelistTypeContainer isSelected={whitelistType === option} is1={option === 'contract'} onClick={(e) => {
            e.preventDefault();
            setWhitelistType(option);
        }}>
            <p>{option.substring(0, 1).toUpperCase() + option.substring(1)}</p>
        </WhitelistTypeContainer>
    );
}

const SelectWhitelistType = ({ whitelistType, setWhitelistType }) => {
    return (
        <SelectWhitelistTypeContainer>
            {['contract'].map((_str, index) => {
                return <WhitelistType key={index} whitelistType={whitelistType} setWhitelistType={setWhitelistType} option={_str} />
            })}
        </SelectWhitelistTypeContainer>
    );
}

const DeployWhitelistContainer = styled.div`
    position: absolute;
    bottom: 15%;
    width: 100%;
    padding: 8px 16px;
    background: ${Colors.primary};
    color: white;
    margin: 0 auto;
    text-align: center;
    border-radius: 16px;
    font-size: 1.15rem;
`;

const DeployWhitelist = ({ deployWhitelist }) => {
    return (
        <DeployWhitelistContainer onClick={deployWhitelist}>
            Deploy Whitelist
        </DeployWhitelistContainer>
    );
}

export {
    DeployWhitelist,
    SetDappName,
    SelectWhitelistType
}
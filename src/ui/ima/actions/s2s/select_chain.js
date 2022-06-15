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
 * @file src/ui/ima/actions/s2s/select_chain.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { useConnectedMetaMask } from "metamask-react";
import styled from "styled-components";
import { Colors } from "../../../../config";
import chains from "../../../../config/chains";

const SelectChainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
const ChainContainer = styled.div`

    width: 45%;
    height: 50%;
    background: none;
    border: 1px solid grey;
    border-radius: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
        border: 1px solid ${Colors.primary};
        background: white;
        h3 {
            color: ${Colors.primary};
        }
        p {
            color: black;
        }
    }
    h3 {
        color: white;
        position: absolute;
        left: 5%;
        right: 5%;
        top: 5%;
        text-align: center;
        font-size: 1.5rem;
    }
    .title {
        font-size: 1.15rem;
        color: white;
    }
    .description {
        font-size: 0.85rem;
        color: grey;
    }
    
`;
const SelectChain = ({ state, setState, setCurrentStep }) => {

    const { chainId } = useConnectedMetaMask();
    const chain = chains.find((chain) => chain.id === parseInt(chainId));

    const handleSelection = (isTargetChain) => {
        let _state = state;
        _state['isTargetChain'] = isTargetChain;
        _state[isTargetChain ? 'targetName' : 'originName'] = chain.name.toLowerCase();
        _state[isTargetChain ? 'targetId' : 'originId'] = chain.id;
        if (isTargetChain) {
            _state['originName'] = null;
            _state['originId'] = null;
        } else {
            _state['targetName'] = null;
            _state['targetId'] = null;
        }
        setState(_state);
        setCurrentStep();
    }

    return (
        <SelectChainContainer>
            <ChainContainer onClick={(e) => {
                e.preventDefault();
                handleSelection(false);
            }}>
                <h3>Origin</h3>
                <p className='title'>I am the Owner of the Origin Chain</p>
                <p className='description'>The origin chain is where the token is already deployed</p>
            </ChainContainer>
            <ChainContainer onClick={(e) => {
                e.preventDefault();
                handleSelection(true);
            }}>
                <h3>Target</h3>
                <p className='title'>I am the Owner of the Target Chain</p>
                <p className='description'>The target chain is where the clone will be deployed</p>
            </ChainContainer>
        </SelectChainContainer>
    );
}

export {
    SelectChain
}
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
 * @file src/ui/ima/actions/s2s/select_other_chain.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import styled from "styled-components";
import chains from "../../../../config/chains";

const SelectOtherChainContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const TitleContainer = styled.div`
    width: 100%;
    height: auto;
    font-size: 2rem;
    color: grey;
    text-align: center;
`;

const ChainsContainer = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const ChainContainer = styled.div`
    width: 30%;
    height: 15%;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 16px;
    h3 {
        color: white;
    }
    p {
        color: grey;
    }
`;
const SelectOtherChain = ({ state, setState, setCurrentStep }) => {

    const setChain = (e) => {
        e.preventDefault();
        console.log(e.value);
    }

    return (
        <SelectOtherChainContainer>
            <TitleContainer>
                Select {state.isTargetChain ? 'Origin' : 'Target'} Chain
            </TitleContainer>
            <ChainsContainer>
                {chains && chains.map((chain, index) => {
                    if (chain.id < 100) return null;
                    return <ChainContainer key={index} onClick={(e) => {
                        e.preventDefault();
                        let _state = state;
                        if (_state.isTargetChain) {
                            _state['originName'] = chain.name.toLowerCase();
                            _state['originId'] = chain.id;
                            // _state.isTargetChain ? 'originName' : 'targetName' = chain.name.toLowerCase(),
                            // _state.isTargetChain ? 'originId' : 'targetId' = parseInt(chain.id)
                        } else {
                            _state['targetName'] = chain.name.toLowerCase();
                            _state['targetId'] = chain.id;
                        }
                        setState(_state)
                        setCurrentStep();
                    }}>
                        <h3>{chain.name}</h3>
                        <p>{chain.id}</p>
                    </ChainContainer>
                })}
            </ChainsContainer>
        </SelectOtherChainContainer>
    )
}

export {
    SelectOtherChain
}
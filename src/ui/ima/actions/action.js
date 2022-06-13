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
 * @file src/ui/ima/actions/action.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { useConnectedMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import chains from "../../../config/chains";
import { setAddTokenIMA } from "../../../state/ima.slice";
import { DeployContractSchain } from "./deploy";
import { RegisterOnMainnet } from "./mainnet";
import { IMAAssignRole } from "./roles";

const RenderActionContainer = styled.div`

    position: absolute;
    top: 10%;
    height: 90%;
    width: 100%;

`;

const RenderAction = ({ step, currentStep, currentPage, setCurrentStep, isS2S }) => {

    const { chainId } = useConnectedMetaMask();
    const getChainName = chains.find((chain) => chain.id === parseInt(chainId));
    console.log("CHain: ", getChainName);

    const [state, setState] = useState({
        type: null,
        S2S: isS2S,
        targetABI: null,
        targetAddress: null,
        originAddress: null,
        targetName: getChainName.name.toLowerCase(),
        targetId: parseInt(chainId),
        originName: null,
        originId: null
    });

    // const store = useSelector((s) => s.ima_state.addTokenIMA);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log("Store on Load: ", store);
    //     setState(store);
    // }, []);

    const buildComponent = () => {
        if (!currentPage) {
            return <SelectPage />;
        }
        if (currentPage.includes('add')) {
            if (currentStep === 0) {
                return <DeployContractSchain type={currentPage.split('_')[1]} setCurrentStep={setCurrentStep} state={state} setState={setState} />;
            } else if (currentStep === 1 && state.targetABI) {
                return <IMAAssignRole type={currentPage.split('_')[1]} setCurrentStep={setCurrentStep} isS2S={state.isS2S} state={state} />
            } else if (currentStep === 2) {
                return <RegisterOnMainnet type={currentPage.split('_')[1]} state={state} setState={setState} setCurrentStep={setCurrentStep} />
            } else if (currentStep === 3) {
                // return <M
            } else {
                return <p>Error</p>;
            }
        }
    }

    useEffect(() => {
        if (currentPage) {
            if (!state.type) {
                setState({
                    ...state,
                    type: currentPage.split('_')[1]
                });
            }
            if (!state.type) setAddTokenIMA({
                type: currentPage.split('_')[1],
                isActive: true,
                isComplete: false
            })
            if (state.type !== currentPage.split('_')[1]) {
                dispatch(setAddTokenIMA({ 
                    type: currentPage.split('_')[1],
                    isActive: true,
                    isComplete: false
                }));
            }
        }
    }, [currentPage]);

    useEffect(() => {
        dispatch(setAddTokenIMA(state))
    }, [state]);
    return (
        <RenderActionContainer>
            {buildComponent()}
        </RenderActionContainer>
    )
}

export {
    RenderAction
}
const SelectPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-size: 1.15rem;
        color: white;
    }
`;
const SelectPage = () => {
    return (
        <SelectPageContainer>
            <p>Select Action on the Right</p>
        </SelectPageContainer>
    )
}
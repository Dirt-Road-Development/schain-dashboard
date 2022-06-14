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
import { MainnetLink } from "./schain/mainnet_link";
import {
    SelectChain
} from './s2s';

const RenderActionContainer = styled.div`

    position: absolute;
    top: 10%;
    height: 90%;
    width: 100%;

`;

const RenderAction = ({ step, currentStep, currentPage, setCurrentStep, isS2S }) => {

    const { chainId } = useConnectedMetaMask();
    const getChainName = chains.find((chain) => chain.id === parseInt(chainId));
    

    const [state, setState] = useState({
        type: null,
        S2S: isS2S,
        targetABI: null,
        targetAddress: null,
        originAddress: null,
        targetName: getChainName.name.toLowerCase(),
        targetId: parseInt(chainId),
        originName: null,
        originId: null,
        isTargetChain: null
    });

    const dispatch = useDispatch();

    const buildComponent = () => {
        if (!currentPage) {
            return <SelectPage />;
            // 0x01be23585060835e02b77ef475b0cc51aa1e0709
        }
        if (currentPage.includes('add') && currentPage.includes('s2s')) {
            /// Select Origin/Target Setting
            if (currentStep === 0) {
                return <SelectChain state={state} setState={setState} setCurrentStep={setCurrentStep} />
            /// Connect SKALE Chains
            } else if (currentStep === 1) {
                return <p>Connect SKALE </p>
            } else if (currentStep === 2) {
                /// If Origin -> Input Deployed Contract Address, Input Deployed Clone Address
                if (state.isTargetChain === true) {
                    return <p>Is Target Chain</p>
                } else if (state.isTargetChain === false) {
                    return <p>Is NOT Target Chain</p>
                    // return <IMAAssignRole type={currentPage.split('_')[1]} setCurrentStep={setCurrentStep} isS2S={state.isS2S} state={state} />
                } else {
                    return <p>Error: Neither</p>
                }
                /// If Target -> Deploy Clone, Input Deployed Contract Address
            } else if (currentStep === 3) {
                /// If Origin -> Register Origin and Clone Address on Origin Chain
                /// If Target -> Check Registration is Complete
            } else if (currentStep === 4) {
                /// If Origin -> Done 
                /// If Target -> Register Origin and Clone Address on Target Chain
            } else if (currentStep === 5) {
                /// Register MINTER and BURNER to TokenManager on Target Chain
            } else {
                return <p>Error</p>
            }

            /**
             * } else if (currentStep === 1) {
                return <DeployContractSchain type={currentPage.split('_')[1]} setCurrentStep={setCurrentStep} state={state} setState={setState} />;
            } else if (currentStep === 2 && state.targetABI) {
                return <IMAAssignRole type={currentPage.split('_')[1]} setCurrentStep={setCurrentStep} isS2S={state.isS2S} state={state} />
            } else if (currentStep === 3) {
                return <RegisterOnMainnet type={currentPage.split('_')[1]} state={state} setState={setState} setCurrentStep={setCurrentStep} />
            } else if (currentStep === 4) {
                return <MainnetLink type={currentPage.split('_')[1]} state={state} setCurrentPage={setCurrentStep} />
            } else {
                return <p>Error</p>;
            }
             */
        } else if (currentPage.includes('add')) {
            if (currentStep === 0) {
                return <DeployContractSchain type={currentPage.split('_')[1]} setCurrentStep={setCurrentStep} state={state} setState={setState} />;
            } else if (currentStep === 1 && state.targetABI) {
                return <IMAAssignRole type={currentPage.split('_')[1]} setCurrentStep={setCurrentStep} isS2S={state.isS2S} state={state} />
            } else if (currentStep === 2) {
                return <RegisterOnMainnet type={currentPage.split('_')[1]} state={state} setState={setState} setCurrentStep={setCurrentStep} />
            } else if (currentStep === 3) {
                return <MainnetLink type={currentPage.split('_')[1]} state={state} setCurrentPage={setCurrentStep} />
            } else {
                return <p>Error</p>;
            }
        } else {
            return <p>Error: No Matching Check</p>
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
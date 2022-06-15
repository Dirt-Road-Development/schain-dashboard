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
 * @file src/ui/ima/actions/index.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { current } from "@reduxjs/toolkit";
import { useConnectedMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getChainById } from "../../../config";
import { Title } from "../../widgets";
import { getSteps, visibleLabel } from "../utils";
import { RenderAction } from "./action";
import { Steps } from "./steps";

const ActionContainer = styled.div`

    position: absolute;
    top: 7.5%;
    height: 92.5%;
    left: 2.5%;
    width: 62.5%;
`;

const ActionHeader = styled.div`
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
`;

const ActionTitle = styled.h3`
    color: white;
    font-size: 1rem;
    padding: 8px 0;
`;

const ActionChain = styled.h5`
    color: white;
    font-size: 1rem;
    padding: 8px 0;
`;
const Action = ({ currentPage }) => {

    console.log("Current Page: ", currentPage);

    const { chainId } = useConnectedMetaMask();
    const [currentStep, setCurrentStep] = useState(0);
    const [isS2S, setIsS2S] = useState(false);
    const [steps, setSteps] = useState([]);
    
    const nextStep = () => {
        if (currentStep === 3 && !currentPage.includes('s2s')) {
            window.location.reload();
        }
        let _steps = steps;
        _steps[currentStep].isComplete = true;
        _steps[currentStep].isActive = false;
        setCurrentStep(currentStep + 1);
        _steps[currentStep].isActive = true;
        setSteps(_steps);
    }


    const store = useSelector((state) => state.ima_state.addTokenIMA);

    useEffect(() => {
        const steps = getSteps(currentPage);
        setSteps(steps);
        if (currentPage) {
            setIsS2S(currentPage.includes('S2S'));
        }
    }, [currentPage]);

    useEffect(() => {
        if (store.isActive && currentPage) {
            let _steps = getSteps(currentPage);
            if (store.originAddress) {
                _steps[0].isComplete = true;
                _steps[1].isComplete = true;
                _steps[2].isComplete = true;
                _steps[0].isActive = false;
                _steps[1].isActive = false;
                _steps[2].isActive = false;
                _steps[3].isActive = true;
                _steps[3].isComplete = false;
                setCurrentStep(3);
            } else if (store.targetAddress && store.targetABI) {
                _steps[0].isComplete = true;
                _steps[1].isComplete = false;
                _steps[0].isActive = false;
                _steps[1].isActive = true;
                setCurrentStep(1);
            }
            setSteps(_steps);
        }
    }, [])

    return (
        <ActionContainer>
            <ActionHeader>
                <ActionTitle>{visibleLabel(currentPage)}</ActionTitle>
                <ActionChain>Connected to: {parseInt(chainId) > 100 ? 'SKALE Chain': 'Ethereum'}</ActionChain>
            </ActionHeader>
            <Steps steps={steps} currentStep={currentStep} />
            <RenderAction step={steps[currentStep]} currentStep={currentStep} currentPage={currentPage} setCurrentStep={nextStep} isS2S={isS2S} />
        </ActionContainer>
    );
}

export {
    Action
}
import { current } from "@reduxjs/toolkit";
import { useConnectedMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
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

    const { chainId } = useConnectedMetaMask();
    const [currentStep, setCurrentStep] = useState(0);
    const [isS2S, setIsS2S] = useState(false);
    const [steps, setSteps] = useState([]);

    const nextStep = () => {
        let _steps = steps;
        _steps[currentStep].isComplete = true;
        _steps[currentStep].isActive = false;
        setCurrentStep(currentStep + 1);
        _steps[currentStep].isActive = true;
        setSteps(_steps);
        
        
    }

    useEffect(() => {
        const steps = getSteps(currentPage);
        setSteps(steps);
        if (currentPage) {
            setIsS2S(currentPage.includes('S2S'));
        }
    }, [currentPage]);

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
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
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        const steps = getSteps(currentPage);
        setSteps(steps);
    }, [current]);

    return (
        <ActionContainer>
            <ActionHeader>
                <ActionTitle>{visibleLabel(currentPage)}</ActionTitle>
                <ActionChain>Connected to: {parseInt(chainId) > 100 ? 'SKALE Chain': 'Ethereum'}</ActionChain>
            </ActionHeader>
            <Steps steps={steps} currentStep={currentStep} />
            <RenderAction step={steps[currentStep]} currentStep={currentStep} currentPage={currentPage} />
        </ActionContainer>
    );
}

export {
    Action
}
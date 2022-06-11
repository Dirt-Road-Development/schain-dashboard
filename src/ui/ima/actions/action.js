import { useState } from "react";
import styled from "styled-components";
import { DeployContractSchain } from "./deploy";
import { IMAAssignRole } from "./roles";

const RenderActionContainer = styled.div`

    position: absolute;
    top: 10%;
    height: 90%;
    width: 100%;

`;

const RenderAction = ({ step, currentStep, currentPage, setCurrentStep, isS2S }) => {
    console.log("Current Page: ", currentPage);
    const type = null;

    const [state, setState] = useState({
        type: type,
        S2S: isS2S,
        targetABI: null,
        targetAddress: null,
        originAddress: null,
        targetName: null,
        originName: null
    });

    const buildComponent = () => {
        if (!currentPage) {
            return <p>No Page Selected</p>;
        }
        if (currentPage.includes('add')) {
            if (currentStep === 0) {
                return <DeployContractSchain type={currentPage.split('_')[1]} setCurrentStep={setCurrentStep} state={state} setState={setState} />;
            } else if (currentStep === 1) {
                return <IMAAssignRole type={currentPage.split('_')[1]} setCurrentStep={setCurrentStep} isS2S={state.isS2S} state={state} />
            } else if (currentStep === 2) {

            } else if (currentStep === 3) {

            } else {
                return <p>Error</p>;
            }
        }
    }


    return (
        <RenderActionContainer>
            {buildComponent()}
        </RenderActionContainer>
    )
}

export {
    RenderAction
}
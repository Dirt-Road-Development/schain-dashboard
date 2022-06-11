import styled from "styled-components";
import { DeployContractSchain } from "./deploy";

const RenderActionContainer = styled.div`

    position: absolute;
    top: 10%;
    height: 90%;
    width: 100%;

`;

const RenderAction = ({ step, currentStep, currentPage }) => {
    
    const buildComponent = () => {
        if (currentPage.includes('add')) {
            if (currentStep === 0) {
                return <DeployContractSchain type={currentPage.split('_')[1]} />;
            } else if (currentStep === 1) {

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
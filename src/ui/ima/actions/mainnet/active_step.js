import styled from "styled-components";
import { Colors } from "../../../../config";

const ActiveStepContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 5%;
    position: relative;
`;

const StepTitle = styled.h4`
    position: absolute;
    top: 5%;
    left: 5%;
    right: 5%;
    color: grey;
    font-size: 1.15rem;
    border-bottom: 1px solid ${Colors.primary};
`;
const StepContent = styled.div`
    position: absolute;
    top: 10%;
    left: 5%;
    right: 5%;
    height: auto;
    display: flex;
    min-height: 75%;
    align-items: center;
`;
const StepButton = styled.button`
    position: absolute;
    bottom: 5%;
    left: 5%;
    right: 5%;
    border-radius: 16px;
    border: none;
    height: 5%;
    background: transparent;
    border: 1px solid ${Colors.blue};
    color: white;
    &:hover {
        background: white;
        color: ${Colors.primary};
    }
`;

const ActiveStep = ({ step, nextStep, stepLabel, widget }) => {
    return (
        <ActiveStepContainer>
            <StepTitle>{step.toString()}. {stepLabel}</StepTitle>
            <StepContent>
                {widget}
            </StepContent>
            <StepButton onClick={(e) => {
                e.preventDefault();
                nextStep();
                }}>I am ready to proceed</StepButton>
        </ActiveStepContainer>
    );
}

export {
    ActiveStep
}
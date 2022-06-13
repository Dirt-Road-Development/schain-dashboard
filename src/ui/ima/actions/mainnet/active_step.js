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
 * @file src/ui/ima/actions/mainnet/active_step.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

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
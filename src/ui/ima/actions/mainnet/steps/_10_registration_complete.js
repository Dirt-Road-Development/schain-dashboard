import { faCropSimple } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Colors } from '../../../../../config';
import { LoadingIcon } from '../../../../widgets';
import { StepContainer } from './step_container';

const Container = styled.div`
    height: 100%;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const _10_RegistrationComplete = ({ state }) => {
    console.log(state);
    return (
        <StepContainer>
            <Container>
               <Statement label="Token Type" text={state.type} />
               <Statement label="Target Chain" text={state.targetName} />
               <Statement label="Clone Token Address" text={state.targetAddress} />
               <Statement label="Origin Token Address" text={state.originAddress} />
               <Statement label="Mainnet Registration" text="Registered" />
            </Container>
        </StepContainer>
    );
}

const StatementContainer = styled.div`
    width: 100%;
    height: 25%;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const Label = styled.h5`
    font-size: 1rem;
    color: grey;
    width: 30%;
`;
const Text = styled.p`
    width: 60%;

    font-size: 1.15rem;
    color: white;
`;

const Statement = ({ label, text }) => {
    return (
        <StatementContainer>
            <Label>{label}</Label>
            <Text>{text}</Text>
        </StatementContainer>
    )
}

export {
    _10_RegistrationComplete
}
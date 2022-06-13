import styled from 'styled-components';
import { Colors } from '../../../../../config';
import { LoadingIcon } from '../../../../widgets';
import { StepContainer } from './step_container';

const WatcherContainer = styled.div`
    height: 100%;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-size: 1.15rem;
        color: white;
        margin: 16px;
    }
`;

const _9_WatchingRegistrationStatus = ({ isRegistered }) => {
    return (
        <StepContainer>
            <WatcherContainer>
                {!isRegistered && <LoadingIcon />}
                {!isRegistered && <p>Watching Token Registration</p>}
                {isRegistered && <p>Registration Complete</p>}
            </WatcherContainer>
        </StepContainer>
    );
}

export {
    _9_WatchingRegistrationStatus
}
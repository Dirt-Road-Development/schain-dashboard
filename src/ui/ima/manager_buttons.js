import styled from 'styled-components';
import { Colors } from '../../config';

const AutomaticDeploymentButtonContainer = styled.div`
    width: 75%;
    height: 5%;
    background: transparent;
    border: 1px solid ${Colors.primary};
    margin: 8px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    &:hover {
        background: white;
        color: ${Colors.primary};
    }
    border-radius: 16px;
`;
const AutomaticDeploymentButton = () => {
    return (
        <AutomaticDeploymentButtonContainer>
            Button
        </AutomaticDeploymentButtonContainer>
    )
}

export {
    AutomaticDeploymentButton
}
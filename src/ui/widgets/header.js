import { useConnectedMetaMask } from 'metamask-react';

import styled from "styled-components";
import { Colors } from "../../config/theme";

const HeaderContainer = styled.div`
    width: 100vw;
    height: 7.5vh;
    border-bottom: 2px solid ${Colors.primary};
    position: relative;
`;

const ConnectButtonContainer = styled.div`
    height: 100%;
    position: absolute;
    right: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ConnectedButton = styled.div`
    padding: 16px;
    background: ${Colors.primary};
    border-radius: 16px;
`;

const Header = ({ show = 'always' }) => {

    const metamask = useConnectedMetaMask();
    console.log(metamask);

    return (
        <HeaderContainer>
            <ConnectButtonContainer>
                <ConnectedButton>
                    <p>Connected to {metamask.account}</p>
                </ConnectedButton>
            </ConnectButtonContainer>
        </HeaderContainer>
    );
}

export { 
    Header
}
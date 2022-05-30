import { ConnectButton } from "@rainbow-me/rainbowkit";
import styled from "styled-components";
import { useAccount } from "wagmi";
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

const Header = ({ show = 'always' }) => {

    const { data: account } = useAccount()

	if ((show === 'connected' && !account?.address) || (show === 'not_connected' && account?.address)) return null

    return (
        <HeaderContainer>
            <ConnectButtonContainer>
                <ConnectButton />
            </ConnectButtonContainer>
        </HeaderContainer>
    );
}

export { 
    Header
}
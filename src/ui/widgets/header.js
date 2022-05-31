import { useConnectedMetaMask } from 'metamask-react';
import { useState } from 'react';
import chains from '../../config/chains';
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
    background: white;
    border-radius: 16px;
`;

const SelectNetworkContainer = styled.div`
    height: 100%;
    width: 80%;
    background: red;
    position: absolute;
    // right: 32px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SelectNetwork = ({ close }) => {
    return (
        <SelectNetworkContainer>
            {<p>Hi</p>}
        </SelectNetworkContainer>
    );
}

const Header = () => {
    const [isSelectNetwork, setIsSelectNetwork] = useState(false);
    
    const { account } = useConnectedMetaMask();

    const _shortenAddress = (account) => {
        return account.substring(0, 12) + '...' + account.substring(32);
    }

    
    return (
        <HeaderContainer>
            {isSelectNetwork ? <SelectNetwork close={(e) => {
                e.preventDefault();
                setIsSelectNetwork(false);
            }}/> :
            <ConnectButtonContainer>
                <ConnectedButton onClick={(e) => {
                    e.preventDefault();
                    setIsSelectNetwork(true);
                }}>
                    <p>{_shortenAddress(account)}</p>
                </ConnectedButton>
            </ConnectButtonContainer>}
        </HeaderContainer>
    );
}

export { 
    Header
}
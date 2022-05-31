import { useConnectedMetaMask, useMetaMask } from 'metamask-react';
import { useState } from 'react';
import chains from '../../config/chains';
import styled from "styled-components";
import { Colors } from "../../config/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ethers } from 'ethers';
import { MyLiliusWidget } from './mylilius_widget';
const HeaderContainer = styled.div`
    width: 100vw;
    height: 7.5vh;
    border-bottom: 1px solid grey;
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
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

const ChainOptionContainer = styled.div`
    width: 15%;
    height: 65%;
    border: 0.5px solid ${Colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    margin: 8px;
    &:hover {
        background: ${Colors.primary};
    }
`;

const ChainName = styled.p`
    font-size: 1rem;
    color: white;
`;
const ChainId = styled.p`
    font-size: 0.65rem;
    color: grey;
`;

const CloseButton = styled.div`
    height: 65%;
    width: 10%;
    color: red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ChainOption = ({ name, id }) => {
    const { switchChain } = useMetaMask();
    return (
        <ChainOptionContainer onClick={async (e) => {
            e.preventDefault();
            let v = await switchChain(ethers.utils.hexValue(id).trim());
            window.location.reload();
        }}>
            <ChainName>{name}</ChainName>
            <ChainId>{id}</ChainId>
        </ChainOptionContainer>
    );
}

const SelectNetwork = ({ close, chainId }) => {

    return (
        <SelectNetworkContainer>
            {chains.map((chain, index) => {
                if (chain.id === parseInt(chainId)) return null;
                return <ChainOption name={chain.name} id={chain.id} key={index} />
            })}
            <CloseButton><FontAwesomeIcon onClick={(e) => {
                e.preventDefault();
                close();
            }} icon={faClose} size='3x'/></CloseButton>
        </SelectNetworkContainer>
    );
}



const Header = () => {
    const [isSelectNetwork, setIsSelectNetwork] = useState(false);
    
    const { account, chainId } = useConnectedMetaMask();

    const _shortenAddress = (account) => {
        return account.substring(0, 12) + '...' + account.substring(32);
    }

    // const chainIds = chains.map((chain) => chain.id);

    // if (!chainIds.includes(parseInt(chainId))) {
    //     return <HeaderContainer>
    //         <WrongNetwork />
    //     </HeaderContainer>
    // }


    return (
        <HeaderContainer>
            <MyLiliusWidget />
            {isSelectNetwork ? <SelectNetwork chainId={chainId} close={setIsSelectNetwork} /> :
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
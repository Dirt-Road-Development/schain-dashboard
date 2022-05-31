import { ethers } from "ethers";
import { useMetaMask } from "metamask-react";
import styled from "styled-components";
import { Colors } from "../../config";
import chains from "../../config/chains";

const WrongNetworkContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const WrongNetworkButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const WrongNetworkButton = styled.div`
    padding: 16px;
    background: red;
    border-radius: 16px;
    color: white;
    font-weight: bold;
`;

const AddChainsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;
const AddChainContainer = styled.div`
    height: 50px;
    width: 10vw;
    border: 0.5px solid ${Colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: grey;
    margin: 16px;
    border-radius: 16px;
    &:hover {
        background: white;
        color: ${Colors.primary};
    }
`;

const AddChain = ({ chain }) => {

    const { addChain, switchChain} = useMetaMask();

    return (
        <AddChainContainer onClick={(e) => {
            e.preventDefault();
            let _addChain = addChain({
                chainId: ethers.utils.hexValue(chain.id),
                chainName: chain.name,
                rpcUrls: [chain.rpcUrls.default],
                nativeCurrency: chain.nativeCurrency,
                blockExplorerUrls: [chain.blockExplorers['default']['url']]
            });
            let _switchChain = switchChain(ethers.utils.hexValue(chain.id));
            window.location.reload();
        }}>
            {chain.name}
        </AddChainContainer>
    )
}


const WrongNetwork = () => {
    return (
        <WrongNetworkContainer>
            <WrongNetworkButtonContainer>
                <WrongNetworkButton>
                    Wrong Network
                </WrongNetworkButton>
                <h3 style={{ margin: '16px', color: 'grey' }}>Add SKALE Chain Below</h3>
                <AddChainsContainer>
                    {chains.map((chain, index) => {
                        return <AddChain chain={chain} key={index} />
                    })}
                </AddChainsContainer>
            </WrongNetworkButtonContainer>
        </WrongNetworkContainer>
    );
}

export {
    WrongNetwork
}
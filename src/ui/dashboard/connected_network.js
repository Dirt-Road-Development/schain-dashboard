import styled from "styled-components";
import { ethers } from "ethers";
import { Colors } from '../../config/theme';

const ConnectedNetworkContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 0 0 16px 0;
`;

const DataRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    width: 90%;
    margin: 0 auto;
    border-bottom: ${(props) => {
        if (props.hideBorder) {
            return 'none';
        } else {
            return `0.5px solid ${Colors.primary}`;
        }
    }}
`;

const Label = styled.p`
    font-size: 1rem;
    color: grey;
`;
const Data = styled.p`
    font-size: 1.15rem;
    color: white;
`;


const ConnectedNetwork = ({ network }) => {
    let showNetwork = true;

    if (!network['activeChain']) showNetwork = false;

    if (!showNetwork) {
        return null;
    }
    
    return (
        <ConnectedNetworkContainer>
            <DataRow>
                <Label>Chain</Label>
                <Data>{network.activeChain.name}</Data>
            </DataRow>
            <DataRow>
                <Label>Chain ID</Label>
                <Data>{network.activeChain.id}</Data>
            </DataRow>
            <DataRow hideBorder={true}>
                <Label>Chain Type</Label>
                <Data>{network.activeChain.testnet ? 'Testnet': 'Mainnet'}</Data>
            </DataRow>
        </ConnectedNetworkContainer>
    )
}

export { 
    ConnectedNetwork
}
import { useEffect } from 'react';
import styled from 'styled-components';
import { useNetwork } from 'wagmi';
import { Colors } from '../../config/theme';
import { ConnectedNetwork } from './connected_network';

const ChainInfoContainer = styled.div`
    width: 28%;
    height: 85%;
    border: 1px solid grey;
    border-radius: 0 16px 16px 0;
    position: absolute;
    right: 5%;
    top: 10%;
`;

const ChainInfo = () => {

    const network = useNetwork();

    useEffect(() => {
        network.reset();
    }, [network])

    return (
        <ChainInfoContainer>
            <ConnectedNetwork network={network} />
        </ChainInfoContainer>
    );
}

export {
    ChainInfo
}
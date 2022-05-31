import styled from 'styled-components';
import { ConnectedNetwork } from './connected_network';
import { Roles } from './roles';

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
    return (
        <ChainInfoContainer>
            <Roles />
            <ConnectedNetwork />
        </ChainInfoContainer>
    );
}

export {
    ChainInfo
}
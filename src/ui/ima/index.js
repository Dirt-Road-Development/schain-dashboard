import styled from 'styled-components';
import { Title } from '../widgets';
import { useConnectedMetaMask } from 'metamask-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Manager } from './manager/manager';
import { Action } from './actions';
const ImaPageContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const ImaPage = () => {

    const { ethereum, chainId } = useConnectedMetaMask();
    const imaState = useSelector((state) => state.ima_state);
    console.log("IMA STATE: ", imaState);
    return (
        <ImaPageContainer>
            <Title title="IMA" />
            <Action chainId={chainId} currentPage={imaState.selectedPage} />
            <Manager chainId={chainId} />
        </ImaPageContainer>
    );
}

export {
    ImaPage
}
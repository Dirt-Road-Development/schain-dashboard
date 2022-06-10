import * as Component from './components';
import styled from 'styled-components';
import { Title } from '../widgets';
import { useConnectedMetaMask } from 'metamask-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ImaPageContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const ImaPage = () => {

    const { ethereum, chainId } = useConnectedMetaMask();
    const imaState = useSelector((state) => state.ima_state);

    return (
        <ImaPageContainer>
            <Title title="IMA" />
            {imaState.selectedChain ? <Component.Assets /> : <SelectChainNotice />}
            <Component.Manager chainId={chainId} />
        </ImaPageContainer>
    );
}

const SelectChainNoticeContainer = styled.div`
    height: 100%;
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;
const SelectChainNotice = () => {
    return (
        <SelectChainNoticeContainer>
            <h3>Select Chain on the right</h3>
        </SelectChainNoticeContainer>
    );
}

export {
    ImaPage
}
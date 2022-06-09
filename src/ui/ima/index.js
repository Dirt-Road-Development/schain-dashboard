import * as Component from './components';
import styled from 'styled-components';
import { Title } from '../widgets';

const ImaPageContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const ImaPage = () => {
    return (
        <ImaPageContainer>
            <Title title="IMA" />
            <Component.Assets />
            <Component.Manager />
        </ImaPageContainer>
    );
}

export {
    ImaPage
}
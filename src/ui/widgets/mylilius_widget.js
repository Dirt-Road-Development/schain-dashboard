import styled from "styled-components";
import MyLiliusLogo from '../../config/logos/mylilius_logo.svg';

const MyLiliusWidgetContainer = styled.div`
    width: 15%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    height: 65%;
`;

const Text = styled.h1`
    font-size: 1rem;
    color: white;
`;

const MyLiliusWidget = () => {
    return (
        <MyLiliusWidgetContainer>
            <Logo src={MyLiliusLogo} />
            <span style={{ width: '15px'}} />
            <Text>MyLilius Open Source</Text>
        </MyLiliusWidgetContainer>
    )
}

export {
    MyLiliusWidget
}
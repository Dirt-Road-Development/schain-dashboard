import styled from 'styled-components';

const ChainInfoContainer = styled.div`
    width: 28%;
    height: 85%;
    border: 2px solid green;
    border-radius: 0 16px 16px 0;
    position: absolute;
    right: 5%;
    top: 10%;
`;

const ChainInfo = () => {

    return (
        <ChainInfoContainer>
            <h1>Chain INfo</h1>
        </ChainInfoContainer>
    );
}

export {
    ChainInfo
}
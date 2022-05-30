import styled from 'styled-components';

const ChainInfoContainer = styled.div`
    width: 25%;
    height: 75%;
    border: 2px solid green;
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
import styled from "styled-components";

const ContractDetailsContainer = styled.div`
    height: 5%;
    color: grey;
    font-size: 1rem;
`;
const ContractDetails = ({ address }) => {
    return (
        <ContractDetailsContainer>
            Deployed Contract: {address}
        </ContractDetailsContainer>
    )
}

export {
    ContractDetails
}
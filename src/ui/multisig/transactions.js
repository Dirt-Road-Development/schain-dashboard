import styled from "styled-components";

const TransactionsContainer = styled.div`

    position: absolute;
    top: 7.5%;
    right: 2.5%;
    height: 89.5%;
    width: 35%;
    border: 2px solid white;
`;
const Transactions = () => {
    return (
        <TransactionsContainer>
            <p>Transactions</p>
        </TransactionsContainer>
    );
}

export {
    Transactions
}
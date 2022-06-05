import styled from "styled-components";

const WhitelistsContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
`;
const Whitelists = ({ records }) => {
    return (
        <WhitelistsContainer>
            {records && records.length > 0 ? <p>Records</p> : <p>No Whitelists</p>}
        </WhitelistsContainer>
    );
}

export {
    Whitelists
}
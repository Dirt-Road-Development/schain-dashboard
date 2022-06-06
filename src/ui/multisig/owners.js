import styled from "styled-components";

const OwnersContainer = styled.div`

    position: absolute;
    bottom: 2.5%;
    left: 2.5%;
    width: 55%;
    border: 2px solid white;
    height: 40%;

`;
const OwnersListContainer = styled.div``;
const AddOwnerContainer = styled.div``;

const Owners = () => {
    return (
        <OwnersContainer>
            <p>Owners</p>
        </OwnersContainer>
    );
}

export {
    Owners
}
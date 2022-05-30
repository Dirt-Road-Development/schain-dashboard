import styled from "styled-components"

const TitleContainer = styled.div`
    position: absolute;
    top: 2.5%;
    left: 2.5%;
    color: grey;
`;

const Title = ({ title }) => {
    return (
        <TitleContainer>
            <h2>SCHAIN UI | {title}</h2>
        </TitleContainer>
    );
}

export {
    Title
}
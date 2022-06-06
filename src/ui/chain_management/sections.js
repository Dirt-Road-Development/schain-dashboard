import styled from "styled-components";
import { Section } from "./section";

const SectionsContainer = styled.div`
    height: 85%;
    position: absolute;
    left: 2.5%;
    right: 2.5%;
    top: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: space-evenly;
    justify-content: space-evenly;
`;

const Sections = () => {
    return (
        <SectionsContainer>
            <Section type="FCD" />
            <Section type="MTM" />
        </SectionsContainer>
    )
}

export {
    Sections
}
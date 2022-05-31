import styled from "styled-components";
import { Colors } from "../../config";

const FooterContainer = styled.div`
    position: absolute;
    bottom: 2.5%;
    left: 2.5%;
    right: 0;
    display: flex;
    flex-direction: column;
    p {
        color: ${Colors.primary};
        font-size: 0.75rem;
        font-style: italic;
    }
`;
const Footer = () => {
    return (
        <FooterContainer>
            <p>Powered by MyLilius</p>
            <p>&copy; Copyright TheGreatAxios 2022-Present</p>
            <p>&copy; Copyright Lilius, Inc. 2022-Present</p>
            <p>Open Source under AGPL-3.0-or-later</p>
        </FooterContainer>
    )
}

export {
    Footer
}
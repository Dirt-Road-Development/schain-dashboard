import styled from "styled-components";
import { Colors } from "../../config/theme";

const HeaderContainer = styled.div`
    width: 100vw;
    height: 7.5vh;
    border-bottom: 2px solid ${Colors.primary};
`;

const Header = () => {
    return (
        <HeaderContainer></HeaderContainer>
    );
}

export { 
    Header
}
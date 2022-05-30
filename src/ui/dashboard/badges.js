import styled from "styled-components";
import { Colors } from "../../config/theme";

const BadgesContainer = styled.div`

    position: absolute;
    bottom: 5%;
    left: 2.5%;
    height: 32%;
    width: 60%;
    border: 1px solid grey;
    border-radius: 0 0 0 16px;
`;

const DashboardBadges = () => {
    return (
        <BadgesContainer></BadgesContainer>
    );
}

export {
    DashboardBadges
}
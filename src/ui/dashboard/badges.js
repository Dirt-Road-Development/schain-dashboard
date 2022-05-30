import styled from "styled-components";

const BadgesContainer = styled.div`

    position: absolute;
    bottom: 5%;
    left: 2.5%;
    height: 30%;
    width: 60%;
    border: 2px solid yellow;
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
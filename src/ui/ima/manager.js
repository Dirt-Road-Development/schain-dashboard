import styled from "styled-components";
import { AutomaticDeploymentButton } from "./manager_buttons";

const ManagerContainer = styled.div`
    position: absolute;
    right: 2.5%;
    top: 7.5%;
    height: 92.5%;
    border: 1px solid grey;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Manager = () => {
    return (
        <ManagerContainer>
            <AutomaticDeploymentButton />
            <AutomaticDeploymentButton />
            <AutomaticDeploymentButton />
        </ManagerContainer>
    )
}

export {
    Manager
}
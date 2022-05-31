import styled from "styled-components";
import { Colors } from "../../config";

const AssignRoleContainer = styled.div`

    position: absolute;
    bottom: 15%;
    width: 85%;
    left: 2.5%;
    background: ${Colors.primary};
    color: white;
    padding: 8px;
    border-radius: 16px;
    text-align: center;
    font-size: 1.5rem;
`;

const AssignRole = ({ assignRole }) => {
    return (
        <AssignRoleContainer onClick={assignRole}>
            Assign Role
        </AssignRoleContainer>
    )
}

export {
    AssignRole
}
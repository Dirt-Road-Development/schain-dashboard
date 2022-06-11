import { useConnectedMetaMask } from "metamask-react";
import { useEffect } from "react";
import styled from "styled-components";
import { IMARole } from "../../../../logic/ima/role";

const IMAAssignRoleContainer = styled.div``;
const IMAAssignRole = ({ type, setCurrentStep, isS2S, state }) => {
    console.log(state);
    const { ethereum } = useConnectedMetaMask();
    // const roleAssigner = new IMARole(state.targetABI, state.targetAddress, ethereum);


    return (
        <IMAAssignRoleContainer>
            Assign Role
        </IMAAssignRoleContainer>
    )
}

export {
    IMAAssignRole
}
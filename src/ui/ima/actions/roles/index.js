import { useConnectedMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IMARole } from "../../../../logic/ima/role";
import { Assign } from "./assign";
import { ContractDetails } from "./details";
import { RoleProceed } from "./proceed";

const IMAAssignRoleContainer = styled.div``;
const IMAAssignRole = ({ type, setCurrentStep, isS2S, state }) => {
    
    const { ethereum } = useConnectedMetaMask();
    const roleAssigner = new IMARole(state.targetABI, state.targetAddress, ethereum);
    const [canProceed, setCanProceed] = useState({
        minter: false,
        burner: false
    });

    useEffect(() => {
        /// On Initial Load Check Address on Manager Type to Proceed Past If Already Checked
        roleAssigner.initializeChecks(type)
            .then((res) => {
                setCanProceed(res);
            }).catch((err) =>{
                console.log(err);
            })
    }, []);

    const assign = async(_role) => {
        console.log("Role: ", _role);
        return await roleAssigner.assignRole(_role.toLowerCase(), type)
            .then((res) => {
                let hasRole = res.hasRole;
                setCanProceed({
                    ...canProceed,
                    [_role.toLowerCase()]: hasRole
                });
                return res;
            })
            .catch((err) => {
                alert("ERROR Assigning Role: ", err);
            })
    }


    return (
        <IMAAssignRoleContainer>
            <ContractDetails address={state.targetAddress} />
            <Assign state={state} assignRole={assign} isS2S={isS2S} />
            <RoleProceed canProceed={canProceed} isS2S={isS2S} nextStep={setCurrentStep} />
        </IMAAssignRoleContainer>
    )
}

export {
    IMAAssignRole
}
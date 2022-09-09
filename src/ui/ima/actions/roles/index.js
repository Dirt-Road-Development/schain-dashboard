/**
 * @license
 * 
 * SChain Dashboard
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * /**
 * @file src/ui/ima/actions/roles/index.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

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
    console.log("State: ", state);
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
                throw new Error(err);
            })
    }, []);

    const assign = async(_role) => {
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
                console.log("ERROR: ", err);
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
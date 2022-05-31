import styled from "styled-components";
import { useSelector } from "react-redux";
import { Colors } from "../../config";
import { useEffect, useRef, useState } from "react";
import { setRoles } from "../../state/data.slice";
import { useConnectedMetaMask } from 'metamask-react';

const RolesContainer = styled.div`
    height: 85%;
    border-bottom: 0.5px solid ${Colors.primary};
    position: relative;
    display: flex;
    flex-direction: column;
`;
const RolesTitle = styled.h3`
    position: absolute;
    top: 2.5%;
    left: 0;
    right: 0;
    text-align: center;
    color: grey;
    width: 50%;
    margin: 0 auto;
    border-bottom: 0.5px solid ${Colors.primary};
`;

const RolesInformationContainer = styled.div`
    position: absolute;
    top: 10%;
    width: 100%;
    height: 85%;
`;


const RolesByContractContainer = styled.div`
    height: auto;
    min-height: 30%;
    max-height: 30%;
    position: relative;
    border-bottom: 0.5px solid ${Colors.primary};
`;
const RolesByContractTitle = styled.h5`
    position: absolute;
    top: 5%;
    left: 2.5%;
    font-size: 1.15rem;
    color: grey;
`;

const RolesListContainer = styled.div`
    height: 100%;
    position: absolute;
    top: 25%;
    left: 2.5%;
    right: 2.5%;
`;

const RoleContainer = styled.div`
    height: 25%;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const RoleLabel = styled.label`
    font-size: 1rem;
    color: grey;
`;

const RoleData = styled.p`
    font-size: 1.15rem;
    color: white;
`;

const Role = ({ role }) => {
    
    useEffect(() => {}, []);

    const _buildRoleName = (key) => {
        let split = key.split('_');
        return split.map((value) => value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase() + ' ');
    }

    const _buildRoleEnabled = (key) => {
        return key ? 'Yes': 'No'; 
    }


    return (
        <RoleContainer>
            <RoleLabel>{_buildRoleName(role[0])}</RoleLabel>
            <RoleData>{_buildRoleEnabled(role[1])}</RoleData>
        </RoleContainer>
    );
}

const RolesByContract = ({ key1, roles }) => {
    const _getContractName = (key) => {
        if (key === 'etherbase') {
            return 'Etherbase';
        } else if (key === 'marionette') {
            return 'Marionette'
        } else {
            return 'Config Controller';
        }
    }

    return (
        <RolesByContractContainer key={key1}>
            <RolesByContractTitle>{_getContractName(key1)}</RolesByContractTitle>
            <RolesListContainer>
                {roles ? Object.entries(roles).map((role, index) => {
                    return <Role key={index} role={role} />    
                }) : <span></span>}
            </RolesListContainer>
            
        </RolesByContractContainer>
    );
}


const RolesInformation = ({ roles }) => {

    const keys = ['etherbase', 'marionette', 'config_controller'];
    
    return (
        <RolesInformationContainer>
            {keys.map((key, index) => {
                return <RolesByContract key={index} key1={key} roles={roles ? roles[key] : null} />;
            })}
        </RolesInformationContainer>
    )
}

const Roles = () => {

    const { account } = useConnectedMetaMask();
    const rolesState = useSelector((state) => state.chain_state.roles);
    
    return (
        <RolesContainer>
            <RolesTitle>Chain Roles</RolesTitle>
            <RolesInformation roles={rolesState[account]} />
        </RolesContainer>
    );
}

export {
    Roles
}
import * as Component from './components';
import styled from 'styled-components';
import { useConnectedMetaMask } from 'metamask-react';
import { Title } from '../widgets/title';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ethers } from 'ethers';
import { AssignRole } from '../../logic';
import { GlobalController } from '../../logic/controller';
import { Contracts } from '../../config';

const RoleAssignerPageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const ROLES = {
    Etherbase: ['DEFAULT_ADMIN_ROLE', 'ETHER_MANAGER_ROLE'],
    Marionette: ['DEFAULT_ADMIN_ROLE', 'IMA_ROLE', 'PUPPETEER_ROLE'],
    'Config Controller': ['DEFAULT_ADMIN_ROLE', 'DEPLOYER_ADMIN_ROLE', 'MTM_ROLE']
};


const RoleAssignerPage = () => {

    const { account, ethereum } = useConnectedMetaMask();

    const assign_role = new AssignRole();

    const [contract, setContract] = useState(null);
    const [role, setCurrentRole] = useState(null);
    const [assignee, setAssignee] = useState(null);
    const [contractRoles, setContractRoles] = useState();
    const [defaultAdminRoles, setDefaultAdminRoles] = useState([false, false, false, false, false]);

    const roles = useSelector((state) => state.chain_state.roles);

    useEffect(() => {
        setContractRoles(ROLES[contract])
    }, [contract])

    useEffect(() => {
        if (roles && roles[account]) {
            if(roles[account]['marionette']['DEFAULT_ADMIN_ROLE']) {
                setDefaultAdminRoles([true, true, true, true, true]);
            } else {
                setDefaultAdminRoles([
                    roles[account]['etherbase']['DEFAULT_ADMIN_ROLE'],
                    roles[account]['marionette']['DEFAULT_ADMIN_ROLE'],
                    roles[account]['config_controller']['DEFAULT_ADMIN_ROLE'],
                    false,
                    false
                ]);
            }
        }
    }, []);

    const getContractKey = (key) => {
        if (key === 'Etherbase') {
            return 'etherbase';
        } else if (key === 'Marionette') {
            return 'marionette';
        } else if (key === 'Config Controller') {
            return 'config_controller';
        }
    }

    const assignRole = (e) => {
        e.preventDefault();
        const isValidAddress = ethers.utils.isAddress(assignee);
        const hasContractAndRole = contract && role;
        if (!isValidAddress || !hasContractAndRole) {
            return;
        }
        
        assign_role.buildTransaction(ethereum, getContractKey(contract), role, assignee, 'normal')
            .then(async(res) => {
            })
            .catch(err => console.log(err));

    }

    return (
        <RoleAssignerPageContainer>
            <Title title='Assign Role' />
            <Component.ContractSelection setContract={setContract} currentContract={contract} defaultAdminRoles={defaultAdminRoles} />
            <Component.RoleSelection setCurrentRole={setCurrentRole} currentRole={role} roles={contractRoles} />
            <Component.Assignee setAssignee={setAssignee} assignee={assignee} />
            <Component.AssignRole assignRole={assignRole} />
        </RoleAssignerPageContainer>
    );
}

export {
    RoleAssignerPage
}
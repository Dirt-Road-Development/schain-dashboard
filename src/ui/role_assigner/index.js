/* eslint-disable react-hooks/exhaustive-deps */
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
 * @file src/ui/role_assigner/index.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */

import * as Component from './components';
import styled from 'styled-components';
import { useConnectedMetaMask } from 'metamask-react';
import { Title } from '../widgets/title';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ethers } from 'ethers';
import { AssignRole } from '../../logic/assign_role';
import addresses from '../../config/addresses';

const RoleAssignerPageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const ROLES = {
    Etherbase: ['DEFAULT_ADMIN_ROLE', 'ETHER_MANAGER_ROLE'],
    Marionette: ['DEFAULT_ADMIN_ROLE', 'IMA_ROLE', 'PUPPETEER_ROLE'],
    'Config Controller': ['DEFAULT_ADMIN_ROLE', 'DEPLOYER_ROLE', 'MTM_ADMIN_ROLE']
};


const RoleAssignerPage = () => {

    const { account, ethereum } = useConnectedMetaMask();

    const assign_role = new AssignRole();

    const [contract, setContract] = useState(null);
    const [role, setCurrentRole] = useState(null);
    const [assignee, setAssignee] = useState(null);
    const [contractRoles, setContractRoles] = useState();
    const [defaultAdminRoles, setDefaultAdminRoles] = useState([false, false, false, false, false]);
    // const ROUTE_PREFERENCE = ['direct', 'multisig', 'marionette', 'msg_marionette'];

    const roles = useSelector((state) => state.chain_state.roles);
    const isMultiSigOwner = useSelector((state) => state.chain_state.multisig.isOwner);

    useEffect(() => {
        setContractRoles(ROLES[contract])
    }, [contract])

    useEffect(() => {
        if(roles[account]['marionette']['PUPPETEER_ROLE'] || isMultiSigOwner) {
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

    const getRouteSelection = (key) => {
        /// Route Preference 1
        if (roles[account][key]['DEFAULT_ADMIN_ROLE']) {
            return 'normal'
        } else if (isMultiSigOwner && roles[addresses.multisig_wallet][key]['DEFAULT_ADMIN_ROLE']) {
            return 'multisig';
        } else if (roles[account]['marionette']['PUPPETEER_ROLE']) {
            return 'marionette';
        } else if (isMultiSigOwner && roles[addresses.multisig_wallet]['marionette']['PUPPETEER_ROLE']) {
            return 'msg_marionette';
        } else {
            console.log("ERROR");
            throw new Error('You do not have access to assign a role');
        }
    }


    const assignRole = (e) => {
        e.preventDefault();
        /// Confirms Valid Address
        const isValidAddress = ethers.utils.isAddress(assignee);
        /// Confirms Contract & Role
        const hasContractAndRole = contract && role;
        if (!isValidAddress || !hasContractAndRole) return;
        /// Checks Preference Options
        let contractKey = getContractKey(contract);
        let routeSelection = getRouteSelection(contractKey);
        console.log("ROUTE SELECTION", routeSelection);
        assign_role.buildTransaction(ethereum, getContractKey(contract), role, assignee, routeSelection)
            .then((res) => {
                console.log("RESPONSE: ", res);
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
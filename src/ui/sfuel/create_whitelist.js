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
 * @file src/ui/sfuel/create_whitelist.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */


import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../config';
import * as Component from './create_components';

const CreateWhitelistContainer = styled.div`
    height: 92%;
    position: absolute;
    top: 7.5%;
    left: 2.5%;
    right: 2.5%;
`;


const CreateWhitelist = ({ deploy }) => {

    const [dAppName, setDAppName] = useState(null);
    const [whitelistType, setWhitelistType] = useState('contract');

    const deployWhitelist = e => {
        e.preventDefault();
        deploy(dAppName, whitelistType);
    }

    return (
        <CreateWhitelistContainer>
            <Component.SetDappName setDappName={setDAppName} dAppName={dAppName} />
            <Component.SelectWhitelistType whitelistType={whitelistType} setWhitelistType={setWhitelistType} />
            <Component.DeployWhitelist deployWhitelist={deployWhitelist}/>
        </CreateWhitelistContainer>
    );
}

const CreateWhitelistButtonContainer = styled.div`
    position: absolute;
    top: 2.5%;
    right: 2.5%;
    background-color: white;
    border: 1px solid ${Colors.primary};
    border-radius: 16px;
    padding: 8px 16px;
`;

const CreateWhitelistButton = ({ currentPage, setCurrentPage }) => {
    return (
        <CreateWhitelistButtonContainer onClick={(e) => {
            e.preventDefault();
            setCurrentPage(currentPage === 'main' ? 'create_whitelist' : 'main');
        }}>
            {currentPage === 'main' ? 'Create Whitelist' : `<-- Back`}
        </CreateWhitelistButtonContainer>
    );
}

export {
    CreateWhitelist,
    CreateWhitelistButton
}
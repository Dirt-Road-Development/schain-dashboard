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
 * @file src/ui/ima/index.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */


import styled from 'styled-components';
import { Title } from '../widgets';
import { useConnectedMetaMask } from 'metamask-react';
import { useSelector } from 'react-redux';
import { Manager } from './manager/manager';
import { Action } from './actions';
import { AutoDeployment } from './AutoDeployment';
const ImaPageContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const ImaPage = () => {

    const { chainId } = useConnectedMetaMask();
    const imaState = useSelector((state) => state.ima_state);
    

    return (
        <ImaPageContainer>
            <Title title="IMA" />
            {imaState.selectedPage === 'auto_deployment' && <AutoDeployment chainId={chainId} />}
            {imaState.selectedPage !== 'auto_deployment' && <Action chainId={chainId} currentPage={imaState.selectedPage} />}
            <Manager chainId={chainId} />
        </ImaPageContainer>
    );
}

export {
    ImaPage
}
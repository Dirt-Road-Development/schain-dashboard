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
 * @file src/ui/ima/actions/mainnet/steps/_9_watching_status.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import styled from 'styled-components';
import { Colors } from '../../../../../config';
import { LoadingIcon } from '../../../../widgets';
import { StepContainer } from './step_container';

const WatcherContainer = styled.div`
    height: 100%;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-size: 1.15rem;
        color: white;
        margin: 16px;
    }
`;

const _9_WatchingRegistrationStatus = ({ isRegistered }) => {
    console.log("IS Registered: ", isRegistered);
    return (
        <StepContainer>
            <WatcherContainer>
                {!isRegistered && <LoadingIcon />}
                {!isRegistered && <p>Watching Token Registration</p>}
                {isRegistered && <p>Registration Complete</p>}
            </WatcherContainer>
        </StepContainer>
    );
}

export {
    _9_WatchingRegistrationStatus
}
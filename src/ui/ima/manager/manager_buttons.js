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
 * @file src/ui/ima/manager/manager_buttons.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Colors } from '../../../config';
import { setIMAPage } from '../../../state/ima.slice';
import { visibleLabel } from '../utils';

const IMAButtonContainer = styled.div`
    width: 75%;
    height: 5%;
    background: transparent;
    border: 1px solid ${Colors.primary};
    margin: 8px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    &:hover {
        background: white;
        color: ${Colors.primary};
    }
    border-radius: 16px;
`;
const IMAButton = ({ label }) => {

    const dispatch = useDispatch();

    return (
        <IMAButtonContainer onClick={(e) => {
            e.preventDefault();
            dispatch(setIMAPage(label));
        }}>
            {visibleLabel(label)}
        </IMAButtonContainer>
    )
}

export {
    IMAButton
}
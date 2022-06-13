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
 * @file src/ui/ima/actions/mainnet/steps/_1_input_token_address.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import styled from 'styled-components';
import { Colors } from '../../../../../config';
import { StepContainer } from './step_container';

const AddressField = styled.input`
    width: 100%;
    height: 100%;
    background: none;
    border: 1px solid ${Colors.primary};
    color: white;
    font-size: 1.15rem;
    text-align: center;
    height: 50px;
`

const IsValid = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.selectedColor};
    margin: 16px 0;
    color: ${props => props.selectedColor};
`;

const _1_InputTokenAddress = ({ isValidAddress, handleChange }) => {
    
    return (
        <StepContainer>
            <AddressField type='text' onChange={handleChange} placeholder='0x...' />
            <IsValid selectedColor={isValidAddress ? 'green' : 'red'}>{isValidAddress ? 'Valid Address' : 'Invalid Address'}</IsValid>
        </StepContainer>
    );
}

export {
    _1_InputTokenAddress
}
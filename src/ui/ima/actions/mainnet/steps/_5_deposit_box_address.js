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
 * @file src/ui/ima/actions/mainnet/steps/_5_deposit_box_address.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../../config';
import { Copy } from './copy';
import { StepContainer } from './step_container';

const AddressField = styled.div`
    width: 100%;
    height: 100%;
    background: none;
    border: 1px solid ${Colors.primary};
    color: white;
    font-size: 1.15rem;
    text-align: center;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    p {
        width: 95%;
        text-align: left;
        margin: 0 0 0 16px;
    }
    #fontAwesome {
        width: 5%;
    }
`

const _5_DepositBoxAddress = ({ address }) => {
    
    const [copy, setCopy] = useState({
        value: address,
        show: false
    });

    const copyToClipboard = () => {
        setCopy({
            ...copy,
            show: true
        });
        setTimeout(() => {
            setCopy({
                ...copy,
                show: false
            });
        }, 2000);
    }

    return (
        <StepContainer>
            <AddressField onClick={(e) => {
                e.preventDefault();
                window.navigator.clipboard.writeText(address);
                copyToClipboard();     
            }}>
                <p>{address}</p>
                <FontAwesomeIcon id="fontAwesome" icon={faClipboard} />
            </AddressField>
            <Copy show={copy.show} value={copy.value} />
        </StepContainer>
    );
}

export {
    _5_DepositBoxAddress
}
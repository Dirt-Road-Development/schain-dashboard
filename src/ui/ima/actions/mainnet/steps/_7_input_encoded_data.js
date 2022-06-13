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
 * @file src/ui/ima/actions/mainnet/steps/_7_input_encoded_data.js
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

const EncodedDataField = styled.div`
    width: 100%;
    height: 100%;
    background: none;
    border: 1px solid ${Colors.primary};
    color: white;
    font-size: 1.15rem;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    p {
        width: 95%;
        height: auto;
        text-align: left;
        margin: 16px 0 16px 16px;
        word-break: break-all;
    }
    #fontAwesome {
        width: 5%;
    }
`

const _7_InputEncodedData = ({ encodedData }) => {
    
    const [copy, setCopy] = useState({
        value: encodedData,
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
            <EncodedDataField onClick={(e) => {
                e.preventDefault();
                window.navigator.clipboard.writeText(encodedData);
                copyToClipboard();     
            }}>
                <p>{encodedData}</p>
                <FontAwesomeIcon id="fontAwesome" icon={faClipboard} />
            </EncodedDataField>
            <Copy show={copy.show} value={copy.value} />
        </StepContainer>
    );
}

export {
    _7_InputEncodedData
}
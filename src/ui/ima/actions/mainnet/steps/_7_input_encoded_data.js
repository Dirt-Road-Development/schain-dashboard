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
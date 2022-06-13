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
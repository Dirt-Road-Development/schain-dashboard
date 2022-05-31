import styled from "styled-components";
import { Colors } from "../../config";

const ContractSelectionContainer = styled.div`
    width: 85%;
    height: 5%;
    border: 1px solid grey;
    border-radius: 0 16px 16px 0;
    position: absolute;
    left: 2.5%;
    top: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 16px;
`;
const ContractSection = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-child(even) {
        border-left: 2px solid ${Colors.primary};
        border-right: 2px solid ${Colors.primary};
    }
`;
const ContractName = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    height: 100%;
    color: ${props => {
        if (!props.canAssign) {
            return 'black';
        } else {
            return props.active ? 'white' : 'grey';
        }
    }};
    background: ${props => {
        if (!props.canAssign) {
            return 'red';
        } else {
            return props.active ? Colors.primary : 'transparent';
        }
    }};
    border-radius: ${props => props.br ? props.br : 'none'};
`;

const ContractSelection = ({ currentContract, setContract, defaultAdminRoles }) => {
    return (
        <ContractSelectionContainer>
            {['Etherbase', 'Marionette', 'Config Controller', 'Message Proxy', 'IMA'].map((key, index) => {
                let borderRadius = null;
                if (index === 0) {
                    borderRadius = '16px 0 0 16px';
                } else if (index === 4) {
                    borderRadius = '0 16px 16px 0';
                }
                return (
                    <ContractSection onClick={(e) => {
                        e.preventDefault();
                        if (defaultAdminRoles[index]) {
                            setContract(key);
                        }
                    }}key={index}>
                        <ContractName canAssign={defaultAdminRoles[index]} br={borderRadius} active={currentContract === key}key={index}>{key}</ContractName>
                    </ContractSection>
                );
            })}
        </ContractSelectionContainer>
    );
}

export { 
    ContractSelection
}
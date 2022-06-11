import { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../config';


const ERCAutomaticDeployContainer = styled.div`
    width: 100%;
    height: 89%;
    border: 1px solid grey;
    position: relative;
`;

const About = styled.p`
    width: 85%;
    position: absolute;
    bottom: 5%;
    left: 2.5%;
    right: 2.5%;
    color: grey;
`;


const Fields = styled.div`
    position: absolute;
    top: 5%;
    left: 2.5%;
    right: 2.5%;
`;

const Field = styled.input`
    width: 100%;
    height: 20%;
    color: white;
    padding: 16px 0;
    margin: 16px 0;
    border: none;
    border-bottom: 1px solid grey;
    background: none;
    text-align: center;
    &::placeholder {
        color: grey;
    }
    &:-ms-input-placeholder {
        color: grey;
    }
    &::ms-input-placeholder {
        color: grey;
    }
`;

const Label = styled.label`
    font-size: 1rem;
    color: grey;
`;

const DeployContract = styled.button`
    position: absolute;
    bottom: 15%;
    left: 2.5%;
    right: 2.5%;
    padding: 16px 0;
    border-radius: 16px;
    background: none;
    border: 1px solid ${Colors.primary};
    color: white;
    &:hover {
        background: white;
        color: black;
    }
`;

const ERCAutomaticDeploy = ({ type, contractParams, setContractParams, nextStep }) => {

    const _aboutContent = (type, fields) =>  `The automated contract deployment for ${type.toUpperCase()} automatically deploys a basic contract that contains the proper burning and minting roles and takes the following parameters: ${fields}`;
    const [isDeployable, setIsDeployable] = useState(false);

    const _getFields = (type) => {
        if (type === 'erc20') return 'Name, Symbol, Decimals';
        if (type === 'erc721') return 'Name, Symbol';
        if (type === 'erc1155') return 'Name';
    }

    const handleInput = (e) => {
        e.preventDefault();
        setContractParams({
            ...contractParams,
            [e.target.name]: e.target.value
        });
        if (contractParams['name'] && contractParams['name'].length > 0) {
            if (type === 'erc721') {
                if (contractParams['symbol'] && contractParams['symbol'].length > 0) {
                    setIsDeployable(true);
                } else {
                    setIsDeployable(false);
                }
            } else if (type === 'erc20') {
                if (contractParams['symbol'] && contractParams['symbol'].length > 0 && contractParams['decimals'] && (contractParams['decimals'] > 0 && contractParams['decimals'] <= 18)) {
                    setIsDeployable(true);
                } else {
                    setIsDeployable(false);
                }
            } else {
                setIsDeployable(true);
            }
        } else {
            setIsDeployable(false);
        }
    }

    return (
        <ERCAutomaticDeployContainer>
            <About>{_aboutContent(type, _getFields(type))}</About>
            <Fields>
                <Label>Contract Name</Label>
                <Field name="name" onChange={handleInput} type='text' placeholder='Ex: Lilicion'/>
                {type !== 'erc1155' && <Label>Contract Symbol</Label>}
                {type !== 'erc1155' && <Field name="symbol" onChange={handleInput} type='text' placeholder='Ex: LILI'/>}
                {type === 'erc20' && <Label>Number of Decimals</Label>}
                {type === 'erc20' && <Field name="decimals" onChange={handleInput} type='number' min="1" max="18" placeholder='Ex: 18'/>}
            </Fields>
            {isDeployable && <DeployContract onClick={nextStep}>Deploy Contract</DeployContract>}
        </ERCAutomaticDeployContainer>
    );
}

export {
    ERCAutomaticDeploy
}
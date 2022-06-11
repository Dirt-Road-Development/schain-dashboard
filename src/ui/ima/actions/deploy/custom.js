import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../config';
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const ERCCustomDeployContainer = styled.div`
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
    height: 10%;
    color: white;
    padding: 12px 0;
    margin: 12px 0;
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

const Row = styled.div`
    border-bottom: 1px solid grey;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    margin: 16px 0;
`;


const ERCCustomDeploy = ({ type, contractParams, setContractParams, customParams, setCustomParams, nextStep }) => {

    const _aboutContent = (type, fields) =>  `The custom contract deployment for ${type.toUpperCase()} deploys a custom contract that contains the MUST contain the proper burning and minting roles and takes the following parameters: ${fields}. Please note that you have to upload a pre-compiled ABI and bytecode`;
    const [isDeployable, setIsDeployable] = useState(false);

    const _getFields = (type) => {
        if (type === 'erc20') return 'Name, Symbol, Decimals';
        if (type === 'erc721') return 'Name, Symbol';
        if (type === 'erc1155') return 'Name';
    }

    const handleInput = e => {
        e.preventDefault();
        setContractParams({
            ...contractParams,
            [e.target.name]: e.target.value
        });
        canDeploy();
    }

    const canDeploy = () => {
        const level1 = Object.values(contractParams);
        const level2 = Object.values(contractParams)
        if (level1.includes(null) || level1.includes(false) || level2.includes(false) || level2.includes(null)) {
            setIsDeployable(false);
        } else {
            setIsDeployable(true);
        }
    }

    const handleAbi = e => {
        e.preventDefault();
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(e.target.files[0]);
    }

    const onReaderLoad = (e) => {
        try {
            let abiObj = JSON.parse(e.target.result);
            setCustomParams({
                ...customParams,
                abi: abiObj,
                abiIsValid: true
            });
        } catch (err) {
            setCustomParams({
                ...customParams,
                abi: null,
                abiIsValid: false
            })
            alert('Error: Invalid ABI');
        } finally {
            canDeploy();
        }
    }

    const handleBytecode = e => {
        e.preventDefault();
        if (e.target.value.substring(0,2) === '0x') {
            setCustomParams({
                ...customParams,
                bytecode: e.target.value
            })
        }
        canDeploy();
    }

    return (
        <ERCCustomDeployContainer>
            <About>{_aboutContent(type, _getFields(type))}</About>
            <Fields>
                <Label>ABI - Upload a JSON File that is ONLY the ABI</Label>
                <Row>
                    <Field style={{ border: 'none', padding: '0', margin: '0' }} id="abi" name="abi" type="file" onChange={handleAbi} />
                    {customParams.abiIsValid !== null && <FontAwesomeIcon className='stepIcon' icon={customParams.abiIsValid ? faCircleCheck : faCircleXmark} size="1x" width="25px" color={customParams.abiIsValid ? '#00ff00' : 'red'}/>}
                </Row>
                <Label>Bytecode - Copy and Paste the Bytecode</Label>
                <Field name="bytecode" type="text" onChange={handleBytecode} placeholder="0x......" />
                <Label>Contract Name</Label>
                <Field name="name" onChange={handleInput} type='text' placeholder='Ex: Lilicion'/>
                {type !== 'erc1155' && <Label>Contract Symbol</Label>}
                {type !== 'erc1155' && <Field name="symbol" onChange={handleInput} type='text' placeholder='Ex: LILI'/>}
                {type === 'erc20' && <Label>Number of Decimals</Label>}
                {type === 'erc20' && <Field name="decimals" onChange={handleInput} type='number' min="1" max="18" placeholder='Ex: 18'/>}
            </Fields>
            {isDeployable && <DeployContract onClick={nextStep}>Deploy Contract</DeployContract>}
        </ERCCustomDeployContainer>
    );
}

export {
    ERCCustomDeploy
}
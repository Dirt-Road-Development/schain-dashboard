import { ethers } from 'ethers';
import { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../config';


const ERCPreDeployedDeployContainer = styled.div`
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

const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 8px 0;
    margin: 8px 0;
`;

const CheckButton = styled.button`
    background: ${props => {
        console.log(props);
        if (props.color === 'true' && props.isYes === true) {
            return 'green;';
        } else if (props.color === 'false' && props.isNo === true) {
            return 'red;';
        } else {
            return 'white;';
        }
    }};
    width: 50%;
    height: 100%;
    padding: 8px 0;
    border: none;
    color: black;
    border-radius: ${props => props.isYes ? '16px 0 0 16px' : '0 16px 16px 0'};
`;

const ERCPreDeployedDeploy = ({ type, address, setAddress, nextStep }) => {

    const _aboutContent = (type) =>  `The pre-deployed contract section is for ${type.toUpperCase()} contracts that are already deployed on the target chain. Simply put in your address and confirm the buttons`;
    
    const [canProceed, setCanProceed] = useState(false);
    
    const [checks, setChecks] = useState({
        isType: null,
        hasMint: null,
        hasBurn: null,
        isContract: null
    });

    const handleAddress = (e) => {
        e.preventDefault();
        if (ethers.utils.isAddress(e.target.value)) {
            setAddress(e.target.value);
            checkCanProceed()
        }
    }

    const handleCheck = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setChecks({
            ...checks,
            [e.target.name]: e.target.value
        });
        checkCanProceed()
    }

    const checkCanProceed = () => {
        if (address.substring(0,2) === '0x' && address.length === 42 && !Object.values(checks).includes(false)) {
            setCanProceed(true);
        } else {
            setCanProceed(false);
        }
    }


    return (
        <ERCPreDeployedDeployContainer>
            <About>{_aboutContent(type)}</About>
            <Fields>
                <Label>Contract Address</Label>
                <Field name="name" onChange={handleAddress} type='text' placeholder='0x...'/>
                <Label>I Confirm this is a deployed smart contract</Label>
                <Row>
                    <CheckButton name="isContract" isYes={true} color={checks.isContract} value={true} onClick={handleCheck}>Yes</CheckButton>
                    <CheckButton name="isContract" isNo={true} color={checks.isContract} value={false} onClick={handleCheck}>No</CheckButton>
                </Row>
                <Label>I Confirm this is an {type.toUpperCase()} Contract</Label>
                <Row>
                    <CheckButton name="isType" isYes={true} color={checks.isType} value={true} onClick={handleCheck}>Yes</CheckButton>
                    <CheckButton name="isType" isNo={true} color={checks.isType} value={false} onClick={handleCheck}>No</CheckButton>
                </Row>
                <Label>I Confirm this Contract has Minting functionality</Label>
                <Row>
                    <CheckButton name="hasMint" isYes={true} color={checks.hasMint} value={true} onClick={handleCheck}>Yes</CheckButton>
                    <CheckButton name="hasMint" isNo={true} color={checks.hasMint} value={false} onClick={handleCheck}>No</CheckButton>
                </Row>
                <Label>I Confirm this contract has Burning functionality</Label>
                <Row>
                    <CheckButton name="hasBurn" isYes={true} color={checks.hasBurn} value={true} onClick={handleCheck}>Yes</CheckButton>
                    <CheckButton name="hasBurn" isNo={true} color={checks.hasBurn} value={false} onClick={handleCheck}>No</CheckButton>
                </Row>
            </Fields>
            {canProceed && <DeployContract onClick={nextStep}>Proceed</DeployContract>}
        </ERCPreDeployedDeployContainer>
    );
}

export {
    ERCPreDeployedDeploy
}
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
 * @file src/ui/ima/actions/mainnet/index.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setAddTokenIMA } from "../../../../state/ima.slice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { IMAEncoder } from "../../../../logic/ima/encode";
import { Colors, MAINNET_RPC } from "../../../../config";
import { ActiveStep } from "./active_step";
import { 
    _1_InputTokenAddress,
    _5_DepositBoxAddress,
    _7_InputEncodedData,
    _9_WatchingRegistrationStatus,
    _10_RegistrationComplete
} from "./steps";

const STEP_LABELS = {
    1: 'Input mainnet token address',
    2: 'Go to Gnosis Safe in a separate browser',
    3: 'Connect your Gnosis Safe and select New Transaction',
    4: 'Select Contract Interaction and then encoded data',
    5: 'Copy this address into the Contract Address Field',
    6: 'Enter 0 for the value',
    7: 'Copy this encoded data into the encoded data field',
    8: 'Submit the Transaction',
    9: 'Watching IMA Bridge for Token Registration',
    10: 'Review Token Registration'
};

const RegisterOnMainnetContainer = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid grey;
`;

const AddressField = styled.input`
    width: 85%;
    height: 100%;
    background: none;
    border: none;
    color: white;
    font-size: 1.15rem;
    padding: 0 0 0 16px;
`;
const StepTitle = styled.h3`
    margin: 8px 4px;
    padding: 8px 4px;
    color: grey;
`;

const StepSubtitle = styled.h4`
    margin: 4px 4px;
    padding: 4px 4px;
    color: grey;
`;

const Row = styled.div`
    height: 7%;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 4px 0;
    border-bottom: 1px solid ${Colors.primary};
`;

const Button = styled.button`
    height: 100%;
    width: 100%;
    background-color: ${props => props.backgroundColor};
    border: none;
    border-radius: 16px;
    color: ${props => ['green', 'red'].includes(props.backgroundColor) ? 'white' : 'black'};
`;

const CompleteButton = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 16px;
`;

const RegisterOnMainnet = ({ type, state, setState, setCurrentStep }) => {

    const encoder = new IMAEncoder(type);

    const dispatch = useDispatch();
    const [isValidAddress, setIsValidAddress] = useState(null);
    const [address, setAddress] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);
    const [encodedData, setEncodedData] = useState(null);
    const provider = new ethers.providers.JsonRpcProvider(MAINNET_RPC);

    useEffect(() => {
        const interval = setInterval(async() => {
            
            if (state.originAddress) {
                
                let isRegistered = await encoder.isTokenRegistered(state.targetName, state.originAddress, provider);
                
                setIsRegistered(isRegistered);
                if (isRegistered) setCurrentStep();
            }
            
        }, 3500);

        return () => clearInterval(interval);
    }, [])

    const [activeStep, setActiveStep] = useState(1);

    const handleAddressChange = e => {
        e.preventDefault();
        const isValid = ethers.utils.isAddress(e.target.value) && e.target.value !== "0x0000000000000000000000000000000000000000";
        setIsValidAddress(isValid);
        if (isValid) {
            let _encodedData = encoder.encodeRegisterOnMainnet(state.targetName, e.target.value);
            setEncodedData(_encodedData);
            let _state = state;
            _state.originAddress = e.target.value;
            setState(_state);
            dispatch(setAddTokenIMA({ originAddress: e.target.value }))
            
        }
    }

    useEffect(() => {
        setAddress(encoder.getTargetContract());
    }, [encoder])

    const nextStep = () => {
        let canContinue = false;
        if (activeStep === 1) canContinue = isValidAddress;
        if ([2,3,4,5,6,7,8].includes(activeStep)) canContinue = true;
        if (activeStep === 9) canContinue = isRegistered;
        if (activeStep === 10) {
            setCurrentStep();
            return;
        }
        if (canContinue) {
            setActiveStep(activeStep + 1);
        }
    }

    const stepLabel = () => {
        return STEP_LABELS[activeStep];
    }

    const widget = () => {
        if (activeStep === 1) return <_1_InputTokenAddress isValidAddress={isValidAddress} handleChange={handleAddressChange} />
        if ([2,3,4,6,8].includes(activeStep)) return <div></div>;
        if (activeStep === 5) return <_5_DepositBoxAddress address={address} />;
        if (activeStep === 7) return <_7_InputEncodedData encodedData={encodedData} />
        if (activeStep === 9) return <_9_WatchingRegistrationStatus isRegistered={isRegistered} />
        if (activeStep === 10) return <_10_RegistrationComplete state={state} />
        return <span>Null</span>;
    }

    return (
        <RegisterOnMainnetContainer>
            <ActiveStep step={activeStep} nextStep={nextStep} stepLabel={stepLabel()} widget={widget()} />
        </RegisterOnMainnetContainer>
    )
}

export {
    RegisterOnMainnet
}
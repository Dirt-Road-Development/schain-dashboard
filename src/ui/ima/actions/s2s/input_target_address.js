import { ethers } from "ethers";
import { useConnectedMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../../config";

const InputTargetAddressContainer = styled.div`

    position: relative;
    height: 100%;
    width: 100%;
`;

const Label = styled.h3`
    position: absolute;
    top: 5%;
    left: 5%;
    color: white;
    font-size: 1.25rem;
`;

const TextField = styled.input`
    position: absolute;
    left: 5%;
    right: 5%;
    width: 90%;
    top: 10%;
    height: 35px;
    border: none;
    border-bottom: 1px solid grey;
    background: none;
    font-size: 1.15rem;
    color: white;
    text-align: center;
`;

const ContinueContainer = styled.div`
position: absolute;
bottom: 5%;
left: 25%;
right: 25%;
width: 50%;
height: 35px;
border-radius: 16px;
border: 1px solid ${Colors.primary};
display: flex;
align-items: center;
justify-content: center;
color: white;
&:hover {
    background: white;
    color: ${Colors.primary};
}
`;

const InputTargetAddress = ({ state, setState, setCurrentStep }) => {

    const { ethereum } = useConnectedMetaMask();
    const provider = new ethers.providers.Web3Provider(ethereum);

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (state.targetAddress && ethers.utils.isAddress(state.targetAddress)) {
            setIsValid(true);
        }
    }, []);

    const handleAddress = (e) => {
        e.preventDefault();
        const _isValid = ethers.utils.isAddress(e.target.value);
        if (_isValid) {
            provider.getCode(e.target.value)
                .then((res) => {
                    console.log(res);
                    if (!(res === '0x')) {
                        setIsValid(_isValid);
                        if (_isValid) {
                            setState({
                                ...state,
                                targetAddress: e.target.value
                            });
                        }
                    } else {
                        setIsValid(false);
                    }
                }).catch((err) => {
                    console.log(err);
                })
        } else {
            setIsValid(false);
        }
    }

    return (
        <InputTargetAddressContainer>
            <Label>Input the Target Chain Clone Address</Label>
            <TextField onChange={handleAddress} type='text' placeholder='0x...' />
            {isValid && <ContinueContainer onClick={(e) => {
                e.preventDefault();
                setCurrentStep();
            }}>Click to Proceed</ContinueContainer>}
        </InputTargetAddressContainer>
    );
}

export {
    InputTargetAddress
}
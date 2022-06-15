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
 * @file src/ui/ima/actions/s2s/register_token.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { useState } from "react";
import { ethers } from "ethers";
import { useConnectedMetaMask } from "metamask-react";
import styled from "styled-components";
import { Colors } from "../../../../config";
import chains from "../../../../config/chains";
import { RegisterReady } from "./register_ready";
import { Skale2Skale } from "../../../../logic/ima/s2s";
import { LoadingIcon } from "../../../widgets";
import { RegisteringToken } from "./registering_token";

const RegisterTokenContainer = styled.div`
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

const RegistrationContentContainer = styled.div`
    position: absolute;
    top: 20%;
    left: 5%;
    right: 5%;
    bottom: 25%;
    height: 65%;
    width: 90%;
`;

const RegisterToken = ({ state, setState, setCurrentStep }) => {
    console.log(state);
    const s2s = new Skale2Skale(state.originId, state.targetId, state.type);

    const { ethereum } = useConnectedMetaMask();
    const chain = chains.find((chain) => chain.id === state.originId);
    const provider = new ethers.providers.JsonRpcProvider(chain.rpcUrls.default);

    const [isValid, setIsValid] = useState(false);
    const [registered, setRegistered] = useState(null);

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
                                originAddress: e.target.value
                            });
                            setRegistered('ready');
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

    const registerToken = () => {
        try {
            setRegistered('loading');
            s2s.registerToken(ethereum, state.isTargetChain, state.originAddress, state.targetAddress)
                .then((res) => {
                    setRegistered('registered');
                }).catch((err) => {
                    throw new Error(err);
                })
        } catch (err) {
            setRegistered('ready');
            alert('Error: Please Try Again');
            console.log(err);
        }
    }

    const widget = () => {
        if (registered === 'ready') {
            return <RegisterReady state={state} registerToken={registerToken} />
        } else if (registered === 'loading') {
            return (
                <RegisteringToken />
            );
        } else {
            return null;
        }
    }

    return (
        <RegisterTokenContainer>
            <Label>Input the Origin Chain Token Address</Label>
            <TextField onChange={handleAddress} type='text' placeholder='0x...' />
            <RegistrationContentContainer>
                {widget()}
            </RegistrationContentContainer>
            {isValid && registered === 'registered' && <ContinueContainer onClick={(e) => {
                e.preventDefault();
                setCurrentStep();
            }}>Token Registered | Click to Proceed</ContinueContainer>}
        </RegisterTokenContainer>
    );
}

export {
    RegisterToken
}



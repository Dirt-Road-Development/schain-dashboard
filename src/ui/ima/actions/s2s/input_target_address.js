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
 * @file src/ui/ima/actions/s2s/input_target_address.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { ethers } from "ethers";
import { useConnectedMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../../config";
import chains from "../../../../config/chains";

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
    console.log(state);
    const chain = chains.find((chain) => chain.id === (state.isTargetChain ? state.originId : state.targetId));
    console.log("CHAIN: ", chain);
    const provider = new ethers.providers.JsonRpcProvider(chain.rpcUrls.default);

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
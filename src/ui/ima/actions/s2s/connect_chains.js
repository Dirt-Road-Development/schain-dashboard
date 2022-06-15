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
 * @file src/ui/ima/actions/s2s/connect_chains.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { useConnectedMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../../config";
import { Skale2Skale } from "../../../../logic/ima/s2s";
import { LoadingIcon } from "../../../widgets";

const ConnectChainsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 5%;
    h3 {
        color: white;
        font-size: 1.5rem;
        margin: 2px 0;
    }
    p {
        color: grey;
        font-size: 0.85rem;
    }
`;

const ChainContainer = styled.div`
    width: 45%;
    height: 75%;
    background: none;
    border: 1px solid grey;
    border-radius: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h6 {
        color: grey;
        font-size: 0.85rem;
        top: 2.5%;
    }
    .chainType {
        position: absolute;
        
        right: 5%;
        text-align: right;
    }
    .isMe {
        position: absolute;
        left: 5%;
        text-align: left;
    }
    .title {
        font-size: 1.15rem;
        color: white;
    }
    .description {
        font-size: 0.85rem;
        color: grey;
    }
`;

const IsConnectedContainer = styled.div`

    width: 90%;
    height: 10%;
    position: absolute;
    bottom: 10%;
    left: 5%;
    right: 5%;
    background: ${props => props.isConnected ? '#00ff00' : '#ff0000'};
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
`;

const ConnectButton = styled.div`


    width: 90%;
    height: 10%;
    position: absolute;
    bottom: 22.5%;
    left: 5%;
    right: 5%;
    background: ${Colors.primary};
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;

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

const ConnectChains = ({ state, setState, setCurrentStep }) => {

    const { chainId, ethereum } = useConnectedMetaMask();
    const [target, setTarget] = useState({
        name: 'Target',
        chainName: state.targetName,
        chainId: state.targetId,
        isMe: state.targetId === parseInt(chainId),
        isConnected: null,
        isLoading: true
    });

    const [origin, setOrigin] = useState({
        name: 'Origin',
        chainName: state.originName,
        chainId: state.originId,
        isMe: state.originId === parseInt(chainId),
        isConnected: null,
        isLoading: true
    });
    
    const s2s = new Skale2Skale(state.originId, state.targetId, state.type);
    
    useEffect(() => {
        try {
            s2s.checkS2SConnection()
                .then((res) => {
                    console.log("RESULT: ", res);
                    setTarget({
                        ...target,
                        isLoading: target.isMe ? false : !res.target,
                        isConnected: res.target
                    });
                    setOrigin({
                        ...origin,
                        isConnected: res.origin,
                        isLoading: origin.isMe ? false : !res.origin,
                    });
                }).catch(err => {
                    throw new Error(err)
                })
        } catch (err) {
            console.log("Error: ", err);
        }
        const interval = setInterval(async() => {
            try {
                let res = await s2s.checkS2SConnection();
                setTarget({
                    ...target,
                    isLoading: target.isMe ? false : !res.target,
                    isConnected: res.target
                });
                setOrigin({
                    ...origin,
                    isLoading: origin.isMe ? false : !res.origin,
                    isConnected: res.origin,
                });
            } catch (err) {
                console.log("Error: ", err);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const connectChain = (isMe) => {
        s2s.connectSChain(ethereum, isMe)
            .then((res) => {
                if (isMe === 'target') {
                    let _target = target;
                    _target.isLoading = false;
                    _target.isConnected = res.isConnected;
                    setTarget(_target);
                } else {
                    let _origin = origin;
                    _origin.isLoading = false;
                    _origin.isConnected = res.isConnected;
                    setOrigin(_origin);
                }
            }).catch((err) => {
                console.log("Connect Error: ", err);
            })
    }

    return (
        <ConnectChainsContainer>
            <ChainContainer key={0}>
                <TitleContainer>
                    <h3>{origin.chainName}</h3>
                    <p>{origin.chainId}</p>
                </TitleContainer>
                <h6 className='chainType'>{origin.name}</h6>
                <h6 className='isMe'>{origin.isMe ? 'This is You' : 'This is not you'}</h6>
                {origin.isMe && !origin.isConnected && !origin.isLoading && <ConnectButton onClick={(e) => {
                    e.preventDefault();
                    let _origin = origin;
                    _origin.isLoading = true;
                    setOrigin(_origin);
                    connectChain('origin');
                }}>
                    Connect to {target.chainName}
                </ConnectButton>}
                {origin.isLoading === true && <LoadingIcon />}
                <IsConnectedContainer isConnected={origin.isConnected}>
                    {origin.isConnected ? 'Connected' : 'Not Connected'} to {target.chainName}
                </IsConnectedContainer>
            </ChainContainer>
            <ChainContainer key={1}>
                <TitleContainer>
                    <h3>{target.chainName}</h3>
                    <p>{target.chainId}</p>
                </TitleContainer>
                <h6 className='chainType'>{target.name}</h6>
                <h6 className='isMe'>{target.isMe ? 'This is You' : 'This is not you'}</h6>
                {target.isMe && !target.isConnected && !target.isLoading && <ConnectButton onClick={(e) => {
                    e.preventDefault();
                    let _target = target;
                    _target.isLoading = true;
                    setTarget(_target);
                    connectChain('target');
                }}>
                    Connect to {origin.chainName}
                </ConnectButton>}
                {target.isLoading && <LoadingIcon />}
                <IsConnectedContainer isConnected={target.isConnected}>
                    {target.isConnected ? 'Connected' : 'Not Connected'} to {origin.chainName}
                </IsConnectedContainer>
            </ChainContainer>
            {target.isConnected && origin.isConnected && <ContinueContainer onClick={(e) => {
                e.preventDefault();
                setCurrentStep();
            }}>
                Proceed to Next Step
            </ContinueContainer>}
        </ConnectChainsContainer>
    );
}

export {
    ConnectChains
}
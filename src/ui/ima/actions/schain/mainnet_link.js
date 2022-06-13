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
 * @file src/ui/ima/actions/schain/mainnet_link.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

import { useConnectedMetaMask } from "metamask-react";
import { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../../config";
import { IMASchain } from "../../../../logic/ima/schain";
import { LoadingIcon } from "../../../widgets";

const MainnetLinkContainer = styled.div`

    height: 100%;
    width: 100%;
    min-height: 100%;
    position: relative;
`;

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 35%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const RegisterButton = styled.button`

    position: absolute;
    bottom: 5%;
    left: 0;
    right: 0;
    padding: 16px 0;
    border-radius: 16px;
    border: 1px solid ${Colors.primary};
    color: white;
    background: none;
    &:hover {
        background: white;
        color: ${Colors.primary};
    }
`;

const MainnetLink = ({ state, setCurrentPage }) => {

    const [button, setButton] = useState(null);
    const { ethereum } = useConnectedMetaMask();
    const schain = new IMASchain(ethereum, state.type);

    const registerContract = (e) => {
        e.preventDefault();
        setButton('loading');
        schain.registerToken(state.targetName.toLowerCase(), state.originAddress, state.targetAddress)
            .then((res) => {
                if (res.message === 'Token already mapped') {
                    setButton('already_registered');
                } else if (res.message === 'Token Added Successfully') {
                    setButton('registered');
                }
            })
            .catch((err) => {
                throw new Error(err);
            })
    }

    return (
        <MainnetLinkContainer>
            <Container>
               <Statement label="Token Type" text={state.type} />
               <Statement label="Target Chain" text={state.targetName} />
               <Statement label="Clone Token Address" text={state.targetAddress} />
               <Statement label="Origin Token Address" text={state.originAddress} />
               <Statement label="Mainnet Registration" text="Registered" />
               {['registered', 'already_registered'].includes(button) && <Statement label="SChain Registration" text="Registered" />}
            </Container>
            {!button && <RegisterButton onClick={registerContract}>Register on SKALE Chain</RegisterButton>}
            {button === 'loading' && <RegisterButton><LoadingIcon /></RegisterButton>}
            {button === 'registered' && <RegisterButton onClick={(e) => {
                e.preventDefault();
                setCurrentPage();
            }}>Token Mapping Complete | Click to Reset IMA Page</RegisterButton>}
            {button === 'already_registered' && <RegisterButton onClick={(e) => {
                e.preventDefault();
                setCurrentPage();
            }}>Token Already Registered | Click to IMA Page</RegisterButton>}
        </MainnetLinkContainer>
    );
}

const StatementContainer = styled.div`
    width: 100%;
    height: 25%;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const Label = styled.h5`
    font-size: 1rem;
    color: grey;
    width: 30%;
`;
const Text = styled.p`
    width: 60%;

    font-size: 1.15rem;
    color: white;
`;

const Statement = ({ label, text }) => {
    return (
        <StatementContainer>
            <Label>{label}</Label>
            <Text>{text}</Text>
        </StatementContainer>
    )
}

export {
    MainnetLink
}
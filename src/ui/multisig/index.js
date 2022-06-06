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
 * @file src/ui/multisig/index.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */

import { useConnectedMetaMask } from "metamask-react";
import { useEffect } from "react";
import styled from "styled-components";
import { MultisigWallet } from "../../logic/contracts/multisig_wallet";
import { Title } from "../widgets/title";
import * as Component from './components';

const MultiSigPageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const MultiSigPage = () => {
    // const msg = new MultisigWallet();
    // const { ethereum } = useConnectedMetaMask();

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         msg.initializeFull(ethereum);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, [])

    return (
        <MultiSigPageContainer>
            <Title title="Multisig Wallet" />
            <Component.MultiSigStatistics />
            <Component.Transactions />
            <Component.Owners />
        </MultiSigPageContainer>
    );
}

export {
    MultiSigPage
}
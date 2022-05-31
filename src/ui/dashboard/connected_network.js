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
 * @file src/ui/dashboard/connected_network.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */


import styled from "styled-components";
import { Colors } from '../../config/theme';
import { useConnectedMetaMask } from 'metamask-react';
import Chains from '../../config/chains';

const ConnectedNetworkContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 0 0 16px 0;
`;

const DataRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    width: 90%;
    margin: 0 auto;
    border-bottom: ${(props) => {
        if (props.hideBorder) {
            return 'none';
        } else {
            return `0.5px solid ${Colors.primary}`;
        }
    }}
`;

const Label = styled.p`
    font-size: 1rem;
    color: grey;
`;
const Data = styled.p`
    font-size: 1.15rem;
    color: white;
`;


const ConnectedNetwork = () => {
    
    const { chainId } = useConnectedMetaMask();
    const chain = Chains.find((value) => {
        return parseInt(chainId) === value.id;
    });

    return (
        <ConnectedNetworkContainer>
            <DataRow>
                <Label>Chain</Label>
                <Data>{chain.name}</Data>
            </DataRow>
            <DataRow>
                <Label>Chain ID</Label>
                <Data>{chain.id}</Data>
            </DataRow>
            <DataRow hideBorder={true}>
                <Label>Chain Type</Label>
                <Data>{chain.testnet ? 'Testnet': 'Mainnet'}</Data>
            </DataRow>
        </ConnectedNetworkContainer>
    )
}

export { 
    ConnectedNetwork
}
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
 * @file src/ui/widgets/wrong_chain.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */

import { ethers } from "ethers";
import { useMetaMask } from "metamask-react";
import styled from "styled-components";
import { Colors } from "../../config";
import chains from "../../config/chains";

const WrongNetworkContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const WrongNetworkButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const WrongNetworkButton = styled.div`
    padding: 16px;
    background: red;
    border-radius: 16px;
    color: white;
    font-weight: bold;
`;

const AddChainsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;
const AddChainContainer = styled.div`
    height: 50px;
    width: 10vw;
    border: 0.5px solid ${Colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: grey;
    margin: 16px;
    border-radius: 16px;
    &:hover {
        background: white;
        color: ${Colors.primary};
    }
`;

const AddChain = ({ chain }) => {

    const { addChain, switchChain} = useMetaMask();

    return (
        <AddChainContainer onClick={(e) => {
            e.preventDefault();
            let _addChain = addChain({
                chainId: ethers.utils.hexValue(chain.id),
                chainName: chain.name,
                rpcUrls: [chain.rpcUrls.default],
                nativeCurrency: chain.nativeCurrency,
                blockExplorerUrls: [chain.blockExplorers['default']['url']]
            });
            let _switchChain = switchChain(ethers.utils.hexValue(chain.id));
            window.location.reload();
        }}>
            {chain.name}
        </AddChainContainer>
    )
}


const WrongNetwork = () => {
    return (
        <WrongNetworkContainer>
            <WrongNetworkButtonContainer>
                <WrongNetworkButton>
                    Wrong Network
                </WrongNetworkButton>
                <h3 style={{ margin: '16px', color: 'grey' }}>Add SKALE Chain Below</h3>
                <AddChainsContainer>
                    {chains.map((chain, index) => {
                        return <AddChain chain={chain} key={index} />
                    })}
                </AddChainsContainer>
            </WrongNetworkButtonContainer>
        </WrongNetworkContainer>
    );
}

export {
    WrongNetwork
}
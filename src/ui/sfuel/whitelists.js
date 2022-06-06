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
 * @file src/ui/sfuel/whitelists.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */


import styled from "styled-components";
import { Colors } from "../../config";
import { SFuelModel } from "../../models";

const WhitelistsContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
`;

const ContractsListContainer = styled.div`
    position: absolute;
    top: 13%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

const ContractDisplayContainer = styled.div`
    width: 100%;
    height: 50px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    display: flex;
    flex-direction: row;
    &:hover {
        background-color: ${Colors.primary};
    }
`;

const DisplayText = styled.p`
    align-self: center;
    margin-left: 0.5%;
    font-size: 1.15rem;
    width: calc(100%/6);
    max-width: calc(100%/6);
    overflow: hidden;
    border-right: 0.5px solid grey;
`;

const ContractDisplay = ({ contract, setCurrentPage, index }) => {

    const _shortenAddress = (_str) => _str.substring(0, 12) + '...' + _str.substring(32);

    return (
        <ContractDisplayContainer onClick={(e) => {
            e.preventDefault();
            setCurrentPage('contract_' + index)
        }}>
            <DisplayText>{contract.dAppName}</DisplayText>
            <DisplayText>{_shortenAddress(contract.contractAddress)}</DisplayText>
            <DisplayText>{contract.whitelistType === 'contract' ? 'Contract' : 'User'} Whitelist</DisplayText>
            <DisplayText>{contract.isActive ? 'Active': 'Inactive'}</DisplayText>
            <DisplayText>{_shortenAddress(contract.owner)}</DisplayText>
            <DisplayText>{new Date(contract.timestamp * 1000).toLocaleString()}</DisplayText>

        </ContractDisplayContainer>
    )
}

const ContractsHeaderBarContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 10%;
    width: 100%;
    height: auto;
    padding-bottom: 15px;
`;

const HeaderText = styled.p`
    width: calc(100%/ 6);
    text-align: center;
    font-size: 1rem;
`;

const ContractsHeaderBar = () => {
    return (
        <ContractsHeaderBarContainer>
            {['dApp Name', 'Address', 'Type', 'Active', 'Owner', 'Created'].map((_str, index) => {
                return <HeaderText key={index}>{_str}</HeaderText>;
            })}
        </ContractsHeaderBarContainer>
    );
}

const Whitelists = ({ contracts, setCurrentPage }) => {
    return (
        <WhitelistsContainer>
            {contracts && contracts.length === 0 && <p>No Deployed Whitelist Contracts</p>}
            <ContractsHeaderBar />
            <ContractsListContainer>
                {contracts && contracts.map((contract, index) => {
                    const _contract = new SFuelModel(contract);
                    if (_contract.owner === '0x0000000000000000000000000000000000000000') return null;
                    return <ContractDisplay contract={_contract} setCurrentPage={setCurrentPage} index={index} />;
                })}
            </ContractsListContainer>
        </WhitelistsContainer>
    );
}

export {
    Whitelists
}
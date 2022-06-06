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
 * @file src/ui/sfuel/sfuel_contract.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */


import { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../config";
import { SFuelModel } from "../../models";
import { Contracts } from "../../config";
import { BigNumber, ethers } from "ethers";
import { useConnectedMetaMask } from "metamask-react";
import { LoadingIcon } from "../widgets";
import { SFuelRegistry } from "../../logic/contracts/s_fuel_registry";
import { SFuelWhitelist } from "../../logic/contracts/s_fuel_whitelist";

const SFuelContractContainer = styled.div`
    height: 92.5%;
    position: absolute;
    top: 7.5%;
    left: 2.5%;
    right: 2.5%;
    display: flex;
    flex-direction: row;
`;


const SFuelContract = ({ contractInfo }) => {

    const { ethereum, account }  = useConnectedMetaMask();
    const provider = new ethers.providers.Web3Provider(ethereum);
    
    const _contract = new SFuelModel(contractInfo);
    
    const [statState, setStatState] = useState({
        DEFAULT_ADMIN_ROLE: null,
        WHITELIST_MANAGER_ROLE: null,
        CONTRACT_MANAGER_ROLE: null,
        BALANCE: null,
        HAS_DEFAULT_ADMIN_ROLE: null,
        HAS_WHITELIST_MANAGER_ROLE: null,
        HAS_CONTRACT_MANAGER_ROLE: null,
        WHITELISTED_CONTRACTS: null,
        IS_PAUSED: null
    });

    const contractsConfig = new Contracts();
    const config = contractsConfig.getConfig('s_fuel_contracts_whitelist');
    const contract = new ethers.Contract(contractInfo['contractAddress'], config['abi'], provider);
    const DEFAULT_ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000";
    const WHITELIST_MANAGER_ROLE = "0x2a3dab589bcc9747970dd85ac3f222668741ae51f2a1bbb8f8355be28dd8a868";
    const CONTRACT_MANAGER_ROLE = "0x8135f02737a6b32709c1f229001b55183df0d6abcb3022e8bae091ad43fd9e6d";
    const WHITELISTED_CONTRACT = "0x5ce17f380ca23160a7c5ce147cd0292497d6246fba3530e88f1c6691cf3ce206";

    useEffect(() => {
        const interval = setInterval(() => {
            Promise.all([
                contract.callStatic.getRoleMemberCount(DEFAULT_ADMIN_ROLE),
                contract.callStatic.getRoleMemberCount(WHITELIST_MANAGER_ROLE),
                contract.callStatic.getRoleMemberCount(CONTRACT_MANAGER_ROLE),
                provider.getBalance(contract.address),
                contract.callStatic.hasRole(DEFAULT_ADMIN_ROLE, account),
                contract.callStatic.hasRole(WHITELIST_MANAGER_ROLE, account),
                contract.callStatic.hasRole(CONTRACT_MANAGER_ROLE, account),
                contract.callStatic.getRoleMemberCount(WHITELISTED_CONTRACT),
                contract.callStatic.getActiveState()
            ]).then(([a, b, c, d, e, f, g, h, i]) => {
                console.log("D: ", d);
                setStatState({
                    DEFAULT_ADMIN_ROLE: Number(a),
                    WHITELIST_MANAGER_ROLE: Number(b),
                    CONTRACT_MANAGER_ROLE: Number(c),
                    BALANCE: d,
                    HAS_DEFAULT_ADMIN_ROLE: e ? 'Yes' : 'No',
                    HAS_WHITELIST_MANAGER_ROLE: f ? 'Yes' : 'No',
                    HAS_CONTRACT_MANAGER_ROLE: g ? 'Yes' : 'No',
                    WHITELISTED_CONTRACTS: Number(h),
                    IS_PAUSED: i
                })
            }).catch((err) => {
                console.log("Error Loading Contract Data", err);
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [])

    return (
        <SFuelContractContainer>
            <ContractStats statState={statState} />
            <AboutInformation contractAddress={_contract.contractAddress} statState={statState} />
        </SFuelContractContainer>
    );
}


const ContractStatsContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`;

const ContractStats = ({ statState }) => {

    return (
        <ContractStatsContainer>
            <ContractStat label="# of Default Admins" value={statState.DEFAULT_ADMIN_ROLE} />
            <ContractStat label="# of Whitelist Managers" value={statState.WHITELIST_MANAGER_ROLE} />
            <ContractStat label="# of Contract Managers" value={statState.CONTRACT_MANAGER_ROLE} />
            <ContractStat label="# of Whitelisted Contracts" value={statState.WHITELISTED_CONTRACTS} />
            <ContractStat label="Contract Balance" value={statState.BALANCE} />
            <ContractStat label="Active State" value={statState.IS_PAUSED ? 'Paused': 'Active'} />
            <ContractStat label="I am a Default Admin" value={statState.HAS_DEFAULT_ADMIN_ROLE} />
            <ContractStat label="I am Whitelist Manager" value={statState.HAS_WHITELIST_MANAGER_ROLE} />
            <ContractStat label="I am Contract Manager" value={statState.HAS_CONTRACT_MANAGER_ROLE} />
        </ContractStatsContainer>
    );
}

const ContractStatContainer = styled.div`
    width: 30%;
    height: 26%;
    border: 2px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Label = styled.p`
    font-size: 1rem;
    text-align: center;
    color: grey;
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
`;

const Data = styled.h3`
    font-size: 2rem;
    color: ${props => {
        if (typeof props.enabled !== 'boolean') {
            return Colors.primary;
        } else if (props.enabled) {
            return 'green;';
        } else {
            return 'red;'
        }
    }};
`;

const ContractStat = ({ label, value }) => {
    if (label === 'Contract Balance') {
        value = Number(value) > 0 ? `${ethers.utils.formatEther(BigNumber.from(value))} S-Fuel` : '0 S-Fuel'
    } else if (label === '# of Whitelisted Contracts') {
        value = value === 0 ? '0' : value
    }
    return (
        <ContractStatContainer>
            {!value ? <LoadingIcon /> : <Data>{value.toString()}</Data>}
            <Label>{label}</Label>
        </ContractStatContainer>
    );
}

const AboutInformationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 30%;
    height: 92.5%;
    position: absolute;
    right: 0;
    top: 1%;

`;
const AboutInformation = ({ contractAddress, statState }) => {

    return (
        <AboutInformationContainer>
            <WhitelistContract contractAddress={contractAddress} />
            <AssignRole contractAddress={contractAddress} statState={statState} />
            <RevokeRole contractAddress={contractAddress} statState={statState} />
            <FillContract contractAddress={contractAddress} />
            <DeleteWhitelist contractAddress={contractAddress} />
        </AboutInformationContainer>
    );
}

const ButtonContainer = styled.div`
    width: 90%;
    margin: 5% 0;
    height: 10%;
    display: flex;
    align-items: center;
    button {
        width: 100%;
        height: 100%;
        border: 2px solid grey;
        color: grey;
        background: none;
        font-size: 1.15rem;
        padding: 16px;
        border-radius: ${props => props.radius};
        &:hover {
            background: ${props => props.isDelete ? 'red': Colors.primary};
            color: white;
        }
    }
`;
const FillContract = ({ contractAddress }) => {

    const { ethereum } = useConnectedMetaMask();

    const fillContract = async() => {
        const s_fuel_registry_class = new SFuelRegistry();
        let fill = await s_fuel_registry_class.fillWhitelist(ethereum, contractAddress);
    }

    return (
        <ButtonContainer>
            <button onClick={(e) => {
                e.preventDefault();
                fillContract();
            }}>Fill Contract</button>
        </ButtonContainer>
    );
}

const DeleteWhitelist = ({ contractAddress })  => {

    const { ethereum } = useConnectedMetaMask();

    const deleteWhitelist = async() => {
        console.log("Delete Whitelist - Index.js")
        const s_fuel_registry_class = new SFuelRegistry();
        const _delete = await s_fuel_registry_class.deleteWhitelist(ethereum, contractAddress);
        console.log("Delete Whitelist: ", _delete);
    }

    return (
        <ButtonContainer radius="0 0 16px 0" isDelete={true} >
            <button onClick={(e) => {
                e.preventDefault();
                deleteWhitelist(contractAddress);
            }}>Delete</button>
        </ButtonContainer>
    );
}

const WhitelistContractContainer = styled.div`
    width: 90%;
    height: 40%;
    margin: 5% 5% 1% 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 2px solid grey;
    border-radius: 0 16px 0 0;
    h2 {
        margin: 10px;
        color: grey;
        font-size: 1.15rem;
    }
`;

const TextInput = styled.input`
    margin: 7.5px;
    border: 1px solid grey;
    height: 25px;
    background: none;
    color: white;
    font-size: 0.75rem;
    text-align: center;
    width: 95%;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px white;
    }
`;

const WhitelistContract = ({ contractAddress }) => {

    const { ethereum } = useConnectedMetaMask();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const [whitelistee, setWhitelistee] = useState("");
    const [validAddress, setValidAddress] = useState(false);

    const whitelistContract = async() => {
        const s_fuel_registry_class = new SFuelRegistry();
        const _whitelist = await s_fuel_registry_class.addToWhitelist(ethereum, contractAddress, whitelistee);
    }

    return (
        <WhitelistContractContainer>
            <h2>Whitelist Contract</h2>
            <TextInput type='text' value={whitelistee} onChange={(e) => {
                e.preventDefault();
                setWhitelistee(e.target.value);
                const isValidAddress = ethers.utils.isAddress(e.target.value);
                if (isValidAddress) {
                    provider.getCode(e.target.value)
                        .then((res => {
                            setValidAddress(!(res === '0x'))
                        }))
                        .catch(err => setValidAddress(false));
                }
            }} />
            {validAddress && <WhitelistButton onClick={(e) => {
                e.preventDefault();
                whitelistContract();
            }}>Whitelist Contract</WhitelistButton>}
            {validAddress ? <ValidStatement color="green">Valid Address</ValidStatement> : <ValidStatement color="red">Invalid Address</ValidStatement>}
        </WhitelistContractContainer>
    )
}

const ValidStatement = styled.p`
    color: ${props => props.color};
    text-align: center;
    width: 100%;
`;

const WhitelistButton = styled.button`
    width: 94%;
    margin: 7.5px auto;
    background: ${Colors.primary};
    border: 1px solid ${Colors.primary};
    color: white;
    border-radius: 0 0 16px 16px;
`;

const AssignRoleContainer = styled.div`
    width: 90%;
    height: 35%;
    margin: 1% 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 2px solid grey;
    h2 {
        margin: 10px;
        color: grey;
        font-size: 1.15rem;
    }
`;
const AssignRole = ({ contractAddress, statState }) => {

    const [futureAddress, setFutureAddress] = useState("");
    const [currentRole, setCurrentRole] = useState("");
    const [isValid, setIsValid] = useState(false);
    
    const { ethereum } = useConnectedMetaMask();

    const roles = {
        DEFAULT_ADMIN_ROLE: "0x0000000000000000000000000000000000000000000000000000000000000000",
        WHITELIST_MANAGER_ROLE: "0x2a3dab589bcc9747970dd85ac3f222668741ae51f2a1bbb8f8355be28dd8a868",
        CONTRACT_MANAGER_ROLE: "0x8135f02737a6b32709c1f229001b55183df0d6abcb3022e8bae091ad43fd9e6d"
    };

    const assignRole = async() => {
        let sFuelWhitelist = new SFuelWhitelist();
        // ethereum, contractAddress, assigneeAddress, role
        let _void = await sFuelWhitelist.assignRole(ethereum, contractAddress, futureAddress, roles[currentRole]);
        setIsValid(false);
        setFutureAddress("");
        setCurrentRole("");
    }


    if (!statState.HAS_DEFAULT_ADMIN_ROLE) {
        return (
            <AssignRoleContainer>
                <p>Cannot Assign Roles</p>
            </AssignRoleContainer>
        );
    }

    return (
        <AssignRoleContainer>
            <h2>Assign Role</h2>
            <SFuelRoleSelection currentRole={currentRole} setCurrentRole={setCurrentRole} statState={statState} />
            <TextInput type='text' value={futureAddress} onChange={(e) => {
                e.preventDefault();
                setFutureAddress(e.target.value);
                setIsValid(ethers.utils.isAddress(e.target.value))
            }} />
            {isValid && <WhitelistButton onClick={(e) => {
                e.preventDefault();
                assignRole();
            }}>Assign Role</WhitelistButton>}
        </AssignRoleContainer>
    );
}

const RevokeRole = ({ contractAddress, statState }) => {

    const [futureAddress, setFutureAddress] = useState("");
    const [currentRole, setCurrentRole] = useState("");
    const [isValid, setIsValid] = useState(false);
    
    const { ethereum } = useConnectedMetaMask();

    const roles = {
        DEFAULT_ADMIN_ROLE: "0x0000000000000000000000000000000000000000000000000000000000000000",
        WHITELIST_MANAGER_ROLE: "0x2a3dab589bcc9747970dd85ac3f222668741ae51f2a1bbb8f8355be28dd8a868",
        CONTRACT_MANAGER_ROLE: "0x8135f02737a6b32709c1f229001b55183df0d6abcb3022e8bae091ad43fd9e6d"
    };

    const revokeRole = async() => {
        let sFuelWhitelist = new SFuelWhitelist();
        // ethereum, contractAddress, assigneeAddress, role
        let _void = await sFuelWhitelist.revokeRole(ethereum, contractAddress, futureAddress, roles[currentRole]);
        setIsValid(false);
        setFutureAddress("");
        setCurrentRole("");
    }


    if (!statState.HAS_DEFAULT_ADMIN_ROLE) {
        return (
            <AssignRoleContainer>
                <p>Cannot Revoke Roles</p>
            </AssignRoleContainer>
        );
    }

    return (
        <AssignRoleContainer>
            <h2>Revoke Role</h2>
            <SFuelRoleSelection currentRole={currentRole} setCurrentRole={setCurrentRole} statState={statState} />
            <TextInput type='text' value={futureAddress} onChange={(e) => {
                e.preventDefault();
                setFutureAddress(e.target.value);
                setIsValid(ethers.utils.isAddress(e.target.value))
            }} />
            {isValid && <WhitelistButton onClick={(e) => {
                e.preventDefault();
                revokeRole();
            }}>Revoke Role</WhitelistButton>}
        </AssignRoleContainer>
    );
}

const SFuelRoleSelectionContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 2.5%;
    border: 1px solid grey;
`;

const SFuelRoleSelection = ({ currentRole, setCurrentRole, statState }) => {
    return (
        <SFuelRoleSelectionContainer>
            {['DEFAULT_ADMIN_ROLE', 'CONTRACT_MANAGER_ROLE', 'WHITELIST_MANAGER_ROLE'].map((role, index) => {
                return (
                    <Role isSelected={currentRole === role} onClick={(e) => {
                        e.preventDefault();
                        setCurrentRole(role);
                    }}>
                        {role}
                    </Role>
                )
            })}
        </SFuelRoleSelectionContainer>
    );
}

const Role = styled.div`
    height: 35px;
    color: ${props => props.isSelected ? 'white': 'grey'};
    background: ${props => props.isSelected ? Colors.primary: 'none'};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export {
    SFuelContract
}
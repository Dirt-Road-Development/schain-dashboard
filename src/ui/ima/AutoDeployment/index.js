import { ethers } from 'ethers';
import { useConnectedMetaMask } from 'metamask-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../config';
import { SChainAutoDeployment } from '../../../logic/ima/deployment_status';
import { LoadingIcon, Title } from '../../widgets';

const AutoDeploymentContainer = styled.div`
    position: absolute;
    top: 7.5%;
    height: 92.5%;
    left: 2.5%;
    width: 62.5%;
`;

const ScreenBar = styled.div`
    width: 100%;
    height: 2.5%;
    border-bottom: 1px solid white;
    padding: 0 0 16px 0;
    color: white;
`;
const ContractsList = styled.div`
    margin: 16px 0;
    padding: 8px 0;
    border: 1px solid grey;
    height: 91.2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
const ContractContainer = styled.div`
    width: 85%;
    border: 1px solid grey;
    height: 16%;
    border-radius: 16px;
    margin: 16px;
    position: relative;
`;

const TitleContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 2.5%;
    height: 100%;
    width: 45%;
    color: white;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
`;
const StatusContainer = styled.div`
    position: absolute;
    right: 2.5%;
    top: 0;
    bottom: 0;
    color: white;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 15%;
    p {
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 35%;
        width: 100%;
        border: 1px solid white;
        background: ${props => props.isEnabled === undefined ? 'yellow' : props.isEnabled ? 'red': 'green'};
        color: ${props => props.isEnabled === undefined ? 'black' : 'white'};
    }
`;
const RoleContainer = styled.div`
    position: absolute;
    top: 5%;
    right: 5%;
    height: 35%;
    width: 30%;
    background: red;
`;

const AutoDeployment = () => {

    const [status, setStatus] = useState({
        token_manager_erc1155: false,
        token_manager_erc20: false,
        token_manager_erc721: false,
        token_manager_eth: false,
        token_manager_erc721_with_metadata: false,
    });

    const [roles, setRoles] = useState({
        token_manager_erc1155: false,
        token_manager_erc20: false,
        token_manager_erc721: false,
        token_manager_eth: false,
        token_manager_erc721_with_metadata: false,
    });

    const [loading, setLoading] = useState({
        page: true,
        token_manager_erc1155: false,
        token_manager_erc20: false,
        token_manager_erc721: false,
        token_manager_eth: false,
        token_manager_erc721_with_metadata: false,
    })

    const { account, ethereum } = useConnectedMetaMask();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const autoDeployController = new SChainAutoDeployment(provider, account);

    useEffect(() => {
        const getStatus = async() => {
            const _status = await autoDeployController.getAllStatus();
            const _roles = await autoDeployController.getAllRoles();
            setStatus(_status);
            setRoles(_roles);
            setLoading({
                ...loading,
                page: false
            })
        }

        getStatus();
    }, [])

    const toggleDeployment = async(key) => {
        try {
            setLoading({
                ...loading,
                [key]: true
            })

            const toggle = await autoDeployController.toggleDeployment(provider, key);
            const newStatus = await autoDeployController.getStatus(key);

            setStatus({
                ...status,
                [key]: newStatus
            })

            setLoading({
                ...loading,
                [key]: false
            })

            console.log("Loading: ", loading);
        } catch (err) {
            console.log("ERROR: ", err);
            alert(`Error Toggling Deployment for ${key}`);
        }
    }

    if (loading.page) {
        return (
            <AutoDeploymentContainer>
                <LoadingIcon />
            </AutoDeploymentContainer>
        );
    }

    return (
        <AutoDeploymentContainer>
            <ScreenBar>
                SKALE Chain Automatic Deployment Manager
            </ScreenBar>
            <ContractsList>
                {status && Object.entries(status).map((status, index) => {
                    const _title = status[0].includes('with') ? status[0].split('_')[2].toUpperCase() + ' with Metadata': status[0].split('_')[2].toUpperCase();
                    return (
                        <ContractContainer key={index}>
                            <TitleContainer>
                                {_title} Token Manager
                            </TitleContainer>
                            {!roles[status[0]] && <RoleContainer></RoleContainer>}
                            {loading[status[0]] === true ? <StatusContainer isEnabled={undefined}><p>Updating</p></StatusContainer> : <StatusContainer onClick={async(e) => {
                                e.preventDefault();
                                await toggleDeployment(status[0]);
                            }} isEnabled={status[1]}><p>{status[1] ? 'Disable': 'Enable'}</p></StatusContainer>}
                        </ContractContainer>
                    );
                })}
            </ContractsList>
            
        </AutoDeploymentContainer>
    );
}

export {
    AutoDeployment
}
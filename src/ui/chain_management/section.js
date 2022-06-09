import { useConnectedMetaMask } from "metamask-react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ConfigController } from "../../logic/contracts/config_controller";
import { Title } from "../widgets";

const SectionContainer = styled.div`
    width: 50%;
    margin: ${props => props.margin};
    position: relative;
    border-radius: ${props => props.border};
    border: 1px solid grey;
`;

const TitleContainer = styled.div`
    position: absolute;
    top: 2.5%;
    left: 2.5%;
    color: grey;
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    h2 {
        text-align: center;
        width: 100%;
    }
`;

const TitleContainer2 = styled.div`
    position: absolute;
    top: 8.5%;
    left: 2.5%;
    color: silver;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    h2 {
        text-align: center;
        width: 100%;
    }
`;


const Section = ({ type }) => {
    const isFCD = type === 'FCD';
    const margin = isFCD ? '0 1% 0 0' : '0 0 0 1%';
    const border = isFCD ? '16px 0 0 16px' : '0 16px 16px 0';
    const title = isFCD ? 'Free Contract Deployment' : 'Multi-Transaction Mode';
    const aka = isFCD ? 'Everyone Can Deploy' : 'Speedy Game Mode';
    const selector = isFCD ? 'freeContractDeploymentEnabled' : 'multiTransactionModeEnabled';

    const isEnabled = useSelector((state) => state.chain_state[selector]);
    // const canChangeRole = useSelector((state) => state.chain_state)    
    return (
        <SectionContainer margin={margin} border={border}>
            <TitleContainer><h2>{title}</h2></TitleContainer>
            <TitleContainer2><h6>a.k.a {aka}</h6></TitleContainer2>
            <CurrentState isEnabled={isEnabled} />
            <ChangeState isEnabled={isEnabled} isFCD={isFCD} type={type} />
        </SectionContainer>
    )
}

const CurrentStateContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        color: ${props => props.color};
        font-size: 2rem;
    }
`;
const CurrentState = ({ isEnabled }) => {
    return (
        <CurrentStateContainer color={isEnabled ? 'green': 'red'}>
            <p>{isEnabled ? 'Enabled' : 'Disabled'}</p>
        </CurrentStateContainer>
    )
}

const ChangeStateContainer = styled.div`

    position: absolute;
    bottom: 2.5%;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    button {
        background: ${props => props.color};
        color: black;
        border: none;
        border-radius: 16px;
        width: 50%;
        padding: 8px 16px;
    }
`;
const ChangeState = ({ isEnabled, isFCD, type }) => {

    const configController = new ConfigController();
    const { ethereum, account } = useConnectedMetaMask();

    const roles = useSelector((state) => state.chain_state);
    console.log("Roles: ", roles);

    const hasRole = roles.roles[account]['config_controller'][isFCD ? 'DEPLOYER_ADMIN_ROLE' : 'MTM_ADMIN_ROLE'];
    const isOnMultisig = roles.multisig.isOwner;

    

    const text = isEnabled ? `Disable ${type}` : `Enable ${type}`;

    return (
        <ChangeStateContainer color={isEnabled ? '#ff4f00' : '#04ed4c'}>
            <button onClick={(e) => {
                e.preventDefault();
                const functionName = isFCD ? 'fcd': 'mtm';
                const flip = isEnabled ? 'disable' : 'enable';
                configController.handleConfigController(ethereum, functionName, flip, hasRole, isOnMultisig)
                    .then((res) => {
                        window.location.reload();
                    })
                    .catch(err => console.log(err));
            }}>{text}</button>
        </ChangeStateContainer>
    )
}

export {
    Section
}
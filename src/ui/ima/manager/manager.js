import styled from "styled-components";
import { IMAButton } from "./manager_buttons";

const ManagerContainer = styled.div`
    position: absolute;
    right: 2.5%;
    top: 7.5%;
    height: 92.5%;
    border: 1px solid grey;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
const Manager = ({ chainId }) => {
    /// SChain Actions
    if (parseInt(chainId) !== 1 || parseInt(chainId) !== 4) {
        return (
            <ManagerContainer>
                <IMAButton label="add_erc20" />
                <IMAButton label="add_erc721" />
                <IMAButton label="add_erc1155" />
                <IMAButton label="auto_deploy_erc20" />
                <IMAButton label="auto_deploy_erc721" />
                <IMAButton label="auto_deploy_erc1155" />
            </ManagerContainer>
        );
    } else {
        /// Mainnet Actions
    return (
        <ManagerContainer>
            <IMAButton label="add_erc20" />
            <IMAButton label="add_erc721" />
            <IMAButton label="add_erc1155" />
        </ManagerContainer>
    );
    }
}

export {
    Manager
}
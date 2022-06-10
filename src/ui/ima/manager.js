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
    if (parseInt(chainId) > 5) {
        return (
            <ManagerContainer>
                <IMAButton label="auto_deploy_erc20" />
                <IMAButton label="auto_deploy_erc721" />
                <IMAButton label="auto_deploy_erc1155" />
            </ManagerContainer>
        );
    }


    /// Mainnet Actions
    return (
        <ManagerContainer>
            {/* <IMAButton label= />
            <IMAButton label= />
            <IMAButton label= /> */}
        </ManagerContainer>
    );
}

export {
    Manager
}
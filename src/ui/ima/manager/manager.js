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
 * @file src/ui/ima/manager/manager.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */

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
    return (
        <ManagerContainer>
            <IMAButton label="add_erc20" />
            <IMAButton label="add_erc721" />
            <IMAButton label="add_erc1155" />
            <IMAButton label="add_erc20_s2s" />
            <IMAButton label="add_erc721_s2s" />
            <IMAButton label="add_erc1155_s2s" />
            <IMAButton label="auto_deployment" />
            {/* <IMAButton label="auto_deploy_erc20" />
            <IMAButton label="auto_deploy_erc721" />
            <IMAButton label="auto_deploy_erc1155" /> */}
        </ManagerContainer>
    );
}

export {
    Manager
}
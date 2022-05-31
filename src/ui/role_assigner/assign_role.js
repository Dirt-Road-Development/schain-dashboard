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
 * @file src/ui/role_assigner/assign_role.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */


import styled from "styled-components";
import { Colors } from "../../config";

const AssignRoleContainer = styled.div`

    position: absolute;
    bottom: 15%;
    width: 85%;
    left: 2.5%;
    background: ${Colors.primary};
    color: white;
    padding: 8px;
    border-radius: 16px;
    text-align: center;
    font-size: 1.5rem;
`;

const AssignRole = ({ assignRole }) => {
    return (
        <AssignRoleContainer onClick={assignRole}>
            Assign Role
        </AssignRoleContainer>
    )
}

export {
    AssignRole
}
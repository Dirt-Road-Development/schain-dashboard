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
 * @file src/ui/ima/actions/s2s/register_ready.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */


import styled from "styled-components";
import { Colors } from "../../../../config";

const RegisterReadyContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;
const Label = styled.h5`
    margin: 16px 16px;
    width: 15%;
    font-size: 0.85rem;
    color: grey;
`;
const Content = styled.p`
    font-size: 1.15rem;
    color: white;
`;

const RegistrationButton = styled.div`
    width: 50%;
    height: 35px;
    background: none;
    border: 1px solid ${Colors.primary};
    color: white;
    border-radius: 16px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &:hover {
        background: white;
        color: ${Colors.primary};
    }
`;

const RegisterReady = ({ state, registerToken }) => {
    return (
        <RegisterReadyContainer>
            <Row>
                <Label>Target Chain</Label>
                <Content>{state.targetName}</Content>
            </Row>
            <Row>
                <Label>Target Token Address</Label>
                <Content>{state.targetAddress}</Content>
            </Row>
            <Row>
                <Label>Origin Chain</Label>
                <Content>{state.originName}</Content>
            </Row>
            <Row>
                <Label>Origin Token Address</Label>
                <Content>{state.originAddress}</Content>
            </Row>
            <RegistrationButton onClick={(e) => {
                e.preventDefault();
                registerToken();
            }}>
                Click to Register Token
            </RegistrationButton>
        </RegisterReadyContainer>
    );
}

export {
    RegisterReady
}
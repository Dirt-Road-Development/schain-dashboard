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
 * @file src/ui/widgets/mylilius_widgets.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */

import styled from "styled-components";
import MyLiliusLogo from '../../config/logos/mylilius_logo.svg';

const MyLiliusWidgetContainer = styled.div`
    width: 15%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    height: 65%;
`;

const Text = styled.h1`
    font-size: 1rem;
    color: white;
`;

const MyLiliusWidget = () => {
    return (
        <MyLiliusWidgetContainer>
            <Logo src={MyLiliusLogo} />
            <span style={{ width: '15px'}} />
            <Text>MyLilius Open Source</Text>
        </MyLiliusWidgetContainer>
    )
}

export {
    MyLiliusWidget
}
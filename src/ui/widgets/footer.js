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
 * @file src/ui/widgets/footer.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */

import styled from "styled-components";
import { Colors } from "../../config";

const FooterContainer = styled.div`
    position: absolute;
    bottom: 2.5%;
    left: 2.5%;
    right: 0;
    display: flex;
    flex-direction: column;
    p {
        color: ${Colors.primary};
        font-size: 0.75rem;
        font-style: italic;
    }
`;
const Footer = () => {
    return (
        <FooterContainer>
            <p>Powered by MyLilius</p>
            <p>&copy; Copyright TheGreatAxios 2022-Present</p>
            <p>&copy; Copyright Lilius, Inc. 2022-Present</p>
            <p>Open Source under AGPL-3.0-or-later</p>
        </FooterContainer>
    )
}

export {
    Footer
}
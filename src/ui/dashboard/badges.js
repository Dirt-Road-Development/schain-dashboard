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
 * @file src/ui/dashboard/badges.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */

import { useSelector } from "react-redux";
import styled from "styled-components";
import { Colors } from "../../config/theme";
import { LoadingIcon } from "../widgets";

const BadgesContainer = styled.div`

    position: absolute;
    bottom: 5%;
    left: 2.5%;
    height: 32%;
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: space-evenly;
    justify-content: space-between;
    border-radius: 0 0 0 16px;
`;

const BadgeContainer = styled.div`
    height: 100%;
    width: 31%;
    border: 1px solid grey;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => {
        return props.borderRadius;
    }};
`;

const radius = {
    0: '0 0 0 16px;',
    1: '0;',
    2: '0;',
}

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


const Badge = ({ index, label, data }) => {
    
    const _renderData = (_data) => {
        if (typeof _data === 'boolean') {
            return _data ? 'Enabled': 'Disabled';
        } else {
            return _data;
        }
    }

    return (
        <BadgeContainer borderRadius={radius[index]}>
            {data === null || data === undefined ? <LoadingIcon /> : <Data enabled={data}>{_renderData(data)}</Data>}
            <Label>{label}</Label>
        </BadgeContainer>
    );
}

const DashboardBadges = () => {

    const state = useSelector((state) => state.chain_state);
    
    return (
        <BadgesContainer>
            <Badge index={0} label='Version' data={state.chainVersion}/>
            <Badge index={1} label='Free Contract Deployment' data={state.freeContractDeploymentEnabled}/>
            <Badge index={2} label='Multi-Transaction Mode' data={state.multiTransactionModeEnabled} />
        </BadgesContainer>
    );
}

export {
    DashboardBadges
}
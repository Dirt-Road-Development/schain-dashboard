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
 * @file src/ui/dashboard/index.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */


import * as Widget from './widgets';
import * as Component from './components';
import { Title } from '../widgets/title';

const DashboardPage = () => {

    return (
        <Widget.DashboardPageContainer>
            <Title title='Dashboard' />
            <Component.ChainInfo />
            <Component.DashboardChart />
            <Component.DashboardBadges />
        </Widget.DashboardPageContainer>
    );
}

export {
    DashboardPage
}
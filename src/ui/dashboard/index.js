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
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import history from './state/history';

import styled from 'styled-components';
import * as Widget from './ui';

import './App.css';
import { Colors } from './config/theme';

const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background: ${Colors.background};
`;

const PageContainer = styled.div`
	position: absolute;
	top: 8vh;
	left: 21vw;
	background: green;
	width: 78vw;
	height: 90vh;
`

function App() {
	return (
		<AppContainer>
			<Router>
				<Widget.Navigation />
				<PageContainer>
					<Routes>
						<Route path='/' element={<Widget.DashboardPage />} />
						<Route path='/chain' element={<Widget.ChainManagementPage />} />
						<Route path='/ima' element={<Widget.ImaPage />} />
						<Route path='/multisig' element={<Widget.MultiSigPage />} />
						<Route path='/assigner' element={<Widget.RoleAssignerPage />} />
						<Route path='/sfuel' element={<Widget.SFuelPage />} />
						<Route path='/support' element={<Widget.SupportPage />} />
					</Routes>
				</PageContainer>
			</Router>
		</AppContainer>
	);
}

export default App;

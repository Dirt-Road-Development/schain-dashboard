import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
 

import styled from 'styled-components';
import * as Widget from './ui';

import './App.css';
import '@rainbow-me/rainbowkit/styles.css'
import { Colors } from './config/theme';
import { GlobalContainer } from './ui';

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
	width: 78vw;
	height: 90vh;
`

const queryClient = new QueryClient()

function App() {

	return (
		// <QueryClientProvider client={queryClient} contextSharing={false}>
		<AppContainer>
			<GlobalContainer widget={
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
				</Router>} />
		</AppContainer>
		// </QueryClientProvider>
	);
}

export default App;

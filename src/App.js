import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import { useMetaMask } from 'metamask-react';

import styled from 'styled-components';
import * as Widget from './ui';

import './App.css';
import { Colors } from './config/theme';
import { GlobalContainer } from './ui';
import { useEffect } from 'react';
import { GlobalController } from './logic/controller';
import Chains from './config/chains';
import { useDispatch } from 'react-redux';
import { setChainState, setRoles } from './state/data.slice';

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
	const dispatch = useDispatch();
	const { status, account, connect, chainId } = useMetaMask();

	let widget;
	if (status === "initializing") widget = <div>Synchronisation with MetaMask ongoing...</div>

    if (status === "unavailable") widget = <div>MetaMask not available :(</div>

    if (status === "notConnected") widget = <button  style={{ background: Colors.primary, color: 'white', padding: '16px', border: 'none', borderRadius: '16px', fontSize: '2rem'}} onClick={connect}>Connect to MetaMask</button>

    if (status === "connecting") widget = <div>Connecting...</div>

	if (status !== 'connected') {
		
		return (
			<AppContainer style={{ display: 'flex', alignItems: 'center', 'justifyContent': 'center' }}>
				{widget}	
			</AppContainer>
		);
	}



	/// If Here Connected
	const chainIdInt = parseInt(chainId);
    let chain = Chains.find((value, index) => {
        
        if (value.id === chainIdInt) {
            return value;
        };
    });
	const controller = new GlobalController(chain.rpcUrls.default);
	controller.initializeConfigController()
		.then((res => {
			console.log("Chain State: ", res);
			dispatch(setChainState(res));
		}))
		.catch(err => console.log(err));

	controller.initializeRoles(account)
		.then((res => {
			console.log(res);
			dispatch(setRoles({
				address: account,
				roles: res
			}));
		}))
		.catch(err => {
			console.log(err);
		})
	
	return (
		<QueryClientProvider client={queryClient} contextSharing={true}>
		<AppContainer>
			{/* <GlobalContainer widget={ */}
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
				{/* }  */}
				{/* /> */}
		</AppContainer>
		</QueryClientProvider>
	);
}

export default App;

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
 * @file src/App.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import { useMetaMask } from 'metamask-react';
import styled from 'styled-components';
import * as Widget from './ui';
import './App.css';
import './Loader.css';
import { Colors } from './config/theme';
import { GlobalController } from './logic/controller';
import Addresses from './config/addresses';
import Chains from './config/chains';
import { useDispatch } from 'react-redux';
import { setChainState, setMultisig, setRoles } from './state/data.slice';
import { useEffect, useState } from 'react';
import { LoadingIcon } from './ui';

const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background: ${Colors.background};
`;


const LoadingContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
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

	const [isLoading, setIsLoading] = useState(true);

	let widget;
	if (status === "initializing") widget = <div>Synchronization with MetaMask ongoing...</div>

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
    let chain = Chains.find((value) => {
        if (value.id === chainIdInt) {
            return value;
        }
		return null;
    });

	if (!chain) {
		return <AppContainer>
			<Widget.WrongNetwork />
		</AppContainer>
	}
	
	const controller = new GlobalController(chain.rpcUrls.default);
	console.log("ACCOUNT: ", account);
	Promise.all([
		controller.initializeConfigController(),
		controller.initializeRoles(account),
		controller.initializeRoles(Addresses.multisig_wallet),
		controller.initializeMultiSig(account)
	]).then(([a, b, c, d]) => {
		dispatch(setChainState(a));
		dispatch(setRoles({
			address: account,
			roles: b
		}));
		dispatch(setRoles({
			address: Addresses.multisig_wallet,
			roles: c
		}));
		console.log(a, b, c);
		dispatch(setMultisig(d));
		setIsLoading(false);
	})
	.catch((err) => {
		console.log(err);
		throw new Error(err);
	})
	
	if (isLoading) return <AppContainer><LoadingContainer><LoadingIcon primary={true} /><h1>Loading SKALE Chain UI</h1></LoadingContainer></AppContainer>

	return (
		<QueryClientProvider client={queryClient} contextSharing={true}>
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
		</QueryClientProvider>
	);
}

export default App;

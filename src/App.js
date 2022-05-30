import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';

const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;

function App() {
	return (
		<AppContainer>
			<Router>
				<Routes>
					<Route path='/' element={<div>Testing</div>} />
				</Routes>
			</Router>
		</AppContainer>
	);
}

export default App;

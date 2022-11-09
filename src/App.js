import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import './App.css';
// import NavigationBar from './components/NavigationBar';
import PageLogin from './components/PageLogin';
import PageGetTop from './components/PageGetTop';


function App() {
	return (
		<Router>
			{/* <NavigationBar/> */}

			<Routes>
				<Route path='/profile' element={<PageGetTop/>} />
				<Route path='/' element={<PageLogin/>} />
			</Routes>
		</Router>
		
	);
}

export default App;

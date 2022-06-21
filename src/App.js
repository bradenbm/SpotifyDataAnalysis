import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import './App.css';
// import NavigationBar from './components/NavigationBar';
import Login from './components/Login';
import DataPage from './components/DataPage';


function App() {
	return (
		<Router>
			{/* <NavigationBar/> */}

			<Routes>
				<Route path='/profile' element={<DataPage/>} />
				<Route path='/' element={<Login/>} />
			</Routes>
		</Router>
		
	);
}

export default App;

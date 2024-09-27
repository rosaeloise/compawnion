import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Route,
	Routes
} from 'react-router-dom';

import './font-faces/font-face.css';
import './css/global.css';

import Components from './pages/Components';
import Home from './pages/Home';
import Adopt from './pages/Adopt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/components' element={<Components />} />
				<Route path='/home' element={<Home />} />
				<Route path='/' element={<Home />} />
				<Route path='/adopt' element={<Adopt />} />
				
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
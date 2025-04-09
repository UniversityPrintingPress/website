import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/index.css';

const App = () => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			
			<main className='flex-grow'>
				<Routes>
					<Route path='/' element={<Home />} />
					{/* Add more pages here later */}
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;

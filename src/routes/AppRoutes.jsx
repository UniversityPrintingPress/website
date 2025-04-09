import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Product';
import Quote from '../pages/Quote';
// import all your pages...

const AppRoutes = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/products' element={<Products />} />
		<Route path='/quote' element={<Quote />} />
		{/* add more routes here */}
	</Routes>
);

export default AppRoutes;

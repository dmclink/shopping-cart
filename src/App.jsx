import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Home.jsx';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {
	const [shoppingCart, setShoppingCart] = useState({});
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((resp) => resp.json())
			.then((data) => {
				setProducts(data);
			});
	}, []);

	console.log(shoppingCart);

	function addToCart(id) {
		const newCart = { ...shoppingCart };
		const count = newCart[id];
		newCart[id] = count ? count + 1 : 1;

		setShoppingCart(newCart);
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop products={products} addToCart={addToCart} />} />
				<Route path="/cart" element={<Cart products={products} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

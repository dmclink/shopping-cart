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

	function addToCart(data) {
		const id = data.id;
		setShoppingCart((prevData) => {
			const newCart = { ...shoppingCart };
			const count = newCart[id];
			newCart[id] = count ? count + 1 : 1;
			return newCart;
		});
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop products={products} addToCart={addToCart} />} />
				<Route
					products={products}
					shoppingCart={shoppingCart}
					setShoppingCart={setShoppingCart}
					path="/cart"
					element={<Cart />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

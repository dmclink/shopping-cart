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

	function addToCart(id) {
		const newCart = { ...shoppingCart };
		const count = newCart[id];
		newCart[id] = count ? count + 1 : 1;

		setShoppingCart(newCart);
	}

	function removeFromCart(id) {
		const newCart = { ...shoppingCart };
		delete newCart[id];

		setShoppingCart(newCart);
	}

	function editQuantity(id, quantity) {
		const newCart = { ...shoppingCart };
		newCart[id] = quantity;

		setShoppingCart(newCart);
	}

	function wipeCart() {
		setShoppingCart({});
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop products={products} addToCart={addToCart} />} />
				<Route
					path="/cart"
					element={
						<Cart
							products={products}
							shoppingCart={shoppingCart}
							removeFromCart={removeFromCart}
							editQuantity={editQuantity}
							wipeCart={wipeCart}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

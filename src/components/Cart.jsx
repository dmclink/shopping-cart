import Nav from './Nav.jsx';
import NumberInput from './NumberInput.jsx';

function Cart({ products, shoppingCart, removeFromCart, editQuantity, wipeCart }) {
	const total = Object.entries(shoppingCart).reduce((acc, curr) => {
		const id = curr[0];
		const qty = Number(curr[1]);
		const price = Number(products[id].price);
		return acc + qty * price;
	}, 0);

	function confirmCheckout() {
		const isConfirm = window.confirm(
			'Are you sure you want to checkout? (this is a fake shop, all it does is wipe the cart)',
		);

		if (isConfirm) {
			wipeCart();
		}
	}

	const shoppingCartIsEmpty = Object.entries(shoppingCart).length === 0;

	return (
		<main>
			<Nav />
			<div className="main-container">
				{shoppingCartIsEmpty ? <p>No items in cart yet!</p> : null}
				<div className="shopping-cart-list">
					{Object.entries(shoppingCart).map(([id, qty]) => (
						<>
							<NumberInput
								key={id}
								label={products[id].title}
								className="number-input"
								id={id}
								onChange={editQuantity}
								defaultValue={qty}
								removeFromCart={removeFromCart}
							/>
						</>
					))}
				</div>
				<hr className="price-divider" />
				<div>
					<p>
						Total Cost: <span className="total-price">${total}</span>
					</p>
					<button onClick={confirmCheckout}>Continue to checkout</button>
				</div>
			</div>
		</main>
	);
}

export default Cart;

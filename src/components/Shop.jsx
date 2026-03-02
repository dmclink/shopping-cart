import Nav from './Nav.jsx';
import ProductCard from './ProductCard.jsx';

function Shop({ products, addToCart }) {
	return (
		<main>
			<Nav />
			<div className="main-container">
				<h2>Shop</h2>

				<div className="product-grid">
					{products.map((product) => (
						<ProductCard key={product.id} data={product} addToCart={addToCart} />
					))}
				</div>
			</div>
		</main>
	);
}

export default Shop;

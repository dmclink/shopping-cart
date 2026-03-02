import '../styles/ProductCard.css';
function ProductCard({ data, addToCart }) {
	return (
		<div className="product-card">
			<header>
				<h3>{data.title}</h3>
			</header>
			<article>
				<img src={data.image} alt={data.title} />
				<p className="pricetag">${Number(data.price).toFixed(2)}</p>
				<div className="product-details">
					<p lang="en" className="product-description">
						{data.description}
					</p>
					<p>
						{data.rating.rate} stars out of {data.rating.count} ratings
					</p>
					<button className="add-to-cart-btn" type="button" onClick={() => addToCart(data.id)}>
						Add to cart
					</button>
				</div>
			</article>
		</div>
	);
}

export default ProductCard;

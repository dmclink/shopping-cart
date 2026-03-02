import Nav from './Nav';

function Home() {
	return (
		<main>
			<Nav />
			<div>
				<h1>Welcome to my fake shop!</h1>
				<p className="sub-title">(give me all your money)</p>
				<p>This isn't a real shop but it does have real fake items to peruse, with real fake prices!</p>
				<p>
					Head on over to the Shop page to scroll through (un)available items brought to you by FakeStoreAPI.
					Add anything you want to your cart and check the items you're about to not really buy on the Cart
					page. There you can edit quantities or remove items as you wish. Have fun!
				</p>

				<p>Project built with React and React Router</p>
			</div>
		</main>
	);
}

export default Home;

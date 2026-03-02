import { NavLink } from 'react-router';

function Nav() {
	return (
		<nav className="nav">
			<NavLink className="nav-link" to="/">
				Home
			</NavLink>
			<NavLink className="nav-link" to="/shop">
				Shop
			</NavLink>
			<NavLink className="nav-link" to="/cart">
				Cart
			</NavLink>
		</nav>
	);
}

export default Nav;

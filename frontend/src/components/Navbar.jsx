import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header>
			<nav className="navbar">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;

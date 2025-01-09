import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header>

			{/* TODO: Make three sections, one for the socails, second for the website links, and third for the space between */}
			<nav className="navbar">
				<ul>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/shows">Shows</Link>
					</li>
					<li>
						<Link to="/shop">Shop</Link>
					</li>
					{/* <li>
						<Link to="/about">About</Link>
					</li> */}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;

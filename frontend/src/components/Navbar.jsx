import React from "react";
import { Link } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaItunes } from "react-icons/fa";

const Navbar = () => {
	return (
		<header className="">
			<div className="container">
				<a href=""><FaSpotify size={30}/></a>
				<a href=""><FaSoundcloud size={30}/></a>
				<a href=""><FaYoutube size={30}/></a>
				<a href=""><FaItunes size={30}/></a>
			</div>
			{/* TODO: Make three sections, one for the socails, second for the website links, and third for the space between */}
			<nav>
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

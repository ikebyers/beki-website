import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<p>
							&copy; {new Date().getFullYear()} beki
							<br />
							All rights reserved.
						</p>
					</div>
					<div className="col-md-6 text-right">
						<ul className="list-inline">
							<li>
								<a href="#">Terms of Service</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

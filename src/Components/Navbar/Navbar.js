import React from "react";
import "./Navbar.css";

const Navbar = props => (
	<div className="navbar">

		<ul>
			<li className = "brand"> <a href="#">Memory Game</a></li>
			<li className = "status">Click an image to begin!</li>
			<li className = "score">Score: 0 | Top Score: 0</li>
		</ul>
	</div>
)

export default Navbar;
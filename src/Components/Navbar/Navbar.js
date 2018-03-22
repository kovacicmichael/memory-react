import React from "react";
import "./Navbar.css";
import Main from "./Main";

const Navbar = props => (
	<div className="navbar">

		<ul>
			<li className = "brand"> <a href="#">Memory Game</a></li>
			<li className = "status">Click an image to begin!</li>
			<li className = "score">Score: {props.children} | Top Score: 0</li>
		</ul>
	</div>
)

export default Navbar;
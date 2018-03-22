import React from "react";
import "./Navbar.css";
// import Main from "./Main";

const Navbar = props => (
	<div className="navbar">

		<ul>
			<li className = "brand"> <a href="#">Memory Game</a></li>
			<li className = "status">{props.guessResult}</li>
			<li className = "score">Score: {props.score} | Top Score: {props.topScore}</li>
		</ul>
	</div>
)

export default Navbar;
import React, { Component } from 'react';
import "./Main.css";
import Navbar from "./Components/Navbar";
import images from "../../images.json";




let guessedArray = [];


class Main extends Component {

state = {
    images: images,
    score: 0,
    guessResult: "",
    guesses: []
  }

randomizeImages = images => {
	var currentIndex = images.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = images[currentIndex];
	    images[currentIndex] = images[randomIndex];
	    images[randomIndex] = temporaryValue;
	  }

	  return images;
}

//guessedArray = ["ds"]

handleImageClick = event => {
	//event.preventDefault();
	console.log(guessedArray)

	if(guessedArray.includes(event.target.id)){

		alert("wrong guess")
		guessedArray = [];
		this.setState({
			score: 1
		})

	}else{
		guessedArray.push(event.target.id)
		this.setState({
			score: this.state.score + 1
		})
		console.log(this.state.score)
	}

	
	this.setState({
		images: this.randomizeImages(images)
	})
	

}

renderImages = () => {
	const allImages = images;
	
		{allImages.map(image => (
			
		    	<div id = {image.id} role="img" aria-label="click item" onClick={this.handleImageClick} className="click-item" key={image.id} style={{backgroundImage: "url(" + image.image + ")"}}></div>

		))}

}



render() {
	
	return(
		<wrapper>
			<Navbar>
				{this}.state.score
			</Navbar>
			<main className = "container">
				
				{this.state.images.map(image => (
				
			    	<div id = {image.id} role="img" aria-label="click item" onClick={this.handleImageClick} className="shake click-item" key={image.id} style={{backgroundImage: "url(" + image.image + ")"}}></div>

				))}
			
				
			</main>
		</wrapper>
	)
}

}

export default Main;
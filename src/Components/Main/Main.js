import React, { Component } from 'react';
import "./Main.css";
import images from "../../images.json";

class Main extends Component {

state = {
    images: images
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

handleImageClick = event => {


	console.log("here")
	console.log(event.target.id)
	console.log(this.state)
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
		<main className = "container">
			
			{this.state.images.map(image => (
			
		    	<div id = {image.id} role="img" aria-label="click item" onClick={this.handleImageClick} className="shake click-item" key={image.id} style={{backgroundImage: "url(" + image.image + ")"}}></div>

			))}
		
			
		</main>
	)
}

}

export default Main;
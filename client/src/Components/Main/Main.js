import React, { Component } from 'react';
import "./Main.css";
import Wrapper from "../Wrapper";
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";
import images from "../../images.json";


let guessedArray = [];


class Main extends Component {

state = {
    images: images,
    score: 0,
    topScore: 0,
    guessResult: "Click an Image to Begin",
    guesses: []
  }

randomizeImages = images => {

	  //clone the options and shuffle them up
    var fullOptions = [...images]
    var n = fullOptions.length;
    var tempArr = [];
    for ( var i = 0; i < n-1; i++ ) {
      // The following line removes one random element from arr
      // and pushes it onto tempArr
      tempArr.push(fullOptions.splice(Math.floor(Math.random()*fullOptions.length),1)[0]);
    }
    // Push the remaining item onto tempArr
    tempArr.push(fullOptions[0]);
    //set fullOptions to equal the new shuffled tempArr
    fullOptions=tempArr; 

    return fullOptions;

}

handleImageClick = event => {
	//event.preventDefault();
	console.log(guessedArray)

	if(guessedArray.includes(event.target.id)){

		if(this.state.score > this.state.topScore){
			this.setState({
				topScore: this.state.score
			})
		}
		guessedArray = [];
		this.setState({
			guessResult: "Incorrect!  Try Again.",
			score: 0
		})

	}else{
		guessedArray.push(event.target.id)
		this.setState({
			score: this.state.score + 1,
			guessResult: "Correct!  You are on a role!"
		})
		console.log(this.state.score)
	}

	
	this.setState({
		images: this.randomizeImages(images)
	})
	

}

renderImages = () => {
	
	{this.state.images.map(image => (
				
		<div id = {image.id} role="img" aria-label="click item" onClick={this.handleImageClick} className="shake click-item" key={image.id} style={{backgroundImage: "url(" + image.image + ")"}}></div>

	))}

}

render() {
	
	return(
	
	<Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore} guessResult={this.state.guessResult}/>
        <Header/>
        <main className = "container">
		

		{this.renderImages()}
		{this.state.images.map(image => (
				
			<div id = {image.id} role="img" aria-label="click item" onClick={this.handleImageClick} className="shake click-item" key={image.id} style={{backgroundImage: "url(" + image.image + ")"}}></div>

		))}
		</main>
          
        <Footer/>
      </Wrapper>
	)
}

}

export default Main;
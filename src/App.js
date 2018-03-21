import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <nav class="navbar">
        
            <ul>
              <li class = "brand"> <a href="#">Memory Game</a></li>
              <li class = "status">Click an image to begin!</li>
              <li class = "score">Score: 0 | Top Score: 0</li>
            </ul>
         
      </nav>

      <header class = "header">
        <h1>Memory Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </header>
      <main class = "container">


      </main>

      <footer class = "footer">
          <div class = "bottom">
          Clicky Game! 
          </div>
      </footer>
    </div>
    );
  }
}

export default App;

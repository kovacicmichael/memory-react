import React, { Component } from 'react';
import logo from './logo.svg';
import Wrapper from "./Components/Wrapper";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header"
import Main from "./Components/Main";
import Footer from "./Components/Footer"

import './App.css';

class App extends Component {
  render() {
    return (
    <Wrapper>
        <Navbar />
        <Header/>
        <Main />
          
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;

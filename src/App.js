import React, { Component } from "react";
import "./App.css";
import linkedlogo from "./linkedin.png";
import { Image } from "react-bootstrap";

const NavMenu = () => {
  return (
    <div className="navMenu">
      <div className="menuitemBox">
        <a className="menuItem">Home</a>
        <a className="menuItem">Education</a>
        <a className="menuItem">Experience</a>
        <a className="menuItem">Portfolio</a>
      </div>
      <a href="https://www.linkedin.com/in/brandon-palomino/">
        <Image src={linkedlogo} width="40px" />
      </a>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Brandon Palomino</h1>
          <NavMenu />
        </header>
        <div className="homeStyle">
          <div className="aboutSection">
            <h3 align="left">About</h3>
            <p align="left">
              <br />My Story
              <br />
              <br />
              My family made a choice to migrate from Peru to California in
              order to change their world and in consequence my world as well.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

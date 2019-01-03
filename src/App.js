import React, { Component } from "react";
import "./styles/App.css";

import Home from "./pages/Home";
import Software from "./pages/Software";
import Electronics from "./pages/Electronics";
import Contact from "./pages/Contact";

import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/software" component={Software} />
        <Route exact path="/electronics" component={Electronics} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    );
  }
}

export default App;

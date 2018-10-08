import React, { Component } from "react";
import Home from "./pages/Home";
import Software from "./pages/Software";
import { Switch, Route } from "react-router-dom";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/software" component={Software} />
      </Switch>
    );
  }
}

export default App;

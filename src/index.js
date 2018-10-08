import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import { HashRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();

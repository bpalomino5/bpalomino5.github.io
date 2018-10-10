import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();

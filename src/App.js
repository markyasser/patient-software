import React from "react";
import Routes from "./routes";
import "./assets/styles/App.css";
import NavBar from "./sections/navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <div className="App">
    <Router>
      <NavBar />
      <Routes />
    </Router>
  </div>
);

export default App;

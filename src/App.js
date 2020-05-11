import React from "react";

import "./App.css";
import { Header, Content, Footer } from "./components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

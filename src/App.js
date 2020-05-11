import React from "react";

import "./App.css";
import { Header, Content, Footer } from "./components";
import { Home, About, Contact, Shop } from "./components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

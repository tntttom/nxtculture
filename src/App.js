import React from "react";

import "./App.css";
import { Header, Footer } from "./components";
import { Home, About, Contact, Shop, ShopList } from "./components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Axios from "axios";

function App() {
  // Axios({
  //   method: "GET",
  //   url: "http://localhost:5000/",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then((res) => {
  //   console.log(res.data.message);
  // });

  Axios.get("http://localhost:5000/").then((res) => {
    console.log(res.data.message);
  });

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop/list" component={ShopList} />
        </Switch>

        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

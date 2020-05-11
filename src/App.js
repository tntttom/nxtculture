import React from "react";

import "./App.css";
import { Header, Content, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="Content">
        <p className="textColor">F/W 2020</p>
        <Content />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

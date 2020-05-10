import React from "react";

import "./App.css";
import { Header, Content } from "./components";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="Content">
        <p className="textColor">This is where the cards will go</p>
      </div>
    </div>
  );
}

export default App;

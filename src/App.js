import React from "react";
import HeaderNav from "./components/HeaderNav";
import Home from "./components/Home";
// import Videos from "./components/Videos";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <HeaderNav />
      <Home />
    </div>
  );
};

export default App;

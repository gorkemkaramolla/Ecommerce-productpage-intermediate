import React from "react";
import "./App.scss";
import Content from "./components/content/Content";
import Attribution from "./components/attribution/Attribution";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Content />
      <Attribution />
    </div>
  );
}

export default App;

import React from "react";
import "./App.scss";
import Content from "./components/content/Content";
import Attribution from "./components/attribution/Attribution";
import Navbar from "./components/navbar/Navbar";
import { CartContextProvider } from "./components/contexts/CartContext";
function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Navbar />

        <Content />
        <Attribution />
      </div>
    </CartContextProvider>
  );
}

export default App;

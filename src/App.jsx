import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App h-screen">
      <p className="font-bold text-4xl text-purp">Complete your purchase</p>
      <Nav />
    </div>
  );
}

export default App;

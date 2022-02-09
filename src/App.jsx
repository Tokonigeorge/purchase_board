import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import PersonalInfo from "./components/personalInfo/PersonalInfo";

function App() {
  return (
    <div className="App h-screen w-screen">
      <div className="w-3/4 mx-auto lg:w-1/2 pt-24">
        <p className="font-bold text-2xl text-purp">Complete your purchase</p>
        <Nav />
        <PersonalInfo />
      </div>
    </div>
  );
}

export default App;

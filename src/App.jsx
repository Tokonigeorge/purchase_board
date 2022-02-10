import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import PersonalInfo from "./components/personalInfo/PersonalInfo";

function App() {
  const [next, setNext] = useState(null);
  console.log(next);
  const handleClick = () => {
    setNext("yyayy");
  };
  return (
    <div className="App min-h-screen w-screen">
      <div className="w-3/4 mx-auto lg:w-1/2 pt-24">
        <p className="font-bold text-2xl text-purp">Complete your purchase</p>
        <Nav />
        <PersonalInfo handle={handleClick} />
      </div>
    </div>
  );
}

export default App;

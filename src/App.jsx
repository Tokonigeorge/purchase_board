import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import PersonalInfo from "./components/personalInfo/PersonalInfo";
import BillingInfo from "./components/billingInfo/BillingInfo";
import Checkout from "./components/billingInfo/Checkout";

function App() {
  const [next, setNext] = useState(null);
  const checkoutData = [
    {
      item: "Data science and usability",
      value: "50,000.00",
    },
    {
      item: "Shipping",
      value: "0.00",
    },
  ];
  console.log(next);
  const handleClick = () => {
    setNext("yyayy");
  };
  return (
    <div className="App min-h-screen w-screen">
      <div className="w-3/4 mx-auto lg:w-1/2 pt-24">
        <p className="font-bold text-2xl text-purp">Complete your purchase</p>
        <Nav />
        {/* <PersonalInfo handle={handleClick} /> */}
        {/* <BillingInfo /> */}
        <Checkout checkoutData={checkoutData} />
      </div>
    </div>
  );
}

export default App;

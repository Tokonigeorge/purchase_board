import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import PersonalInfo from "./components/personalInfo/PersonalInfo";
import BillingInfo from "./components/billingInfo/BillingInfo";
import Checkout from "./components/billingInfo/Checkout";
import PaymentConfirmation from "./components/paymentConfirm/PaymentConfirmation";

function App() {
  const [navEl, setNavEl] = useState("0");
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
  console.log(navEl);
  const handleClick = (e, el) => {
    setNavEl(el);
  };
  return (
    <div className="App min-h-screen w-screen">
      <div className="w-3/5 mx-auto lg:w-1/2 pt-24">
        <p className="font-bold text-2xl text-purp">Complete your purchase</p>
        <Nav navEl={navEl} />
        <PersonalInfo handle={handleClick} />
        {/* <BillingInfo /> */}
        {/* <Checkout checkoutData={checkoutData} /> */}
        {/* <PaymentConfirmation /> */}
      </div>
    </div>
  );
}

export default App;

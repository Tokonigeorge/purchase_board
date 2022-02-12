import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import PersonalInfo from "./components/personalInfo/PersonalInfo";
import BillingInfo from "./components/billingInfo/BillingInfo";
import Checkout from "./components/billingInfo/Checkout";
import PaymentConfirmation from "./components/paymentConfirm/PaymentConfirmation";
import CancelPayment from "./components/CancelPayment";
import { checkoutData } from "./utils/checkoutData";

function App() {
  const [navEl, setNavEl] = useState(1);
  const [cancel, setCancel] = useState(false);

  console.log(navEl);
  const handleNav = (e) => {
    e.preventDefault();
    setNavEl((prev) => prev + 1);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setCancel(true);
  };

  return (
    <div className="App min-h-screen w-screen">
      {cancel ? (
        <CancelPayment />
      ) : (
        <>
          {navEl == 4 && (
            <div className="h-screen w-full md:w-3/5 lg:w-2/5 md:mx-auto  flex justify-center items-center">
              <PaymentConfirmation />
            </div>
          )}
          <div className=" w-full px-6 pt-12 md:w-3/5 md:px-6 mx-auto lg:w-1/2 md:pt-24">
            {navEl < 4 && (
              <>
                <p className="font-bold text-2xl text-purp">
                  Complete your purchase
                </p>
                <Nav navEl={navEl} />
              </>
            )}
            {navEl == 1 && (
              <PersonalInfo handleNav={handleNav} handleCancel={handleCancel} />
            )}
            {navEl == 2 && (
              <BillingInfo handleNav={handleNav} handleCancel={handleCancel} />
            )}
            {navEl == 3 && (
              <Checkout
                checkoutData={checkoutData}
                handleNav={handleNav}
                handleCancel={handleCancel}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

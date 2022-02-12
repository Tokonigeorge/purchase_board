import PaymentButton from "../PaymentButton";

const Checkout = ({ checkoutData, handleNav, handleCancel }) => {
  return (
    <>
      <div className="w-full bg-white rounded-md my-12 pb-8 shadow-lg">
        <div className="flex justify-between items-center px-12 py-3.5 bg-blueMain rounded-t-md text-white text-sm font-semi-bold">
          <p>Item Name</p>
          <p>&#8358; Price</p>
        </div>
        <div className="mt-6 text-purp text-sm font-light pb-6 mx-6 px-6 border-b border-lightBlue">
          {checkoutData?.map((i, indx) => {
            return (
              <div
                className={`flex justify-between items-center pt-7 `}
                key={i.item + indx}
              >
                <p>{i.item}</p>
                <p
                  className={`${
                    i.item === "Shipping" && "text-black font-bold"
                  }`}
                >
                  {i.value}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between px-3 mx-9 py-2 ring-1 mt-8 rounded-sm ring-lightBlue items-center text-sm">
          <p className="text-lightBlue">Total</p>
          <p className="font-bold text-purp">
            {checkoutData
              .map((i) => Number(i.value.replace(/,/g, "")))
              .reduce((a, b) => a + b, 0)
              .toFixed(2)}
          </p>
        </div>
      </div>
      <PaymentButton
        handleNav={handleNav}
        handleCancel={handleCancel}
        text="Pay"
      />
    </>
  );
};

export default Checkout;

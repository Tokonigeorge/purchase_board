const PaymentButton = ({ handle }) => {
  return (
    <div className="flex items-center gap-x-6 pb-24 mt-8">
      <Button
        style="text-white bg-gradient-to-r from-btnGradOne to-btnGradTwo"
        text="Next"
        handle={handle}
      />
      <Button style="text-purp" text="Cancel Payment" />
    </div>
  );
};

const Button = ({ style, text, handle }) => {
  return (
    <button
      className={`${style} font-bold py-3 rounded-md px-16`}
      onClick={() => handle()}
    >
      {text}
    </button>
  );
};

export default PaymentButton;

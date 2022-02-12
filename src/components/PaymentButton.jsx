const PaymentButton = ({ handleNav, handleCancel }) => {
  return (
    <div className="flex items-center gap-x-6 pb-24 mt-8">
      <Button
        style="text-white bg-gradient-to-r from-btnGradOne to-btnGradTwo py-2.5 rounded-lg px-16"
        text="Next"
        click={handleNav}
      />
      <Button
        style="text-purp pl-5"
        text="Cancel Payment"
        click={handleCancel}
      />
    </div>
  );
};

const Button = ({ style, text, click }) => {
  return (
    <button className={`${style} font-bold text-sm `} onClick={(e) => click(e)}>
      {text}
    </button>
  );
};

export default PaymentButton;

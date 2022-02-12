import React from "react";
const PaymentButton = ({ handleNav, handleCancel, text }) => {
  return (
    <div className="flex items-center gap-x-6 pb-24 mt-8">
      <Button
        style="text-white bg-gradient-to-r from-btnGradOne to-btnGradTwo py-2.5 rounded-lg px-16"
        text={text || "Next"}
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
    <button
      data-testid="test-btn"
      className={`${style} font-bold text-sm `}
      onClick={(e) => click(e)}
    >
      {text}
    </button>
  );
};

export default PaymentButton;

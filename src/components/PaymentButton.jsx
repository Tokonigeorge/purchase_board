const PaymentButton = () => {
  return (
    <div className="flex items-center gap-x-6">
      <button className="text-white font-bold bg-blue-300 py-3 rounded-md px-16">
        Next
      </button>
      <button className="text-purp font-bold py-3 rounded-md px-16">
        Cancel Payment
      </button>
    </div>
  );
};

export default PaymentButton;

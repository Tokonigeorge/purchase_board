import React from "react";

const PaymentConfirmation = () => {
  return (
    <div className="bg-white w-full rounded-md mx-8 md:mx-0 py-8 px-12 md:py-16 md:px-24">
      <div className="shadow-2xl rounded-full w-12 h-12 flex justify-center items-center  m-auto">
        <span className="text-center">
          <CheckSvg />
        </span>
      </div>
      <p className="text-purp font-bold text-3xl pt-2">Purchase Completed</p>
      <p className="text-gray2 font-light text-sm pt-5 pr-12 mb-5">
        Please check your email for details concerning this transaction
      </p>
      <a href="#" className="text-btnGradOne underline text-sm">
        Return home
      </a>
    </div>
  );
};

const CheckSvg = () => {
  return (
    <svg
      width="30"
      height="20"
      viewBox="0 0 48 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.5041 6.7984L19.3601 33.7552C17.9681 35.1376 15.7641 35.1376 14.3721 33.7552L1.49615 20.968C0.104148 19.5856 0.104148 17.3968 1.49615 16.0144C2.88815 14.632 5.09215 14.632 6.48415 16.0144L16.8661 26.3248L41.5161 1.8448C42.9081 0.462399 45.1121 0.462399 46.5041 1.8448C47.8961 3.2272 47.8961 5.416 46.5041 6.7984Z"
        fill="#6FCF97"
      />
    </svg>
  );
};

export default PaymentConfirmation;

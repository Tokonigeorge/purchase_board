import { useState } from "react";

const EmailInput = ({ placeholder }) => {
  const [email, setEmail] = useState("");
  return (
    <>
      <label htmlFor="email-Address" className="font-bold">
        Email Address <span className="text-midRed">*</span>
      </label>
      <p className="text-sm text-lightBlue pb-1">
        The purchase reciept will be sent to this address
      </p>
      <input
        className="mt-2 w-full ring-1 rounded-md py-2 px-3 outline-none ring-purp mb-8"
        id="email-Address"
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
};

export default EmailInput;

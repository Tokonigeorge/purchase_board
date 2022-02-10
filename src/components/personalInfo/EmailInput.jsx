import { useState } from "react";
import { Label, textInputStyle } from "../TextInput";

const EmailInput = ({ placeholder }) => {
  const [email, setEmail] = useState("");
  return (
    <>
      <Label label={"Email Address"} isNecessary={true} />

      <p className="text-sm text-lightBlue pb-1">
        The purchase reciept will be sent to this address
      </p>
      <input
        className={textInputStyle}
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

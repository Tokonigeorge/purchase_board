import { useState } from "react";
import TextInput, { Label, textInputStyle } from "../TextInput";

const BillingInfo = () => {
  const [cardDetails, setCardDetails] = useState("");
  const [options, setOptions] = useState("Visa");

  const cards = ["Visa", "MasterCard", "Verve"];

  const validateDetails = (e) => {
    // const reg = /^4[0-9]{12}(?:[0-9]{3})?$/;
    //onsubmit validate if it's a correct visa or mastercard
    const reg = /^[0-9\b]+$/;
    if (e.target.value === "" || reg.test(e.target.value)) {
      setCardDetails(e.target.value);
    }
  };

  return (
    <div className="mt-10">
      <form>
        <TextInput
          label="Name on Card"
          isNecessary={true}
          placeholder="Opera Linus Ahmad"
        />
        <Label label={"Card Type"} isNecessary={true} />
        <select id="Card Type" className={textInputStyle}>
          {cards.map((i, indx) => (
            <option
              value={i}
              label={i}
              key={`${i + indx}`}
              className="py-2"
            ></option>
          ))}
        </select>
        <Label label={"Card Details"} isNecessary={true} />
        <input
          id="Card Details"
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          className={textInputStyle}
          value={cardDetails}
          onChange={(e) => validateDetails(e)}
        />
      </form>
    </div>
  );
};

export default BillingInfo;

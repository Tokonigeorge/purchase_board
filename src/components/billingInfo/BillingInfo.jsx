import { useState } from "react";
import PaymentButton from "../PaymentButton";
import TextInput, { Label, textInputStyle } from "../TextInput";

const BillingInfo = ({ handleNav, handleCancel }) => {
  const [cardDetails, setCardDetails] = useState("");
  const [options, setOptions] = useState("Visa");

  const cards = ["Visa", "MasterCard", "Verve"];

  const validateDetails = (e) => {
    setCardDetails(e.target.value);
  };

  return (
    <div className="mt-10">
      <form>
        <TextInput
          label="Name on Card"
          isNecessary={true}
          placeholder="Opara Linus Ahmad"
        />
        <Label label={"Card Type"} isNecessary={true} />
        <select
          id="Card Type"
          className={textInputStyle}
          defaultValue={options}
          onChange={(e) => setOptions(e.target.value)}
        >
          {cards.map((i, indx) => (
            <option
              value={i}
              label={i}
              key={`${i + indx}`}
              className="py-2"
            ></option>
          ))}
        </select>
        <div className="flex-col flex sm:flex-row items-stretch w-full justify-between gap-x-12">
          <div className="w-full">
            <Label label={"Card Details"} isNecessary={true} />
            <input
              id="Card Details"
              type="text"
              inputMode="numeric"
              className={textInputStyle}
              value={cardDetails}
              maxLength={20}
              autoComplete="cc-number"
              onChange={(e) => validateDetails(e)}
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-row items-stretch gap-x-12">
            <div className="w-20">
              <Label label={"Expiry Date"} isNecessary={true} />
              <input
                id="Expiry Date"
                type={"text"}
                maxLength={5}
                placeholder="04/23"
                className={textInputStyle}
              />
            </div>
            <div className="w-12">
              <Label label={"CVV"} isNecessary={true} />
              <input
                id="CVV"
                type={"text"}
                maxLength={3}
                placeholder="923"
                className={`${textInputStyle} text-black `}
              />
            </div>
          </div>
        </div>
        <PaymentButton handleNav={handleNav} handleCancel={handleCancel} />
      </form>
    </div>
  );
};

export default BillingInfo;

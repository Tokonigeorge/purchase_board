import { useState } from "react";

const TextInput = ({ label, placeholder, isNecessary }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <Label label={label} isNecessary={isNecessary} />
      <input
        className={textInputStyle}
        type="text"
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export const textInputStyle = "mt-2 w-full ring-1 rounded-md py-2 px-3 outline-none ring-purp mb-8 text-textgray"

export const Label = ({ label, isNecessary }) => {
  return (
    <>
      {isNecessary ? (
        <label htmlFor={label} className="font-bold">
          {label} <span className="text-midRed">*</span>
        </label>
      ) : (
        <label htmlFor={label} className="font-bold">
          {label}
        </label>
      )}
      <br />
    </>
  );
};

export default TextInput;

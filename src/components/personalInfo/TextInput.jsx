import { useState } from "react";

const TextInput = ({ label, placeholder }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <label htmlFor={label} className="font-bold">
        {label}
      </label>
      <br />
      {/* to reduce duplication, try placing styles in a const and then exporting */}
      <input
        className="mt-2 w-full ring-1 rounded-md py-2 px-3 outline-none ring-purp mb-8 text-textgray"
        type="text"
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
export default TextInput;

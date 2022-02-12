import React, { useState } from "react";
import TextInput, { textInputStyle } from "../TextInput";
import { Label } from "../TextInput";
import { states } from "../../utils/states";

const LocationInput = () => {
  const [value, setValue] = useState("Lagos");
  return (
    <div className="flex items-stretch gap-x-8">
      <div className="w-3/5">
        <TextInput label="Local Government" />
      </div>
      <div className="w-2/5">
        <Label label="States" />
        <select
          id="States"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`${textInputStyle} `}
          data-testid="select-input"
        >
          {states.map((i, indx) => (
            <option
              value={i}
              label={i}
              key={`${i + indx}`}
              className="py-2"
            ></option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationInput;

import TextInput from "./TextInput";

const LocationInput = () => {
  const states = ["Lagos", "Adamawa", "Bauchi", "Delta", "Ebonyi"];
  return (
    <div className="flex items-stretch gap-x-8">
      <div className="w-3/5">
        <TextInput label="Local Government" />
      </div>
      <div className="w-2/5">
        <label htmlFor="states" className="font-bold">
          States
        </label>
        <br />
        <select className="mt-2 w-full ring-1 rounded-md py-2 px-3 outline-none ring-purp mb-8 text-textgray">
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

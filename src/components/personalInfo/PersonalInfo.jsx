import TextInput from "./TextInput";

const PersonalInfo = () => {
  return (
    <div className="mt-12">
      <form>
        <TextInput label="Name" placeholder="Opara Linus Ahmed" />
        <TextInput label="Address 1" />
        <TextInput label="Address 2" />
      </form>
    </div>
  );
};

export default PersonalInfo;

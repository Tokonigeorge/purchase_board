import TextInput from "./TextInput";
import EmailInput from "./EmailInput";

const PersonalInfo = () => {
  return (
    <div className="mt-10">
      <form>
        <TextInput label="Name" placeholder="Opara Linus Ahmed" />
        <EmailInput placeholder="OperaLinusAhmed@devmail.com" />
        <TextInput label="Address 1" />
        <TextInput label="Address 2" />
      </form>
    </div>
  );
};

export default PersonalInfo;

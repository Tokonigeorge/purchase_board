import TextInput from "../TextInput";
import EmailInput from "./EmailInput";
import LocationInput from "./LocationInput";
import PaymentButton from "../PaymentButton";

const PersonalInfo = ({ handle }) => {
  return (
    <div className="mt-10">
      <form>
        <TextInput label="Name" placeholder="Opara Linus Ahmed" />
        <EmailInput placeholder="OperaLinusAhmed@devmail.com" />
        <TextInput label="Address 1" />
        <TextInput label="Address 2" />
        <LocationInput />
        <PaymentButton handle={handle} />
      </form>
    </div>
  );
};

export default PersonalInfo;

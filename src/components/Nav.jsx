import "../style/Nav.css";

const Nav = ({ navEl }) => {
  const nav = ["Personal Info", "Billing Info"];
  return (
    <div className="flex items-center border-b pb-3 gap-x-2 border-black font-bold text-textgray cursor-pointer justify-between mt-8">
      {nav.map((i, indx) => {
        return (
          <p
            key={i + indx}
            className={`${
              ((navEl == 3 && indx == 1) || navEl == indx + 1) &&
              "text-btnGradTwo active"
            } nav`}
          >
            {i}
          </p>
        );
      })}
      <p>Confirm Payment</p>
    </div>
  );
};

export default Nav;

import "../Nav.css";

const Nav = ({ navEl }) => {
  const nav = ["Personal Info", "Billing Info", "Confirm Payment"];
  return (
    <div className="flex items-center border-b pb-4 border-black font-bold text-textgray cursor-pointer justify-between mt-8">
      {nav.map((i, indx) => {
        return (
          <p
            key={i + indx}
            className={`${navEl == indx && "text-blue-400 active"} nav`}
          >
            {i}
          </p>
        );
      })}
    </div>
  );
};

export default Nav;

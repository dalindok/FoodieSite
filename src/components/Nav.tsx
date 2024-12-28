import { FiAlignJustify, FiChevronDown, FiSearch } from "react-icons/fi";
import logo from "../assets/logo.png";
const Nav = () => {
  return (
    <div className="flex flex-row bg-customColor font-zain justify-between">
      <div className="my-6 ml-8">
        <FiAlignJustify size={25} />
      </div>
      <div className="flex flex-row space-x-20 text-lg">
        <p className="mt-8">Home</p>
        <div className="flex flex-row mt-8">
          <p className="">Restaurant</p>
          <FiChevronDown className="mt-1" />
        </div>
        <img src={logo} alt="Logo" className="rounded-full w-[80px]" />
        <p className="mt-8">About</p>
        <p className="mt-8">Account</p>
      </div>
      <div className="my-6 mr-8">
        <FiSearch size={25} />
      </div>
    </div>
  );
};

export default Nav;

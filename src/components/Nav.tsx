import { FiAlignJustify, FiChevronDown, FiSearch } from "react-icons/fi";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div className="flex items-center bg-customColor font-zain justify-between px-8 py-4">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="rounded-full w-[60px] sm:w-[80px]"
        />
      </div>
      <div className="hidden sm:flex flex-row space-x-10 text-lg">
        <p className="hover:text-gray-700 cursor-pointer">Home</p>
        <div className="flex flex-row items-center cursor-pointer hover:text-gray-700">
          <p>Restaurant</p>
          <FiChevronDown className="ml-1" />
        </div>
        <p className="hover:text-gray-700 cursor-pointer">About</p>
        <p className="hover:text-gray-700 cursor-pointer">Account</p>
        <FiSearch size={25} className="hidden sm:block" />
      </div>
      <FiAlignJustify size={25} className="sm:hidden" />
    </div>
  );
};

export default Nav;

import { FiAlignJustify, FiChevronDown, FiSearch } from "react-icons/fi";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigation = useNavigate();
  const onNavigateTree = (link: string) => {
    navigation(link, { replace: true });
  };

  const menu = [
    { page: "Home", link: "/" },
    { page: "Restaurant", link: "/listing" },
    { page: "About", link: "/about" },
    { page: "Account", link: "/account" },
  ];
  return (
    <div className="flex items-center bg-customColor font-zain justify-between px-8 py-4">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="rounded-full w-[60px] sm:w-[80px]"
        />
      </div>
      <div className="hidden sm:flex flex-row space-x-6 text-lg">
        {menu.map((item, index) => {
          return (
            <button onClick={() => onNavigateTree(item.link)} className="px-5">
              {item.page}
            </button>
          );
        })}
      </div>
      <FiAlignJustify size={25} className="sm:hidden" />
    </div>
  );
};

export default Nav;

import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import AccountDrawer from "./drawer/AccountDrawer";
import { useState } from "react";
import { menu } from "../constants/menu";
import MenuDrawer from "./drawer/MenuDrawer";

const Nav = () => {
  const navigation = useNavigate();
  const [openAccDrawer, setOpenAccDrawer] = useState(false);
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

  const onNavigateTree = (link: string) => {
    if (link === "/account") {
      setOpenAccDrawer(true);
    } else {
      navigation(link, { replace: true });
    }
  };

  return (
    <div>
      <AccountDrawer
        open={openAccDrawer}
        onClose={() => setOpenAccDrawer(false)}
      />
      <MenuDrawer
        open={openMenuDrawer}
        onClose={() => setOpenMenuDrawer(false)}
        onOpenAccDrawer={() => setOpenAccDrawer(true)}
      />
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
              <button
                onClick={() => onNavigateTree(item.link)}
                className="px-5">
                {item.page}
              </button>
            );
          })}
        </div>
        <FiAlignJustify
          onClick={() => {
            setOpenMenuDrawer(true);
          }}
          size={25}
          className="sm:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;

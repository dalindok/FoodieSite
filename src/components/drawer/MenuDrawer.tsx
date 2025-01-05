import { Drawer } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { menu } from "../../constants/menu";

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
  onOpenAccDrawer: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({
  open,
  onClose,
  onOpenAccDrawer,
}) => {
  const navigation = useNavigate();

  const onNavigate = (link: string) => {
    if (link === "/account") {
      onOpenAccDrawer();
    } else {
      navigation(link, { replace: true });
    }
    onClose();
  };

  return (
    <Drawer anchor={"right"} open={open} onClose={onClose}>
      <div className="relative p-5 h-screen w-60 md:w-72 shadow-xl font-zain">
        {menu.map((item) => {
          return (
            <>
              <button
                onClick={() => onNavigate(item.link)}
                className="mb-5 w-48 md:w-60 border border-customColor text-black font-semibold py-1 rounded-lg hover:bg-customColor transition">
                {item.page}
              </button>
            </>
          );
        })}
      </div>
    </Drawer>
  );
};

export default MenuDrawer;

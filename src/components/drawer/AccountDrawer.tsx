import { Drawer } from "@mui/material";
import React from "react";
import SideAccount from "../userAccount/SideAccount";
import { useNavigate } from "react-router-dom";

interface AccountDrawerProps {
  open: boolean;
  onClose: () => void;
}

const AccountDrawer: React.FC<AccountDrawerProps> = ({ open, onClose }) => {
  const navigation = useNavigate();

  const onNavigate = (link: string) => {
    navigation(link, { replace: true });
    onClose();
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <SideAccount onNavigate={onNavigate} />
    </Drawer>
  );
};

export default AccountDrawer;

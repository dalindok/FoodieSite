import React from "react";
import SignUp from "../components/SignUp";
import Phone from "../components/phone/Phone";
import Verification from "../components/phone/Verification";
import SideAccount from "../components/SideAccount";
import Edit from "../components/Edit";
import StatusTap from "../components/userAccount/StatusTap";
import HistoryList from "../components/userAccount/HistoryList";


const RestaurantListing = () => {
  return (
    <div>
     <StatusTap/>
      <HistoryList/>
    <SignUp/>
    <Phone/>
    <Verification/>
    <SideAccount/>
    <Edit/>
    </div>
  );
}

export default RestaurantListing;

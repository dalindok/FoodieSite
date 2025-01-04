import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigation = useNavigate();
  return (
    <div className="bg-customColor flex flex-row justify-between font-zain">
      <img src={logo} alt="Logo" className="rounded-full w-[90px] my-5 ml-10" />
      <div className="flex flex-row mt-5 mr-20 text-lg">
        <div className="flex flex-col m-5">
          <p
            onClick={() => {
              navigation("/about");
            }}
          >
            About Us
          </p>
          <p>Privacy & Policy</p>
        </div>
        <div className="flex flex-col m-5">
          <p>Social</p>
          <div className="flex flex-row justify-between">
            <FaFacebook size={20} />
            <MdEmail size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

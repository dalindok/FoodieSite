import React from "react";
import cambodiaFlag from "../../assets/Phone/Cambodia flag.png";

const Phone = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center h-60 shadow-md w-96 px-6 bg-white relative rounded-lg">
        {/* Close Icon */}
        <div className="absolute top-4 right-4 text-black text-xl cursor-pointer">
          ×
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-center">
          Enter Your Phone Number
        </h1>
        <p className="text-gray-500 text-center mt-2">
          SMS Verification is required to log in
        </p>

        {/* Input Section */}
        <div className="flex items-center mt-6 w-full max-w-md space-x-2">
          {/* Country Code */}
          <div className="flex items-center bg-gray-200 rounded-md px-4 py-2">
            <img
              src={cambodiaFlag}
              alt="Cambodia Flag"
              className="w-6 h-4 mr-2"
            />
            <span className="text-black">+855</span>
          </div>

          {/* Phone Number Input */}
          <input
            type="text"
            placeholder="*******"
            className="flex-grow bg-gray-200 rounded-md py-2 px-4 text-black outline-none"
          />
        </div>

        {/* Continue Button */}
        <button className="mt-6 bg-customColor text-black font-medium py-3 px-20 rounded-2xl shadow-md hover:bg-customColor transition">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Phone;

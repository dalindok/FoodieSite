import React, { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Verification: React.FC = () => {
  // References for each input box
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle input restriction and move focus to the next input
  const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const target = e.target as HTMLInputElement; // Explicitly cast the target
    const value = target.value;
  
    if (!/^\d?$/.test(value)) {
      target.value = ""; // Allow only a single digit
      return;
    }
  
    // Automatically move to the next input when a digit is entered
    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  
  // Handle Enter key to navigate to the next input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Enter" && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen font-zain">
      <div className="flex flex-col items-center justify-center h-80 w-96 shadow-md md:w-1/3 px-6 bg-white relative rounded-lg">
        
        {/* Close Icon */}
        <div className="absolute top-7 left-4 text-black text-xl cursor-pointer">
          <IoIosArrowBack />
        </div>
        <div className="absolute top-4 right-4 text-black text-3xl cursor-pointer">
        <IoIosClose />
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-center mt-5">
          Enter the 4 digits code
        </h1>
        <p className="text-gray-500 text-center mt-2">
          SMS Verification is sent to Your number
        </p>

        {/* Input Section */}
        <div className="flex items-center mt-6 w-full max-w-md space-x-5">
          {[0, 1, 2, 3].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              ref={(el) => (inputRefs.current[index] = el)} // Add to ref array
              onInput={(e) => handleInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="flex-grow bg-gray-200 w-10 rounded-md py-2 px-4 text-black outline-none text-center"
            />
          ))}
        </div>

        {/* Continue Button */}
        <button className="mt-10 outline outline-2 outline-customColor w-60 text-black font-medium py-3 px-8 rounded-lg hover:bg-yellow-500 transition">
          Didn't get code
        </button>
      </div>
    </div>
  );
};

export default Verification;

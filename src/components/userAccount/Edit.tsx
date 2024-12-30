// import React from "react";
import Profile from "../../assets/sideAccount/Profile.png";

const Edit = () => {
  return (
    <div className="flex items-center justify-center font-zain mt-3">
      <div className="flex flex-col items-start justify-center shadow-md w-4/5 md:w-1/2 mb-3 px-6 bg-white relative rounded-lg">
        {/* Title Section */}
        <div className="items-center justify-center ml-10 mt-5">
          <h1 className="text-4xl font-bold mb-2">Edit Profile</h1>
          <p className="text-gray-500 mb-8">
            Keep your personal details private. Information you add here is
            visible to anyone who can view your profile.
          </p>
        </div>
        {/* Photo Section */}
        <div className="flex flex-col items-start ml-10">
          <label
            htmlFor="Photo"
            className="text-slate-500 text-lg font-base mb-2  items-start"
          >
            Photo
          </label>
          <div className="flex flex-row items-start mb-6">
            <img
              src={Profile} // Replace with the actual photo URL
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mr-10"
            />
            <button className="my-auto px-6 py-2 bg-customColor font-base rounded-2xl hover:bg-customColor transition">
              Change
            </button>
          </div>
        </div>

        {/* Input Fields */}
        <div className="md:w-full max-w-md ml-10 mr-10">
          {/* Name Input */}
          <label
            htmlFor="name"
            className="text-slate-500 text-lg font-base mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="maya"
            className="w-full px-4 py-1 font-base text-lg border border-current rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-customColor"
          />

          {/* Gender Select */}
          <label
            htmlFor="gender"
            className="text-gray-500 text-lg font-base mb-2"
          >
            Gender
          </label>
          <select
            id="gender"
            className="w-full font-base px-4 py-2 text-lg border border-customColor rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-customColor"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-between w-full mb-3 ml-10">
          <button className="px-6 border ml-16 border-customColor font-base rounded-xl hover:bg-customColor transition">
            Cancel
          </button>
          <button className="px-6 bg-customColor mr-36 md:mr-16 font-base rounded-xl hover:bg-customColor transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;

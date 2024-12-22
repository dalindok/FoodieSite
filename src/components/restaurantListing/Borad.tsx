import React from "react";
import photo from "../../assets/restaurantListing/food.png";
import wink from "../../assets/restaurantListing/wink.png";
import spoon from "../../assets/restaurantListing/spoon.png";

function Borad() {
  return (
    <div className="flex flex-col md:flex-row bg-slate-100 font-zain p-5">
      <div className="flex flex-col flex-grow">
        <div className="flex items-center mt-10">
          <p className="text-customColor font-semibold mr-2 text-2xl">
            FoodieSite
          </p>
          <img src={wink} alt="star wink" className="w-6" />
        </div>
        <div className="p-10">
          <div className="flex items-center mt-8">
            <p className="text-5xl font-extrabold">Find and Book</p>
            <img src={spoon} alt='spoon' className="w-8 ml-5" /> 
            </div>
            <p className="text-4xl font-semibold">
              The Best Restaurant in Town
            </p>
         
          <div className="flex flex-col items-center">
            <p className="text-slate-500 mt-4 text-center">
              Discover hidden gems where every dish is crafted with passion,
              celebrating culture and flavor. Whether it's a quick bite or a
              gourmet feast, we'll help you find the perfect spot for a
              memorable meal.
            </p>
            <button className="mt-4 font-medium bg-customColor w-24 text-center rounded-lg border-2 border-customColor hover:bg-white">
              About Us
            </button>
          </div>
        </div>
      </div>
      <img
        src={photo}
        alt="Board photo"
        className="rounded-bl-lg rounded-tr-lg md:w-1/2"
      />
    </div>
  );
}

export default Borad;

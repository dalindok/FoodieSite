import food from "../assets/restaurantListing/food.png";
import wink from "../assets/restaurantListing/wink.png";
import spoon from "../assets/restaurantListing/spoon.png";

function Header() {
  return (
    <div className="flex flex-col md:flex-row bg-slate-100 p-5">
      <div className="flex flex-col flex-grow ">
        <div className="flex items-center mt-10 font-zain">
          <p className="text-customColor font-semibold pl-6 text-2xl">
            FoodieSite
          </p>
          <img src={wink} alt="star wink" className="w-6" />
        </div>
        <div className="pl-16 p-6">
          <div className="flex items-center mt-8">
            <p className="text-5xl font-extrabold font-zain">Find and Book</p>
            <img src={spoon} alt="spoon" className="w-8 ml-5" />
          </div>
          <p className="text-4xl font-semibold font-zain">
            The Best Restaurant in Town
          </p>
          <div className="flex flex-col">
            <p className="my-4 text-start w-[700px]">
              Discover hidden gems where every dish is crafted with passion,
              celebrating culture and flavor. Whether it's a quick bite or a
              gourmet feast, we'll help you find the perfect spot for a
              memorable meal.
            </p>
          </div>
          <button className="mt-4 font-medium bg-customColor py-2 px-4 text-center rounded-lg border-2 border-customColor hover:bg-white">
            About Us
          </button>
        </div>
      </div>
      <img
        src={food}
        alt="food"
        className="rounded-bl-lg rounded-tr-lg p-8 md:w-[500px]"
      />
    </div>
  );
}

export default Header;

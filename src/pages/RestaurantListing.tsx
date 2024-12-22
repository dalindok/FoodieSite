import React from "react";
import Listing from "../components/restaurantListing/Listing";
import Borad from "../components/restaurantListing/Borad";
import Search from "../components/restaurantListing/Search";

function RestaurantListing() {
  return (
    <div>
      <Borad />
        <p className="text-center justify-center font-zain font-semibold underline underline-offset-8 decoration-customColor text-2xl mt-10">Most Popular</p>
      <Search />
      <Listing />
    </div>
  );
}

export default RestaurantListing;

import React from "react";
import RestaurantInformation from "../components/restaurantDetail/RestaurantInformation";
import Menu from "../components/restaurantDetail/Menu";
import Map from "../components/restaurantDetail/Map";
import Booking from "../components/Booking";
const RestaurantDetail = () => {
  return (
    <div>
     <RestaurantInformation/>
     <Menu/>
     <Map/>
     <Booking/>
    </div>
  );
}

export default  RestaurantDetail;

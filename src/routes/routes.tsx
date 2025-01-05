import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import RestaurantListing from "../pages/RestaurantListing";
import RestaurantDetail from "../pages/RestaurantDetail";
import SearchPage from "../pages/SearchPage";
import EditProfilePage from "../pages/account/EditProfilePage";
import ListBookingPage from "../pages/booking/ListBookingPage";

const RouteNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/listing" element={<RestaurantListing />} />
      <Route path="/restaurant-detail/:id" element={<RestaurantDetail />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
      <Route path="/list-booking" element={<ListBookingPage />} />
    </Routes>
  );
};

export default RouteNavigation;

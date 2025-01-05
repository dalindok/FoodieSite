import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import RestaurantListing from "../pages/RestaurantListing";
import UserAccount from "../pages/UserAccount";
import RestaurantDetail from "../pages/RestaurantDetail";
import SearchPage from "../pages/SearchPage";

const RouteNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/listing" element={<RestaurantListing />} />
      <Route path="/restaurant-detail/:id" element={<RestaurantDetail />} />
      <Route path="/account" element={<UserAccount />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};

export default RouteNavigation;

import Home from "./pages/Home";
import RestaurantListing from "./pages/RestaurantListing";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import UserAccount from "./pages/UserAccount";

const App = () => {
  return (
    <div>
      <Home />
      <RestaurantListing />
      <AboutUs />
      <UserAccount />
    </div>
  );
};

export default App;

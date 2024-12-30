import Home from "./pages/Home";
import RestaurantListing from "./pages/RestaurantListing";
import AboutUs from "./pages/AboutUs";
import UserAccount from "./pages/UserAccount";
import RestaurantDetail from "./pages/RestaurantDetail";
import SearchPage from "./components/SearchPage";

const App = () => {
  return (
    <div>
      {/* <Home />
      <RestaurantListing />
      <RestaurantDetail />
      <AboutUs />
      <UserAccount /> */}
      <SearchPage />
    </div>
  );
};

export default App;

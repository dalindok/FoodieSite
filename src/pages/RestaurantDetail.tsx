import RestaurantInformation from "../components/restaurantDetail/RestaurantInformation";
import Menu from "../components/restaurantDetail/Menu";
import Map from "../components/restaurantDetail/Map";
import Booking from "../components/Booking";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const RestaurantDetail = () => {
  return (
    <div>
      <Nav />
      <RestaurantInformation />
      <Menu />
      <Map />
      <Booking />
      <Footer />
    </div>
  );
};

export default RestaurantDetail;

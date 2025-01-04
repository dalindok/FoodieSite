import RestaurantInformation from "../components/restaurantDetail/RestaurantInformation";
import Menu from "../components/restaurantDetail/Menu";
import Map from "../components/restaurantDetail/Map";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
const RestaurantDetail = () => {
  const param = useParams();
  console.log("id : ", param.id);
  return (
    <div>
      <Nav />
      <RestaurantInformation />
      <Menu />
      <Map />
      <Footer />
    </div>
  );
};

export default RestaurantDetail;

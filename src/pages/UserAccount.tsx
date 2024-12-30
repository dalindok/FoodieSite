import StatusTap from "../components/userAccount/StatusTap";
import HistoryList from "../components/userAccount/HistoryList";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Edit from "../components/userAccount/Edit";

const RestaurantListing = () => {
  return (
    <div>
      <Nav />
      <Edit />
      <StatusTap />
      <HistoryList />
      <Footer />
    </div>
  );
};

export default RestaurantListing;

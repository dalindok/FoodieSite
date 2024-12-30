import SignUp from "../components/userAccount/SignUp";
import Phone from "../components/phone/Phone";
import Verification from "../components/phone/Verification";
import SideAccount from "../components/userAccount/SideAccount";
import Edit from "../components/userAccount/Edt";
import StatusTap from "../components/userAccount/StatusTap";
import HistoryList from "../components/userAccount/HistoryList";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const RestaurantListing = () => {
  return (
    <div>
      <Nav />
      <StatusTap />
      <HistoryList />
      <Footer />
      {/* <SignUp />
      <Phone />
      <Verification />
      <SideAccount />
      <Edit /> */}
    </div>
  );
};

export default RestaurantListing;

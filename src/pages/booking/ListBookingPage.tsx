import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import StatusTap from "../../components/userAccount/StatusTap";
import HistoryList from "../../components/userAccount/HistoryList";

const ListBookingPage = () => {
  return (
    <div>
      <Nav />
      <StatusTap />
      <HistoryList />
      <Footer />
    </div>
  );
};

export default ListBookingPage;

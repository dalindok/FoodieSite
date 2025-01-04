import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Booking from "../pages/Booking";

const RestaurantItem = (props: { item: IRestaurant }) => {
  const [isBookingVisible, setBookingVisible] = useState(false);

  const handleToggleBooking = () => {
    setBookingVisible(!isBookingVisible);
  };

  const navigation = useNavigate();
  const onNavigateDetail = (id: number) => {
    navigation(`/restaurant-detail/${id}`);
  };
  // Popup styles
  const popupOverlayStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const popupContentStyles: React.CSSProperties = {
    position: "relative",
    width: "90%",
    maxWidth: "500px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div
      key={props.item.id}
      className="rounded-tl-lg-3xl sm:w-80 shadow-lg m-5 bg-white flex flex-col justify-between"
    >
      <img
        src={props.item.image}
        alt={`Cover of ${props.item.name}`}
        className="rounded-tl-3xl rounded-br-3xl w-[400px] h-[200px]"
      />

      <div className="flex flex-col mt-3 ml-4 flex-grow ">
        <div className="flex flex-row space-x-4 text-lg font-semibold font-zain items-center">
          <p>Name:</p>
          <p>
            <span className="font-semibold">{props.item.name}</span>
          </p>
        </div>
        <div className="flex flex-row text-base font-light items-start pr-2 py-2">
          {/* <p>Description</p> */}
          <p>
            <span className="font-normal">{props.item.description}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center my-4">
        <button
          onClick={() => {
            onNavigateDetail(props.item.id);
          }}
          className="py-1 px-2 m-2 font-medium bg-customColor w-20 text-center rounded-lg border-2 border-customColor hover:bg-white"
        >
          <p>Detail</p>
        </button>
        <button
          onClick={handleToggleBooking}
          className="py-1 px-2 m-2 font-medium bg-customColor  text-center rounded-lg border-2 border-customColor hover:bg-white"
        >
          <p>Create Booking</p>
        </button>
      </div>
      {/* Popup for Booking */}
      {isBookingVisible && (
        <div style={popupOverlayStyles}>
          <div style={popupContentStyles}>
            <Booking />
            <button
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black"
              onClick={handleToggleBooking}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantItem;

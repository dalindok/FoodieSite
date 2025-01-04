import { FaStar } from "react-icons/fa";
import Restaurant from "../../assets/Restaurant.jpg";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Booking from "../../pages/Booking";

const RestaurantInformation = () => {
  const [isBookingVisible, setBookingVisible] = useState(false);

  const handleToggleBooking = () => {
    setBookingVisible(!isBookingVisible);
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

  // const navigation = useNavigate();
  const listings = [
    {
      name: "True Food",
      location: "123 Main Street, Phnom Penh",
      contact: "+855 12 345 567 / +855 93 453 954",
      openHours: "Monday - Sunday, 9 AM - 10 PM",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam sapien dignissim elit id id. Lorem ipsum dolor sit amet consectetur. Diam sapien dignissim elit id id.",
      image: Restaurant,
    },
  ];

  return (
    <div className="p-5 font-zain bg-white shadow-lg">
      {listings.map((listing, index) => (
        <div
          key={index}
          className="rounded-lg w-full  bg-white flex flex-col md:flex-row md:justify-center md:space-x-32"
        >
          {/* Restaurant Image */}
          <img
            src={listing.image}
            alt={`Cover of ${listing.name}`}
            className="rounded-t-lg md:rounded-l-lg md:rounded-br-none w-full md:w-1/3 h-64 md:h-80 object-cover"
          />

          {/* Details Section */}
          <div className="flex flex-col p-6 md:w-1/3">
            <div className="text-lg space-y-3">
              <div className="flex flex-col md:flex-row">
                <p className="text-2xl font-semibold">Name:</p>
                <p className="text-xl mt-1 md:mt-0 md:ml-5">{listing.name}</p>
              </div>
              <div className="flex flex-col md:flex-row">
                <p className="text-2xl font-semibold">Location:</p>
                <p className="text-base mt-1 md:mt-0 md:ml-5">
                  {listing.location}
                </p>
              </div>
              <div className="flex flex-col md:flex-row">
                <p className="text-2xl font-semibold">Contact:</p>
                <p className="text-base mt-1 md:mt-0 md:ml-5">
                  {listing.contact}
                </p>
              </div>
              <div className="flex flex-col md:flex-row">
                <p className="text-2xl font-semibold">Open Hours:</p>
                <p className="text-base mt-1 md:mt-0 md:ml-5">
                  {listing.openHours}
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <p className="text-2xl font-semibold">Rating:</p>
                <div className="flex mt-2 md:mt-0 md:ml-5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-2xl mx-1 ${
                        i < listing.rating
                          ? "text-customColor"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <p className="text-2xl font-semibold">Description:</p>
                <p className="text-sm font-light mt-2 md:mt-0 md:ml-5">
                  {listing.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleToggleBooking}
          className="px-6 py-2 font-medium bg-customColor text-black rounded-xl shadow hover:shadow-lg hover:text-white transition"
        >
          Create Booking
        </button>
      </div>
      {/* Popup for Booking */}
      {isBookingVisible && (
        <div style={popupOverlayStyles}>
          <div style={popupContentStyles}>
            <Booking />
            <button
              className="absolute top-2 right-4 text-5xl text-gray-600 hover:text-black"
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

export default RestaurantInformation;

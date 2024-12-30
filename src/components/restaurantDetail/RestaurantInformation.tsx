import React from "react";
import { FaStar } from "react-icons/fa";
import restaurant from "../../assets/restaurant.jpg";

const RestaurantInformation = () => {
  const listings = [
    {
      name: "True Food",
      location: "123 Main Street, Phnom Penh",
      contact: "+855 12 345 567 / +855 93 453 954",
      openHours: "Monday - Sunday, 9 AM - 10 PM",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam sapien dignissim elit id id. Lorem ipsum dolor sit amet consectetur. Diam sapien dignissim elit id id.",
      image: restaurant,
    },
  ];

  return (
    <div className="p-5 font-zain bg-white shadow-lg">
      
      {listings.map((listing, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between m-5"
        >
          {/* Restaurant Image */}
          <img
            src={listing.image}
            alt={`Cover of ${listing.name}`}
            className="my-auto mx-auto rounded-tl-3xl rounded-br-3xl w-2/3 md:w-2/5 h-64 object-cover"
          />

          {/* Details Section */}
          <div className="flex flex-col md:p-6 p-5 md:w-3/5">
            <div className="space-y-4 ">
              <div className="flex flex-row">
                <p className="text-2xl font-semibold">Name:</p>
                <p className="text-xl my-auto mx-28">{listing.name}</p>
              </div>
              <div className="flex flex-row">
                <p className="text-2xl font-semibold">Location:</p>
                <p className="text-base my-auto ml-20">{listing.location}</p>
              </div>
              <div className="flex flex-row">
                <p className="text-2xl font-semibold">Contact:</p>
                <p className="text-base my-auto mx-20">{listing.contact}</p>
              </div>
              <div className="flex flex-row">
                <p className="text-2xl font-semibold">Open Hours:</p>
                <p className="text-base my-auto mx-10">{listing.openHours}</p>
              </div>
              <div className="flex flex-row">
                <p className="text-2xl font-semibold">Rating:</p>
                <div className="flex ml-24 my-auto">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-2xl mx-1 ${
                        i < listing.rating ? "text-customColor" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-row">
                <p className="text-2xl font-semibold">Description:</p>
                <p className="text-sm font-light ml-12 text-slate-600">{listing.description}</p>
              </div>
            </div>
          </div> 
         
        </div>
      ))} 
      <div className="flex justify-center mt-5">
        <button className="text-black border-customColor border-2 hover:bg-customColor
        px-6 py-2 font-medium rounded-xl shadow hover:shadow-lg hover:text-white">
          Create Booking
        </button>
      </div>
     
    </div>
  );
};

export default RestaurantInformation;

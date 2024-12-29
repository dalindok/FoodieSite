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
          className="rounded-lg bg-white flex flex-col md:flex-row justify-between m-5 shadow-md"
        >
          {/* Restaurant Image */}
          <img
            src={listing.image}
            alt={`Cover of ${listing.name}`}
            className="rounded-t-lg md:rounded-l-lg md:rounded-t-none w-full md:w-2/5 h-64 object-cover"
          />

          {/* Details Section */}
          <div className="flex flex-col p-6 sm:w-full md:w-3/5">
            <div className="md:space-y-4 ">
              <div className="flex flex-col sm:flex-row">
                <p className="text-lg font-semibold">Name:</p>
                <p className="text-base ml-2 sm:ml-8">{listing.name}</p>
              </div>
              <div className="flex flex-col sm:flex-row">
                <p className="text-lg font-semibold">Location:</p>
                <p className="text-base ml-2 sm:ml-8">{listing.location}</p>
              </div>
              <div className="flex flex-col sm:flex-row">
                <p className="text-lg font-semibold">Contact:</p>
                <p className="text-base ml-2 sm:ml-8">{listing.contact}</p>
              </div>
              <div className="flex flex-col sm:flex-row">
                <p className="text-lg font-semibold">Open Hours:</p>
                <p className="text-base ml-2 sm:ml-8">{listing.openHours}</p>
              </div>
              <div className="flex flex-col sm:flex-row">
                <p className="text-lg font-semibold">Rating:</p>
                <div className="flex ml-0 sm:ml-8">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-lg ${
                        i < listing.rating ? "text-customColor" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <p className="text-lg font-semibold">Description:</p>
                <p className="text-sm ml-2 sm:ml-8">{listing.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-5">
        <button className="px-6 py-2 font-medium bg-customColor text-black rounded-lg shadow hover:shadow-lg hover:text-white">
          Create Booking
        </button>
      </div>
    </div>
  );
};

export default RestaurantInformation;

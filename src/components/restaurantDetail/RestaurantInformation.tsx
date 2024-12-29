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
    <div className=" p-5 font-zain bg-white shadow-lg h-96">
      {listings.map((listing, index) => (
        <div
          key={index}
          className="rounded-tl-lg-3xl w-full m-5 bg-white flex md:flex-row flex-col justify-between"
        >
          {/* Restaurant Image */}
          <img
            src={listing.image}
            alt={`Cover of ${listing.name}`}
            className="rounded-tl-3xl rounded-br-3xl w-3/4 md:w-2/4 h-80 ml-auto mr-auto md:ml-5 md:mr-5 md:my-auto"
          />

          {/* Details Section */}
          <div className="flex flex-col p-6 sm:w-2/3 md:ml-5 mt-5">
            <div className="text-lg space-y-3">
              <div className="flex">
                <p className="text-2xl font-semibold">Name :</p>
                <p className="text-xl my-auto ml-28">{listing.name}</p>
              </div>
              <div className="flex">
                <p className="text-2xl font-semibold">Location :</p>
                <p className="text-base my-auto ml-20">{listing.location}</p>
              </div>
              <div className="flex">
                <p className="text-2xl font-semibold">Contact :</p>
                <p className="text-base my-auto mx-20"> {listing.contact}</p>
              </div>
              <div className="flex">
                <p className="text-2xl font-semibold">Open Hours :</p>
                <p className="text-base my-auto mx-10"> {listing.openHours}</p>
              </div>
              <div className="flex items-center">
                <p className="text-2xl font-semibold">Rating :</p>
                <div className="flex ml-24 my-auto ">
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
              <div className="flex ">
                <p className="text-2xl font-semibold">Description :</p>
                <p className="text-sm font-light mt-2 w-80 ml-12"> {listing.description}</p>
              </div>
            </div>

            {/* Buttons Section */}
           
          </div> 
        </div>
      ))}
       <div className="flex justify-center mt-10">
              <button className="px-10 py-2 font-medium bg-customColor text-black rounded-2xl shadow hover:shadow-lg hover:text-white">
                Create Booking
              </button>
            </div>
    </div>
  );
};

export default RestaurantInformation;
import React from "react";
import restaurant from "../../assets/restaurantListing/restaurant.jpg";

const Listing = () => {
  const listings = [
    {
      name: "Street Wok",
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam sapien dignissim elit id id.",
      image: restaurant,
    },
    {
      name: "Urban Bites",
      description: "Modern food with a rustic twist.",
      image: restaurant,
    },
    {
      name: "Cozy Corner",
      description: "A place to relax and enjoy.",
      image: restaurant,
    },
    {
      name: "Food Haven",
      description: "Savor every bite in a delightful setting.",
      image: restaurant,
    },
    {
      name: "Tasty Treats",
      description: "Delicious food, unforgettable taste.",
      image: restaurant,
    },
    {
      name: "Grill & Chill",
      description: "Experience food with a difference.",
      image: restaurant,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {listings.map((listing, index) => (
        <div
          key={index}
          className="rounded-tl-lg-3xl w-full sm:w-80 shadow-lg m-5 bg-white flex flex-col justify-between"
        >
          {/* Restaurant Image */}
          <img
            src={listing.image}
            alt={`Cover of ${listing.name}`}
            className="rounded-tl-3xl rounded-br-3xl w-full"
          />

          {/* Details Section */}
          <div className="flex flex-col mt-3 ml-2 flex-grow">
            <div className="grid grid-cols-2 text-lg font-semibold items-center">
              <p>Name</p>
              <p>
                : <span className="font-semibold">{listing.name}</span>
              </p>
            </div>
            <div className="grid grid-cols-2 text-lg font-semibold items-start">
              <p>Description</p>
              <p>
                : <span className="font-normal">{listing.description}</span>
              </p>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex items-center justify-center mt-auto">
            <button className="m-4 font-medium bg-customColor w-20 text-center rounded-lg border-2 border-customColor hover:bg-white">
              <p>Detail</p>
            </button>
            <button className="m-4 font-medium bg-customColor w-40 text-center rounded-lg border-2 border-customColor hover:bg-white">
              <p>Create Booking</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;

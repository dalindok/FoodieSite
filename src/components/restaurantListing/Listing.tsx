import restaurant from "../../assets/restaurantListing/restaurant.jpg";

const Listing = () => {
  const listings = [
    {
      name: "Street Wok",
      description: "Modern food with a rustic twist.",
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
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {listings.map((listing, index) => (
          <div
            key={index}
            className="rounded-tl-lg-3xl sm:w-80 shadow-lg m-5 bg-white flex flex-col justify-between"
          >
            <img
              src={listing.image}
              alt={`Cover of ${listing.name}`}
              className="rounded-tl-3xl rounded-br-3xl w-[400px] h-[200px]"
            />

            <div className="flex flex-col mt-3 ml-4 flex-grow ">
              <div className="flex flex-row space-x-4 text-lg font-semibold font-zain items-center">
                <p>Name:</p>
                <p>
                  <span className="font-semibold">{listing.name}</span>
                </p>
              </div>
              <div className="flex flex-row text-base font-light items-start pr-2 py-2">
                {/* <p>Description</p> */}
                <p>
                  <span className="font-normal">{listing.description}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center my-4">
              <button className="py-1 px-2 m-2 font-medium bg-customColor w-20 text-center rounded-lg border-2 border-customColor hover:bg-white">
                <p>Detail</p>
              </button>
              <button className="py-1 px-2 m-2 font-medium bg-customColor  text-center rounded-lg border-2 border-customColor hover:bg-white">
                <p>Create Booking</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;

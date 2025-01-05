import { useState } from "react";
import Restaurant from "../../assets/restaurant.jpg";

const HistoryList = () => {
  const [restaurants, setRestaurants] = useState([
    {
      name: "Street Wok",
      location: "145 Main Street, Phnom Penh",
      tableNo: 2,
      seat: 4,
      time: "2 pm",
      date: "30 Feb 2025",
      image: "Restaurant", // Replace with actual image path
    },
    {
      name: "Urban Bites",
      location: "32 King Street, Phnom Penh",
      tableNo: 5,
      seat: 2,
      time: "6 pm",
      date: "1 March 2025",
      image: "Restaurant", // Replace with actual image path
    },
    {
      name: "Cozy Corner",
      location: "78 Queen Avenue, Phnom Penh",
      tableNo: 10,
      seat: 6,
      time: "7 pm",
      date: "15 March 2025",
      image: "Restaurant", // Replace with actual image path
    },
  ]);

  return (
    <div className="grid grid-rows-1 gap-6 my-10 md:w-2/3 w-fit mx-auto font-zain md:pl-20 md:pr-20 pl-3 pr-3 pt-5">
      {restaurants.map((restaurant, index) => (
        <div
          key={index}
          className="flex flex-row items-start p-4 bg-white rounded-lg shadow-xl">
          {/* Restaurant Image */}
          <img
            src={Restaurant}
            alt={`Logo of ${restaurant.name}`}
            className="md:w-64 md:h-auto md:mx-1 w-40 my-auto rounded-tl-3xl rounded-br-3xl"
          />

          {/* Restaurant Details */}
          <div className="flex flex-col ml-1 space-y-2 m-auto">
            <div className="flex flex-row font-semibold">
              <p className="text-lg ">Restaurant:</p>
              <p className="text-lg pl-5">{restaurant.name}</p>
            </div>
            <div className="text-base">
              <p>
                Location:{" "}
                <span className="font-medium">{restaurant.location}</span>
              </p>
              <div className="flex flex-row">
                <p>
                  Table No:{" "}
                  <span className="font-medium">{restaurant.tableNo}</span>
                </p>
                <p className="pl-20">
                  Seat: <span className="font-medium">{restaurant.seat}</span>
                </p>
              </div>
              <p>
                Time: <span className="font-medium">{restaurant.time}</span>
              </p>
              <p>
                Date: <span className="font-medium">{restaurant.date}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;

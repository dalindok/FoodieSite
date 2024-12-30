import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantItem = (props: { item: IRestaurant }) => {
  const navigation = useNavigate();
  const onNavigateDetail = (id: number) => {
    navigation(`/restaurant-detail/${id}`);
  };
  return (
    <div
      key={props.item.id}
      onClick={() => onNavigateDetail(props.item.id)}
      className="rounded-tl-lg-3xl sm:w-80 shadow-lg m-5 bg-white flex flex-col justify-between">
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
        <button className="py-1 px-2 m-2 font-medium bg-customColor w-20 text-center rounded-lg border-2 border-customColor hover:bg-white">
          <p>Detail</p>
        </button>
        <button className="py-1 px-2 m-2 font-medium bg-customColor  text-center rounded-lg border-2 border-customColor hover:bg-white">
          <p>Create Booking</p>
        </button>
      </div>
    </div>
  );
};

export default RestaurantItem;

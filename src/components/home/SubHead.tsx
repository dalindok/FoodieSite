import { GiRoundTable } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { GiNoodles } from "react-icons/gi";
const SubHead = () => {
  return (
    <div className=" flex flex-col items-center pt-10">
      <div>
        <p className="font-zain text-2xl font-semibold">FoodieSite is</p>
        <hr />
      </div>
      <div className="flex justify-between space-x-8 p-10 px-60">
        <div className="text-center flex items-center flex-col w-1/4">
          <MdFoodBank className="text-customColor" size={80} />
          <p className="font-semibold text-lg font-zain pt-5">
            Discover Restaurants
          </p>
          <p className="font-extralight text-sm pt-2 ">
            FoodieSite helps you explore and find the best dining spots in town,
            from hidden gems to popular favorites, all in one place.
          </p>
        </div>
        <div className="text-center flex items-center flex-col w-1/4">
          <GiRoundTable className="text-customColor" size={80} />
          <p className="font-semibold text-lg font-zain pt-5">
            Easy Table Booking
          </p>
          <p className="font-extralight text-sm pt-2">
            With a few clicks, you can reserve a table or place an order online,
            making your dining experience convenient and hassle-free.
          </p>
        </div>
        <div className="text-center flex items-center flex-col w-1/4">
          <GiNoodles className="text-customColor" size={80} />
          <p className="font-semibold text-lg font-zain pt-5">
            Dining Experience
          </p>
          <p className="font-extralight text-sm pt-2">
            Enjoy seamless dining with easy table reservations and a curated
            selection of local eateries tailored to your taste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubHead;

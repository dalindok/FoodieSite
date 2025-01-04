import { FaTimes } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import Listing from "./restaurantListing/Listing";
import Search from "./restaurantListing/Search";

const SearchPage = () => {
  return (
    <div className="flex items-center flex-col p-4 mx-auto ">
      {/* Header with Back Button, Search Input, and Icons */}
      <div className="flex justify-center space-x-40">
        <div className="pt-14">
          <button>
            <FaChevronLeft className="h-6 w-6 " />
          </button>
        </div>
        <div>
          <Search />
        </div>
        <div className="pt-14">
          <button>
            <FaTimes className="h-6 w-6 " />
          </button>
        </div>
      </div>
      <Listing />
    </div>
  );
};

export default SearchPage;

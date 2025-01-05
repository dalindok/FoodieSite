import { FaTimes } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import Listing from "../components/restaurantListing/Listing";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex flex-col">
      <div className="flex justify-center space-x-4 pt-14">
        <button>
          <FaChevronLeft onClick={() => navigate(-1)} className="h-6 w-6" />
        </button>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="search ..."
          className="w-1/2 bg-slate-100 p-4 pl-10 rounded-xl shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-customYellow hover:ring-2 hover:ring-customYellow"
        />
        <button>
          <FaTimes className="h-6 w-6 " onClick={() => setSearchValue("")} />
        </button>
      </div>
      <Listing />
    </div>
  );
};

export default SearchPage;

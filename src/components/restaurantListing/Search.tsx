import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex justify-center items-center w-full mt-10 font-zain">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
          className="w-full bg-slate-100 p-4 pl-10 rounded-xl shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-customYellow hover:ring-2 hover:ring-customYellow" 
        />
        <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-customColor" />
      </div>
    </div>
  );
}

export default Search;

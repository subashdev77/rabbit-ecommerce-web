import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggel = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search term: ", searchTerm);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-28 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center w-full"
        >
          <div className="relative w-2/3 md:w-1/2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-3 pr-12 rounded-lg focus:outline-none w-full placeholder-gray-500 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <CiSearch size={24} />
            </button>
          </div>
          <button
            type="submit"
            onClick={handleSearchToggel}
            className="absolute right-10 top-[25%] tranform translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <IoClose size={24} />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggel}>
          <CiSearch size={24} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

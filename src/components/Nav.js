import React from "react";
import { useSearch } from "../SearchContext"; 

export const Nav = () => {
  const { searchQuery, setSearchQuery } = useSearch(); 

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex md:flex-row flex-col p-12 justify-between items-center">
      <h1 className="text-2xl font-bold text-[#385A64]">art.gallery</h1>

      <div>
        <input
          type="search"
          placeholder="Search by tag"
          className=" w-[300px] py-3 px-2 md:w-[400px] outline-none rounded-md border-none bg-transparent shadow-sm text-[#385A64] text-md text-sm font-medium leading-6 my-4 md:my-0"
          onChange={handleSearchInputChange}
          value={searchQuery}
        />
      </div>
    </div>
  );
};

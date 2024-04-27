import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input
        placeholder="Search"
        className={`bg-[var(--background)] md:inline-block z-50 w-[18rem] hidden max-h-14 min-h-14 p-2 bottom-0 border-t border-l border-[var(--section-border)] outline-none items-center`}
      ></input>
    </div>
  );
};

export default SearchBar;

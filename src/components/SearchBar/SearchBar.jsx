import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <form>
      <div className="search">
        <label> Search</label>
        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value) || onSearch(e.target.value)
          }
        />
      </div>
    </form>
  );
};

export default SearchBar;

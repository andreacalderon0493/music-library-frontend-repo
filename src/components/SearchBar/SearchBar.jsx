import React, { useState } from "react";

const SearchBar = ({}) => {
  const [search, setSearch] = useState("");

  return (
    <form className="flex-item">
      <div>
        <label> Search</label>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
    </form>
  );
};

export default SearchBar;

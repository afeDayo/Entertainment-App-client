import React from "react";
import "./Search.css";
import search from "../../assets/search.png";

const Search = () => {
  return (
    <div>
      <div className="filter">
        <div className="sch-icon">
          <img src={search} alt="search" />
        </div>
        <div className="in-sch">
          <input type="text" placeholder="Search for movies or TV series" />
        </div>
      </div>
    </div>
  );
};

export default Search;

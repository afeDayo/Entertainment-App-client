import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import teloscope from "../../assets/Shape (1).png";
import "./Search.css";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userInput, setUserInput] = useState("");
  const [placeholder, setPlaceholder] = useState(
    "Search for movies, TV series, or bookmarked shows"
  );

  const location = useLocation();

  useEffect(() => {
    setUserInput(searchParams.get("search") || "");
  }, [searchParams]);

  useEffect(() => {
    setPlaceholder(
      `Search for ${
        location.pathname === "/"
          ? "movies, TV series"
          : location.pathname.substring(1)
      }`
    );
  }, [location]);

  return (
    <div className="search-container">
      <div className="telo mt-1">
        <img src={teloscope} alt="telo" />
      </div>
      <div className="search">
        <input
          onChange={(event) => {
            setSearchParams({ search: event.target.value });
            setUserInput(event.target.value);
          }}
          value={userInput}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Search;

import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loading from "../../utils/Loading";
import "./SearchResult.css";

const SearchResult = ({ userInput, filteredMovies }) => {
  if (filteredMovies === null) {
    return null;
  }

  if (filteredMovies.length === 0) {
    return <p className="text-white">No results found for '{userInput}'</p>;
  }

  return (
    <div className="result">
      <h2>
        Found {filteredMovies.length} result(s) for '{userInput}'
      </h2>

      {filteredMovies.length > 0 && (
        <div className="result-fill">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      )}

      {filteredMovies.length === 0 && <Loading message="Fetching results..." />}
    </div>
  );
};

export default SearchResult;

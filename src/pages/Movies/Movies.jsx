import React from "react";
import { useFetch } from "../../hooks/useFetch";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useCustomParams } from "../../hooks/useCustomParams";
import Loading from "../../utils/Loading";
import SearchResult from "../Home/SearchResult";
import "./Movies.css";

const Movies = () => {
  const { data, error, loading, updateUI } = useFetch("/api/movie/movies");
  const { userInput, filteredMovies } = useCustomParams(data);

  if (loading) {
    return <Loading message="Fetching Movies..." />;
  }

  if (error) {
    return <p>Error loading movies. Please try again later.</p>;
  }

  if (userInput) {
    return (
      <SearchResult userInput={userInput} filteredMovies={filteredMovies} />
    );
  }

  return (
    <div className="movepage">
      <h2>Movies</h2>
      <div className="mopacard">
        {data.map((movie) => (
          <MovieCard key={movie._id} movie={movie} updateUI={updateUI} />
        ))}
      </div>
    </div>
  );
};

export default Movies;

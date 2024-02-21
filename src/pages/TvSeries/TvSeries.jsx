import React from "react";
import { useFetch } from "../../hooks/useFetch";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useCustomParams } from "../../hooks/useCustomParams";
import Loading from "../../utils/Loading";
import SearchResult from "../Home/SearchResult";
import "./TvSeries.css";

const TvSeries = () => {
  const { data, error, loading, updateUI } = useFetch("/api/movie/series");
  const { userInput, filteredMovies } = useCustomParams(data);

  if (loading) {
    return <Loading message="Fetching TV Series..." />;
  }

  if (error) {
    return <p>Error loading series. Please try again later.</p>;
  }

  if (userInput) {
    return (
      <SearchResult userInput={userInput} filteredMovies={filteredMovies} />
    );
  }

  return (
    <div className="tvspage">
      <h2>TV Series</h2>
      <div className="tvsscards">
        {data.map((movie) => (
          <MovieCard key={movie._id} movie={movie} updateUI={updateUI} />
        ))}
      </div>
    </div>
  );
};

export default TvSeries;

import React from "react";
import { useFetch } from "../../hooks/useFetch";
import MovieCard from "../../components/MovieCard/MovieCard";
import useAuth from "../../hooks/useAuth";
import { useCustomParams } from "../../hooks/useCustomParams";
import Loading from "../../utils/Loading";
import SearchResult from "../Home/SearchResult";
import "./Bookmark.css";

const Bookmark = () => {
  const { token } = useAuth();
  const {
    data,
    error,
    loading,
    updateUI: handleBookmarkUpdate,
  } = useFetch("/api/bookmark", token);

  const { userInput, filteredMovies } = useCustomParams(data);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (userInput) {
    return (
      <SearchResult userInput={userInput} filteredMovies={filteredMovies} />
    );
  }

  return (
    <div className="bokpage">
      <h2>Bookmarked Shows</h2>
      <div className="bokmovpa">
        {data.length > 0 ? (
          data.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              updateUI={handleBookmarkUpdate}
            />
          ))
        ) : (
          <p className="text-white text-start">No bookmarked shows found.</p>
        )}
      </div>
    </div>
  );
};

export default Bookmark;

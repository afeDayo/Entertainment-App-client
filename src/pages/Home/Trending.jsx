import React from "react";
import Loading from "../../utils/Loading";
import MovieCarousel from "./MovieCarosel";

const Trending = ({ data, error, loading, updateUI }) => {
  if (loading) {
    return <Loading message="Fetching Trending Movies..." />;
  }

  if (error) {
    return <p>Error loading trending movies. Please try again later.</p>;
  }

  return (
    <div>
      <MovieCarousel data={data} updateUI={updateUI} />
    </div>
  );
};

export default Trending;

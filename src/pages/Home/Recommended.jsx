import React from "react";
import Loading from "../../utils/Loading";
import "./Recommended.css";
import MovieCard from "../../components/MovieCard/MovieCard";

const Recommended = ({ data, error, loading, updateUI }) => {
  if (loading) {
    return <Loading message="Fetching Recommended Movies..." />;
  }

  if (error) {
    return <p>Error loading recommended movies. Please try again later.</p>;
  }

  return (
    <div className="recmaindata">
      {data.map((movie) => (
        <MovieCard key={movie._id} movie={movie} updateUI={updateUI} />
      ))}
    </div>
  );
};

export default Recommended;

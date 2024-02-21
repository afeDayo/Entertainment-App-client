import React from "react";
import Trending from "./Trending";
import Recommended from "./Recommended";
import { useFetch } from "../../hooks/useFetch";
import SearchResult from "./SearchResult";
import { useCustomParams } from "../../hooks/useCustomParams";
import Loading from "../../utils/Loading";
import "./Home.css";

const Home = () => {
  const { data, error, loading, updateUI } = useFetch("/api/movie");
  const { userInput, filteredMovies } = useCustomParams(data);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p className="text-white">Error fetching data: {error}</p>;
  }

  if (userInput) {
    return (
      <SearchResult userInput={userInput} filteredMovies={filteredMovies} />
    );
  }

  return (
    <div className="movie-body">
      <div className="tred-body">
        <h2 className="trend">Trending</h2>
        <Trending {...{ data, error, loading, updateUI }} />
      </div>

      <div className="main-body">
        <h2 className="reco">Recommended For You</h2>
        <Recommended {...{ data, error, loading, updateUI }} />
      </div>
    </div>
  );
};

export default Home;

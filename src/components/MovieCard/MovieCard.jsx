import React from "react";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";
import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import useAuth from "../../hooks/useAuth";
import "./MovieCard.css";

const MovieCard = ({ movie, updateUI }) => {
  const { user, token } = useAuth();

  const { _id, image, title, year, type, rated, bookmarkedBy } = movie;

  const bookmarkIcon = bookmarkedBy.includes(user?.id) ? (
    <BiSolidBookmark
      onClick={() => {
        updateUI("remove", _id, token, user?.id);
      }}
    />
  ) : (
    <BiBookmark
      onClick={() => {
        updateUI("add", _id, token, user?.id);
      }}
    />
  );

  return (
    <div className="movie-card">
      <div className="maincards">
        <img src={image} alt={`Poster for ${title}`} />
        <div className="bkmak">{bookmarkIcon}</div>
        <div className="empty"></div>
      </div>
      <div className="movie-details">
        <div className="cardico">
          <p className="m-0">{year}</p>
          <p className="dott mb-1">.</p>
          <span className="doicon">
            {type === "movie" ? <RiFilmFill /> : <PiTelevisionFill />}
            <p className="m-0 tvvvm">
              {type === "movie" ? "Movie" : "TV Series"}
            </p>
          </span>
          <p className="dott mb-1">.</p>
          <p className="m-0">{rated}</p>
        </div>
        <div className="cardtits">
          <p className="m-0">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

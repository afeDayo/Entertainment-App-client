import React, { useState } from "react";
import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import "./MovieCarosel.css";

const MovieCarousel = ({ data, updateUI }) => {
  const { user, token } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === data.length - 1;

  return (
    <div className="caro-contana">
      <div
        className="caro-omg"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((movie) => {
          const { _id, title, year, type, rated, image, bookmarkedBy } = movie;

          const isBookmarked = user && bookmarkedBy.includes(user.id);

          return (
            <div key={_id} className="caro-con">
              <div className="caro-card">
                <img src={image} alt={`Poster for ${title}`} />
                <div className="bookmark">
                  {user &&
                    token &&
                    (isBookmarked ? (
                      <BiSolidBookmark
                        onClick={() => updateUI("remove", _id, token, user.id)}
                      />
                    ) : (
                      <BiBookmark
                        onClick={() => updateUI("add", _id, token, user.id)}
                      />
                    ))}
                </div>
              </div>

              <div className="inner-icons">
                <div className="rating">
                  <p className="m-0">{year}</p>
                  <p className="dotts mb-1">.</p>
                  <span className="type">
                    {type === "movie" ? <RiFilmFill /> : <PiTelevisionFill />}
                    <p className="m-0">
                      {type === "movie" ? "Movie" : "TV Series"}
                    </p>
                  </span>
                  <p className="dotts mb-1">.</p>
                  <p className="m-0">{rated}</p>
                </div>
                <p className="m-0 movtits">{title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className={`prev-button ${isPrevDisabled ? "disabled" : ""}`}
        onClick={handlePrev}
        disabled={isPrevDisabled}
      >
        Prev
      </button>
      <button
        className={`next-button ${isNextDisabled ? "disabled" : ""}`}
        onClick={handleNext}
        disabled={isNextDisabled}
      >
        Next
      </button>
    </div>
  );
};

export default MovieCarousel;

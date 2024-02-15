import React from "react";
import "./SideBar.css";
import movieicon from "../../assets/Movie.png";
import { AiFillAppstore } from "react-icons/ai";
import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { IoBookmark } from "react-icons/io5";
import profile from "../../assets/Oval.png";

const SideBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="mainicon">
          <img src={movieicon} alt="movieicon" />
        </div>
        <div className="all-icon">
          <a href="#">
            <AiFillAppstore className="window" />
          </a>
          <a href="#">
            <RiFilmFill className="film" />
          </a>
          <a href="#">
            <PiTelevisionFill className="tvs" />
          </a>
          <a href="#">
            <IoBookmark className="bookm" />
          </a>
        </div>
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

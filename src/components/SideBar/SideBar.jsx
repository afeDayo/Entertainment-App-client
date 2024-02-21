import React, { useEffect, useState } from "react";
import { PiTelevisionFill } from "react-icons/pi";
import { MdWindow } from "react-icons/md";
import { RiFilmFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import logo from "../../assets/entertainment app logo.png";
import redmovie from "../../assets/Movie.png";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const [selected, setSelected] = useState("/");
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    setSelected(pathname);
  }, [location]);

  const isIconSelected = (path) => (selected === path ? "#ffffff" : "#5A698F");

  return (
    <div className="sidebar">
      <Link className="redmovie" to="/">
        <img src={redmovie} alt="" />
      </Link>
      <div className="movicon">
        <Link
          to="/"
          style={{
            color:
              selected === "/"
                ? "#ffffff"
                : hoveredIcon === "/"
                ? "#fc4747"
                : "#5A698F",
          }}
          onMouseEnter={() => setHoveredIcon("/")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <MdWindow />
        </Link>
        <Link
          to="/movies"
          style={{
            color:
              selected === "/movies"
                ? "#ffffff"
                : hoveredIcon === "/movies"
                ? "#fc4747"
                : "#5A698F",
          }}
          onMouseEnter={() => setHoveredIcon("/movies")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <RiFilmFill />
        </Link>
        <Link
          to="/tvseries"
          style={{
            color:
              selected === "/tvseries"
                ? "#ffffff"
                : hoveredIcon === "/tvseries"
                ? "#fc4747"
                : "#5A698F",
          }}
          onMouseEnter={() => setHoveredIcon("/tvseries")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <PiTelevisionFill />
        </Link>
        <Link
          to="/bookmark"
          style={{
            color:
              selected === "/bookmark"
                ? "#ffffff"
                : hoveredIcon === "/bookmark"
                ? "#fc4747"
                : "#5A698F",
          }}
          onMouseEnter={() => setHoveredIcon("/bookmark")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <FaBookmark />
        </Link>
      </div>
      <div className="mainlo">
        <img src={logo} alt="applogo" />
      </div>
    </div>
  );
};

export default SideBar;

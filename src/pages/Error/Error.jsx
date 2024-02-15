import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Error 404</h2>
      <p>Sorry, This page was not Found</p>
      <Link to="/">
        <p>Go Home</p>
      </Link>
    </div>
  );
};

export default Error;

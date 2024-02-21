import React from "react";
import "./Spinner.css";
import Loading from "./Loading";

const Spinner = ({ isLoading }) => {
  if (!isLoading) {
    return <Loading />;
  }

  return (
    <div className="spinner-container">
      <p className="m-0">Loading...</p>
    </div>
  );
};

export default Spinner;

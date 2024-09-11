import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const DropDown = () => {
  const { token, handleLogOutUser } = useAuth();

  return (
    <div className="mt-3 position-absolute my-dropdown">
      {token ? (
        <div>
          <button
            onClick={() => {
              handleLogOutUser();
            }}
            className="btn btn-danger text-white"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="d-flex flex-column gap-2">
          <Link to="/signup" className="btn btn-danger text-white">
            SignUp
          </Link>
          <Link to="/signin" className="btn btn-danger text-white">
            SignIn
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropDown;

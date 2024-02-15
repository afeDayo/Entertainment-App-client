import React, { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import axiosInstance from "../utils/axiosConfig";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || null;
  });

  const navigate = useNavigate();

  const handleRegisterUser = async (formData) => {
// const {data} = await axiosInstance.post(
//   "/api/auth/re"
// )
    toast.success(data.message);
    localStorage.setItem("token", JSON.stringify(data.token));
    setToken(data.token);
    setUser({ id: data.id });
    console.log(data);
    navigate("/");

    const {
      response: { data },
    } = error;
    console.log(data.message);

    if (error.response) {
      console.log(error.response.data.message);
      return toast.error(error.response.data.message);
    }
  };
  const handleSignInUser = () => {};
  const handleGetUser = () => {};
  const handleLogOutUser = () => {};

  const contextData = { user, token };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

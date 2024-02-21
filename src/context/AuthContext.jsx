import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosConfig";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    () => JSON.parse(localStorage.getItem("token")) || null
  );
  const [authenticating, setAuthenticating] = useState(false);
  const navigate = useNavigate();

  const handleRegisterUser = async (formData) => {
    setAuthenticating(true);

    try {
      const { data } = await axiosInstance.post("/api/auth/register", formData);
      toast.success("Registration Successful");
      localStorage.setItem("token", JSON.stringify(data.token));
      setToken(data.token);
      setUser({ id: data.id });
      navigate("/");
    } catch (error) {
      handleAuthError(error);
    } finally {
      setAuthenticating(false);
    }
  };

  const handleSignInUser = async (formData) => {
    setAuthenticating(true);

    try {
      const { data } = await axiosInstance.post("/api/auth/login", formData);
      toast.success("Welcome Back!");
      localStorage.setItem("token", JSON.stringify(data.token));
      setToken(data.token);
      setUser({ id: data.id });
      navigate("/");
    } catch (error) {
      handleAuthError(error);
    } finally {
      setAuthenticating(false);
    }
  };

  const handleGetUser = async () => {
    try {
      const { data } = await axiosInstance.post(
        "/api/auth/user",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(data);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleLogOutUser = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    toast.success("See you soon");
    navigate("/");
  };

  const handleAuthError = (error) => {
    if (error.response) {
      // toast.error(error.response.data.message);
    } else {
      // toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    handleGetUser();
  }, [token]);

  const contextData = {
    user,
    token,
    handleRegisterUser,
    handleSignInUser,
    authenticating,
    handleGetUser,
    handleLogOutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

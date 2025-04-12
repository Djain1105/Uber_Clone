import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { user, setuser } = useContext(UserDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/user-login");
    }
  }, [token]);
  
  // here we are verifying the token and getting the user data
  // if the token is valid, we set the user data in the context
  
  axios
    .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setuser(response.data.user);
      }
    })
    .catch((error) => {
      if (error.response) {
        localStorage.removeItem("token");
        navigate("/user-login");
      } else {
        console.error("Error:", error.message);
      }
    });

  return <>{children}</>;
};

export default UserProtectWrapper;

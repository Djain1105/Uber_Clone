import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { captain, setcaptain } = useContext(CaptainDataContext);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token]);

  // here we are verifying the token and getting the captain data
  // if the token is valid, we set the captain data in the context
  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setcaptain(response.data.captain);
        setisLoading(false);
      }
    })
    .catch((error) => {
      if (error.response) {
        localStorage.removeItem("token");
        setisLoading(false);
        navigate("/captain-login");
      } else {
        console.error("Error:", error.message);
      }
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const { captain, setcaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );
    
    if (response.status === 200) {
      const data = response.data;
      setcaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setemail("");
    setpassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-18 mb-8 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>

        <p className="text-center">
          Want to join Fleet?
          <Link to="/captain-signup" className="text-blue-600">
            {" "}
            Register as Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/user-login"
          className="bg-[#d5622d] flex justify-center item-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [vehicleColor, setvehicleColor] = useState("");
  const [vehiclePlate, setvehiclePlate] = useState("");
  const [vehicleCapacity, setvehicleCapacity] = useState("");
  const [vehicleType, setvehicleType] = useState("");

  const navigate = useNavigate();
  const { captain, setcaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newCaptain = {
      fullname: {
        firstname: firstName,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      newCaptain
    );

    if (response.status === 201) {
      const data = response.data;
      setcaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setfirstName("");
    setlastname("");
    setemail("");
    setpassword("");
    setvehicleColor("");
    setvehiclePlate("");
    setvehicleCapacity("");
    setvehicleType("");
  };

  return (
    <div>
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
            <h3 className="text-base font-medium mb-1">What's your name?</h3>
            <div className="flex gap-4 mb-2">
              <input
                required
                value={firstName}
                onChange={(e) => {
                  setfirstName(e.target.value);
                }}
                type="text"
                placeholder="First Name"
                className="bg-[#eeeeee] rounded px-4 py-2 w-full text-base placeholder:text-sm"
              />
              <input
                required
                value={lastname}
                onChange={(e) => {
                  setlastname(e.target.value);
                }}
                type="text"
                placeholder="Last Name"
                className="bg-[#eeeeee] rounded px-4 py-2 w-full text-base placeholder:text-sm"
              />
            </div>

            <h3 className="text-base font-medium mb-1">What's your email?</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              type="email"
              placeholder="email@example.com"
              className="bg-[#eeeeee] mb-2 rounded px-4 py-2 w-full text-base placeholder:text-sm"
            />

            <h3 className="text-base font-medium mb-1">Enter Password</h3>
            <input
              required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
              className="bg-[#eeeeee] mb-2 rounded px-4 py-2 w-full text-base placeholder:text-sm"
            />

            <h3 className="text-base font-medium mb-1">Vehicle Details</h3>
            <div className="flex gap-4 mb-2">
              <input
                required
                value={vehicleColor}
                onChange={(e) => {
                  setvehicleColor(e.target.value);
                }}
                type="text"
                placeholder="Vehicle Color"
                className="bg-[#eeeeee] rounded px-4 py-2 w-full text-base placeholder:text-sm"
              />
              <input
                required
                value={vehiclePlate}
                onChange={(e) => {
                  setvehiclePlate(e.target.value);
                }}
                type="text"
                placeholder="Vehicle Plate"
                className="bg-[#eeeeee] rounded px-4 py-2 w-full text-base placeholder:text-sm"
              />
            </div>
            <div className="flex gap-4 mb-5">
              <input
                required
                value={vehicleCapacity}
                onChange={(e) => {
                  setvehicleCapacity(e.target.value);
                }}
                type="number"
                placeholder="Vehicle Capacity"
                className="bg-[#eeeeee] rounded px-4 py-2 w-full text-base placeholder:text-sm"
              />
              <select
                required
                value={vehicleType}
                onChange={(e) => {
                  setvehicleType(e.target.value);
                }}
                className="bg-[#eeeeee] rounded px-4 py-2 w-full text-base placeholder:text-sm"
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="bike">Bike</option>
              </select>
            </div>

            <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
              Register
            </button>
          </form>

          <p className="text-center">
            Already have a account?
            <Link to="/captain-login" className="text-blue-600">
              {" "}
              Login here
            </Link>
          </p>
        </div>
        <div>
          <p className="leading-tight text-[10px]">
            By signing up, you are agreeing to our{" "}
            <span className="underline">Terms Of Service</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-full flex justify-between flex-col pt-8 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1557404763-69708cd8b9ce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww')]">
        <img
          className="w-18 ml-8 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/user-login"
            className="flex items-center justify-center w-full bg-black text-white py-3 py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

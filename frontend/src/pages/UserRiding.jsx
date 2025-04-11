import React from "react";
import { Link } from "react-router-dom";

const UserRiding = () => {
  return (
    <div className="h-screen w-screen">
      <Link
        to="/user-home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="ri-home-5-line text-lg"></i>
      </Link>

      <div className="h-[60%]">
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        />
      </div>

      <div className="h-[40%] p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-16"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Sharma Ji</h2>
            <h4 className="text-xl font-semibold -my-1">RJ01 AB 1234</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Wagon-R</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-between items-center">
          <div className="w-full">
            <div className="flex items-center gap-5 p-2 border-b-2 border-gray-200">
              <i className="ri-map-pin-user-fill text-lg"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Kankariya Talab, Ahmedabad
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-2">
              <i className="ri-currency-line text-lg"></i>
              <div>
                <h3 className="text-lg font-medium">₹93.17 </h3>
                <p className="text-sm -mt-1 text-gray-600">Cash</p>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg my-2">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default UserRiding;

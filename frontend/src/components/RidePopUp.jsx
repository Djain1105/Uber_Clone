import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setridePopUpPanel(false);
        }}
        className="absolute right-6 top-3 text-2xl"
      >
        <i className="ri-arrow-down-wide-line "></i>
      </h5>
      <h3 className="text-2xl font-medium mb-5 p-1">New Ride Available!</h3>

      <div className="flex items-center justify-between mt-5 mb-2 bg-yellow-400 p-3 rounded-lg">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-12 rounded-full object-cover"
            src="https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q"
            alt=""
          />
          <h2 className="text-lg font-medium">Harsh Sharma</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>

      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-full">
          <div className="flex items-center gap-5 p-2 border-b-2 border-gray-200 ">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahmedabad
              </p>
            </div>
          </div>
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

        <button
          onClick={() => {
            props.setconfirmRidePopUpPanel(true);
          }}
          className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-1"
        >
          Accept
        </button>

        <button
          onClick={() => {
            props.setridePopUpPanel(false);
          }}
          className="w-full bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg"
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;

import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setconfirmRidePanel(false);
        }}
        className="absolute right-6 top-3 text-2xl"
      >
        <i className="ri-arrow-down-wide-line "></i>
      </h5>
      <h3 className="text-2xl font-medium mb-5">Confirm your Ride</h3>

      <div className="flex flex-col gap-2 justify-between items-center">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
        />

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
            props.setlookingForDriverPanel(true);
            props.setconfirmRidePanel(false);
          }}
          className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg my-2"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;

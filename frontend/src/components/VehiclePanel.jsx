import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setvehiclePanelOpen(false);
        }}
        className="absolute right-6 top-3 text-2xl"
      >
        <i className="ri-arrow-down-wide-line "></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
          props.setvehiclePanelOpen(false);
        }}
        className="flex items-center justify-between w-full p-3 border-2 border-transparent active:border-black rounded-xl mb-3"
      >
        <img
          className="h-15"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
          props.setvehiclePanelOpen(false);
        }}
        className="flex items-center justify-between w-full p-3 border-2 border-transparent active:border-black rounded-xl mb-3"
      >
        <img
          className="h-15"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill">1</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motorcycle ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹65.17</h2>
      </div>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
          props.setvehiclePanelOpen(false);
        }}
        className="flex items-center justify-between w-full p-3 border-2 border-transparent active:border-black rounded-xl mb-3"
      >
        <img
          className="h-15"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Auto{" "}
            <span>
              <i className="ri-user-3-fill">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable auto ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹93.17</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;

import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 rounded-full object-cover"
            src="https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q"
            alt=""
          />
          <h4 className="text-lg font-medium">Harsh Sharma</h4>
        </div>
        <div className="text-right">
          <h4 className="text-xl font-semibold">₹258.20</h4>
          <p className="text-sm font-medium text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex justify-center gap-5 items-start p-3 bg-gray-100 rounded-xl mt-6">
        <div className="text-center">
          <i className="ri-timer-2-line text-3xl mb-2 font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-500">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-speed-up-line text-3xl mb-2 font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-500">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-booklet-line text-3xl mb-2 font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-500">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;

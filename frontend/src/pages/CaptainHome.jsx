import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUpPanel, setridePopUpPanel] = useState(true);
  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);
  const [confirmRidePopUpPanel, setconfirmRidePopUpPanel] = useState(false);

  useGSAP(
    function () {
      if (ridePopUpPanel) {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopUpPanel) {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopUpPanel]
  );

  return (
    <div className="h-screen w-screen">
      <div className="fixed top-0 p-3 flex items-center justify-between w-full">
        <img
          className="w-18"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-logout"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg"></i>
        </Link>
      </div>

      <div className="h-[65%]">
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        />
      </div>

      <div className="h-[35%] p-5">
        <CaptainDetails />
      </div>

      <div
        ref={ridePopUpPanelRef}
        className="fixed z-10 bottom-0 p-3 bg-white w-full translate-y-full"
      >
        <RidePopUp
          setridePopUpPanel={setridePopUpPanel}
          setconfirmRidePopUpPanel={setconfirmRidePopUpPanel}
        />
      </div>

      <div
        ref={confirmRidePopUpPanelRef}
        className="fixed z-10 bottom-0 p-3 bg-white w-full translate-y-full h-screen"
      >
        <ConfirmRidePopUp
          setconfirmRidePopUpPanel={setconfirmRidePopUpPanel}
          setridePopUpPanel={setridePopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;

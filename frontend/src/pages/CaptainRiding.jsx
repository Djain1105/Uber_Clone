import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainFinishRide from "../components/CaptainFinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setfinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
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
          to="/captain-home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg"></i>
        </Link>
      </div>

      <div className="h-[85%]">
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        />
      </div>

      <div
        className="h-[15%] px-2 bg-yellow-400 flex flex-col"
        onClick={() => setfinishRidePanel(true)}
      >
        <div>
          <h5 className=" text-center text-2xl">
            <i className="ri-arrow-up-wide-line "></i>
          </h5>
        </div>
        <div className="flex items-center justify-between my-1 px-2">
          <h4 className="text-xl font-semibold px-2">4 Km Away</h4>
          <button className="bg-green-600 text-white font-semibold px-5 py-2 rounded-lg text-center">
            Complete Ride
          </button>
        </div>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed z-10 bottom-0 p-3 bg-white w-full translate-y-full h-screen"
      >
        <CaptainFinishRide setfinishRidePanel={setfinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;

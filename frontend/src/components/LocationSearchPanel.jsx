import React from "react";

const LocationSearchPanel = (props) => {
  const { suggestions, setPickup, setDestination, isPickup } = props;

  return (
    <div>
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => {
            if (isPickup) {
              setPickup(elem);
            } else {
              setDestination(elem);
              props.setvehiclePanelOpen(true);
              props.setpanelOpen(false);
            }
          }}
          className="flex items-center justify-start gap-4 p-3 border-2 border-transparent active:border-black rounded-xl"
        >
          <h2 className="bg-[#eee] px-2 py-1 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium text-sm">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;

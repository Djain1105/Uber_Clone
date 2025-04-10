import React, { createContext, useState } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setcaptain] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(false);

  const updateCaptain = (captainData) => {
    setcaptain(captainData);
  };

  const value = {
    captain,
    setcaptain,
    isLoading,
    setisLoading,
    error,
    seterror,
    updateCaptain,
  };

  return (
    <div>
      <CaptainDataContext.Provider value={value}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  );
};

export default CaptainContext;

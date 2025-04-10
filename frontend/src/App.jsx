import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "./pages/UserHome";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/" element={<Start />} />
        <Route
          path="/user-home"
          element={
            <UserProtectWrapper>
              <UserHome />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user-logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/captain-logout"
          element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

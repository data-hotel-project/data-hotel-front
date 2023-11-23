import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Login from "../pages/GuestLogin";
import GuestRegister from "../pages/GuestRegister";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<GuestRegister />} />
    </Routes>
  );
};

export default RoutesMain;

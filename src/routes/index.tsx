import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Login from "../pages/GuestLogin";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesMain;

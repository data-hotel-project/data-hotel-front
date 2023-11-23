import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Login from "../pages/GuestLogin";
import { GuestDashboard } from "../pages/GuestDashboard";
import { EmployeeDashboard } from "../pages/EmployeeDashboard";
import { AdminDashboard } from "../pages/AdminDashboard";
import GuestRegister from "../pages/GuestRegister";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<GuestRegister />} />
      <Route path="/guestDashboard" element={<GuestDashboard />} />
      <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
      <Route path="/adminDashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default RoutesMain;

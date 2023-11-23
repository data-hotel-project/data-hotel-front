import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import { GuestDashboard } from "../pages/GuestDashboard";
import { EmployeeDashboard } from "../pages/EmployeeDashboard";
import { AdminDashboard } from "../pages/AdminDashboard";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/guestDashboard" element={<GuestDashboard />} />
      <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
      <Route path="/adminDashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default RoutesMain;

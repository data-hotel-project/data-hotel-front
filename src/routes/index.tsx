import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Login from "../pages/GuestLogin";
import { GuestDashboard } from "../pages/GuestDashboard";
import { EmployeeDashboard } from "../pages/EmployeeDashboard";
import { AdminDashboard } from "../pages/AdminDashboard";
import GuestRegister from "../pages/GuestRegister";
import { ProtectedRoutes } from "./ProtectedRoute";
import EmployeeLogin from "../pages/EmployeeLogin";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/employee/login" element={<EmployeeLogin />} />
      <Route path="/register" element={<GuestRegister />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/guestDashboard" element={<GuestDashboard />} />
        <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;

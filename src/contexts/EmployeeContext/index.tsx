import { createContext, useContext, useState } from "react";
import { IEmployeeContext } from "./@types";
import { api } from "../../server/Api";
import { toast } from "react-toastify";
import { IChildrenProps, iEmployee } from "../../interface";
import {
  TEmployeeFormData,
  TEmployeeLonginData,
  TEmployeeUpdateFormData,
} from "../../validators/employeeValidators";
import { AuthContext, useAuth } from "../AuthContext";

export const EmployeeContext = createContext<IEmployeeContext>(
  {} as IEmployeeContext
);

export const EmployeeProvider = ({ children }: IChildrenProps) => {
  const { setUser } = useAuth();

  const [employee, setEmployee] = useState<iEmployee | null>(null);
  const [employees, setEmployees] = useState<iEmployee[] | null>(null);

  const { token, userId, navigate } = useContext(AuthContext);

  const loginEmployee = async (formData: TEmployeeLonginData) => {
    try {
      const response = await api.post("/employee/login/", formData);
      setUser(response.data.user);
      localStorage.setItem("@DataHotel:TOKEN", response.data.access);
      localStorage.setItem("@DataHotel:userID", response.data.user.id);
      toast.success("Login efetuado com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("username or password invalid");
    }
  };

  const createEmployee = async (formData: TEmployeeFormData) => {
    try {
      const response = await api.post("/employee/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Successful registration");
      navigate("employee/login");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const listEmployees = async () => {
    try {
      const response = await api.get("/employee/");
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const retrieveEmployee = async () => {
    try {
      const response = await api.get(`/employee/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const updateEmployee = async (formData: TEmployeeUpdateFormData) => {
    try {
      const response = await api.patch(`/employee/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      navigate(`/${userId}/dashboard`);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const deleteEmployee = async () => {
    try {
      const response = await api.delete(`/employee/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Fired employee");
      setUser(null);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        employee,
        setEmployee,
        employees,
        setEmployees,
        loginEmployee,
        createEmployee,
        listEmployees,
        retrieveEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = () => useContext(EmployeeContext);

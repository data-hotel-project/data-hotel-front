import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IEmployeeContext } from "./@types";
import { api } from "../../server/Api";
import { toast } from "react-toastify";
import { IChildrenProps, iEmployee } from "../../interface";
import {
  TEmployeeFormData,
  TEmployeeUpdateFormData,
} from "../../validators/employeeValidators";

export const EmployeeContext = createContext<IEmployeeContext>(
  {} as IEmployeeContext
);

export const employeeProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<iEmployee | null>(null);
  const [employees, setEmployees] = useState<iEmployee[] | null>(null);

  // const token = localStorage.getItem("@DataHotel:TOKEN");
  const userId = localStorage.getItem("@DataHotel:ID");

  const createEmployee = async (formData: TEmployeeFormData) => {
    try {
      const response = await api.post("/employee/", formData);
      console.log(response.data);
      toast.success("Cadastro com sucesso");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const listEmployees = async () => {
    try {
      const response = await api.post("/employee/");
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const retrieveEmployee = async () => {
    try {
      const response = await api.post(`/employee/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const updateEmployee = async (formData: TEmployeeUpdateFormData) => {
    try {
      const response = await api.post(`/employee/${userId}`, formData);
      setUser(response.data);
      navigate(`/${userId}/dashboard`);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const deleteEmployee = async () => {
    try {
      const response = await api.post(`/employee/${userId}`);
      console.log(response.data);
      toast.success("Funcionário desligado");
      setUser(null);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        navigate,
        user,
        setUser,
        employees,
        setEmployees,
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

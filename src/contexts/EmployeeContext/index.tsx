import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IEmployeeContext } from "./@types";
import { api } from "../../server/Api";
import { toast } from "react-toastify";
import { IChildrenProps, iEmployee } from "../../interface";
import { TEmployeeLoginData } from "../../validators/employeeValidators";

export const EmployeeContext = createContext<IEmployeeContext>(
  {} as IEmployeeContext
);

  

export const EmployeeProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState<iEmployee | null>(null)

  const employeeToken = localStorage.getItem("@data_hotel-employee:TOKEN");
  const employeeId = localStorage.getItem("@data_hotel-employee:ID");

  const employeeRegister = async (formData: TEmployeeFormData) => {
    try {
      const response = await api.post("/employee/", formData);
      setEmployee(response.data.user);
      // localStorage.setItem("@data_hotel-employee:TOKEN", response.data.accessToken);
      // localStorage.setItem("@data_hotel-employee:ID", response.data.user.id);
      toast.success("Cadastro com sucesso");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Tente novamente");
    }
  };

  const employeeLogin = async (formData: TEmployeeLoginData) => {
    try {
      const response = await api.post("/employee/login/", formData);
      console.log(response.data)
      setEmployee(response.data.user);
      localStorage.setItem("@DataHotel:TOKEN", response.data.accessToken);
      localStorage.setItem("@DataHotel:ID", response.data.user.employee.id);
      toast.success("Login efetuado com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Tente novamente");
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        navigate,
        employeeLogin
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = () => useContext(EmployeeContext);

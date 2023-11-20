import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IEmployeeContext } from "./@types";
import { api } from "../../server/Api";
import { toast } from "react-toastify";
import { IChildrenProps } from "../../interface";
import { TEmployeeData, TEmployeeFormData, TEmployeeLonginData } from "../../validators/employeeValidators";

export const EmployeeContext = createContext<IEmployeeContext>(
  {} as IEmployeeContext
);

  

export const EmployeeProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState<TEmployeeData | null>(null)

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

  const userLogin = async (formData: TEmployeeLonginData) => {
    try {
      const response = await api.post("/login", formData);
      setEmployee(response.data.user);
      localStorage.setItem("@KenzieBooks:TOKEN", response.data.accessToken);
      localStorage.setItem("@KenzieBooks:ID", response.data.user.id);
      toast.success("Login com sucesso");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Tente novamente");
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        navigate,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useAuth = () => useContext(EmployeeContext);

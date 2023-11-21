import { NavigateFunction } from "react-router-dom";
import {
  TEmployeeFormData,
  TEmployeeLonginData,
  TEmployeeUpdateFormData,
} from "../../validators/employeeValidators";
import { iEmployee } from "../../interface";

export interface IEmployeeContext {
  navigate: NavigateFunction;
  user: iEmployee | null;
  setUser: React.Dispatch<React.SetStateAction<iEmployee | null>>;
  employees: iEmployee[] | null;
  setEmployees: React.Dispatch<React.SetStateAction<iEmployee[] | null>>;
  loginEmployee: (formData: TEmployeeLonginData) => Promise<void>;
  createEmployee: (formData: TEmployeeFormData) => Promise<void>;
  listEmployees: () => Promise<void>;
  retrieveEmployee: () => Promise<void>;
  updateEmployee: (formData: TEmployeeUpdateFormData) => Promise<void>;
  deleteEmployee: () => Promise<void>;
}

import { NavigateFunction } from "react-router-dom";
import { iLoginRequest } from "../../interface";


export interface IEmployeeContext {
  navigate: NavigateFunction,
  employeeLogin: (data: iLoginRequest) => Promise<void>;
}

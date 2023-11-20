import { z } from "zod";
import { addressSchemaForm } from "./addressValidators";

export const employeeSchemaForm = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  birthdate: z.string(),
  nationality: z.string(),
  contact: z.string(),
  emergency_num: z.string(),
  contact_aditional: z.string().optional(),
  job_function: z.string(),
  is_working: z.string(),
  address: addressSchemaForm,
  hotel: z.string(),
});

export type TEmployeeFormData = z.infer<typeof employeeSchemaForm>


export const employeeSchemaLogin = z.object({
    username: z.string(),
    password: z.string()
})

export type TEmployeeLonginData = z.infer<typeof employeeSchemaLogin>
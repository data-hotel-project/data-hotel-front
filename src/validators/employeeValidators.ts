import { z } from "zod";
import { addressSchema } from "./addressValidators";

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
  address: addressSchema,
  hotel: z.string(),
});

export type TEmployeeFormData = z.infer<typeof employeeSchemaForm>

export const employeeSchema = employeeSchemaForm.extend({
  is_staff: z.boolean(),
  is_superuser: z.boolean(),
});

export type TEmployeeData = z.infer<typeof employeeSchema>

export const employeeSchemaLogin = z.object({
    username: z.string(),
    password: z.string()
})

export type TEmployeeLonginData = z.infer<typeof employeeSchemaLogin>
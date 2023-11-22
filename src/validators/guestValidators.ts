import { z } from "zod";
import { addressSchemaForm, addressSchemaUpdateForm } from "./addressValidators";

export const guestSchemaForm = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  birthdate: z.string(),
  nationality: z.string(),
  contact: z.string(),
  emergency_num: z.string(),
  contact_aditional: z.string().optional(),
  address: addressSchemaForm,
  password_confirmation: z.string(),
})
.refine((data) => data.password === data.password_confirmation, {
  message: "Senhas não são iguais!",
  path: ["password_confirmation"],
});

export type TGuestFormData = z.infer<typeof guestSchemaForm>

export const guestSchemaUpdateForm = z.object({
  username: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  contact: z.string().optional(),
  emergency_num: z.string().optional(),
  contact_aditional: z.string().optional(),
  address: addressSchemaUpdateForm,
});

export type TGuestUpdateFormData = z.infer<typeof guestSchemaUpdateForm>

export const guestSchemaLogin = z.object({
  username: z.string(),
  password: z.string()
})
export type TGuestLoginData = z.infer<typeof guestSchemaLogin>



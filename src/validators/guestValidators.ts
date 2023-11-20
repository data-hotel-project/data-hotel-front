import { z } from "zod";
import { addressSchemaForm } from "./addressValidators";

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
});

export type TGuestFormData = z.infer<typeof guestSchemaForm>


export const guestSchemaLogin = z.object({
    username: z.string(),
    password: z.string()
})

export type TGuestLonginData = z.infer<typeof guestSchemaLogin>
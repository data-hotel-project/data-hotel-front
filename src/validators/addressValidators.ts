import { z } from "zod";

export const addressSchemaForm = z.object({
  street: z
    .string()
    .refine((value) => value.trim() !== "", "Street is required"),
  number: z.string(),
  city: z.string().refine((value) => value.trim() !== "", "City is required"),
  state: z.string().refine((value) => value.trim() !== "", "State is required"),
  complement: z.string(),
});

export type TAddressCreateData = z.infer<typeof addressSchemaForm>;

export const addressSchemaUpdateForm = z.object({
  street: z.string(),
  number: z.string(),
  city: z.string(),
  state: z.string(),
  complement: z.string(),
});

export type TAddressUpdateData = z.infer<typeof addressSchemaForm>;

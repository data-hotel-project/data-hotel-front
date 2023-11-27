import { z } from "zod";
import { addressSchemaForm, addressSchemaUpdateForm } from "./addressValidators";

export const hotelSchemaCreateForm = z.object({
  name: z.string(),
  email: z.string(),
  num_rooms: z.number(),
  full_url: z.unknown(),
  full_url2: z.unknown().optional(),
  full_url3: z.unknown().optional(),
  full_url4: z.unknown().optional(),
  full_url5: z.unknown().optional(),
  address: addressSchemaForm,
});

export type THotelCreateFormData = z.infer<typeof hotelSchemaCreateForm>

export const hotelSchemaUpdateForm = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  num_rooms: z.number().optional(),
  full_url: z.unknown().optional(),
  full_url2: z.unknown().optional(),
  full_url3: z.unknown().optional(),
  full_url4: z.unknown().optional(),
  full_url5: z.unknown().optional(),
  address: addressSchemaUpdateForm,
});

export type THotelUpdateFormData = z.infer<typeof hotelSchemaUpdateForm>
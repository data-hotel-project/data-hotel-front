import { z } from "zod";
import { addressSchemaForm, addressSchemaUpdateForm } from "./addressValidators";

export const hotelSchemaCreateForm = z.object({
  name: z.string(),
  email: z.string(),
  num_rooms: z.number(),
  image: z.unknown(),
  address: addressSchemaForm,
});

export type THotelCreateFormData = z.infer<typeof hotelSchemaCreateForm>

export const hotelSchemaUpdateForm = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  num_rooms: z.number().optional(),
  image: z.unknown().optional(),
  address: addressSchemaUpdateForm,
});

export type THotelUpdateFormData = z.infer<typeof hotelSchemaUpdateForm>
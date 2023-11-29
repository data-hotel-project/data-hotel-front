import { z } from "zod";
import {
  addressSchemaForm,
  addressSchemaUpdateForm,
} from "./addressValidators";

export const hotelSchemaCreateForm = z.object({
  name: z.string(),
  email: z.string(),
  num_rooms: z.number(),
  full_url: z.unknown(),
  full_url2: z.unknown(),
  full_url3: z.unknown(),
  full_url4: z.unknown(),
  full_url5: z.unknown(),
  address: addressSchemaForm,
});

export type THotelCreateFormData = z.infer<typeof hotelSchemaCreateForm>;

export const hotelSchemaUpdateForm = z.object({
  name: z.string(),
  email: z.string(),
  num_rooms: z.number(),
  full_url: z.unknown(),
  full_url2: z.unknown(),
  full_url3: z.unknown(),
  full_url4: z.unknown(),
  full_url5: z.unknown(),
  address: addressSchemaUpdateForm,
});

export type THotelUpdateFormData = z.infer<typeof hotelSchemaUpdateForm>;

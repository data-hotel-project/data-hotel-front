import { z } from "zod";
import { addressSchemaForm } from "./addressValidators";

export const hotelSchemaForm = z.object({
  name: z.string(),
  email: z.string(),
  num_rooms: z.number(),
  image: z.unknown(),
  address: addressSchemaForm,
});

export type THotelFormData = z.infer<typeof hotelSchemaForm>
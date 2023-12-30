import { z } from "zod";

export const roomSchemaCreateForm = z.object({
  number: z.number(),
  quantity: z.number(),
  status: z.string(),
  daily_rate: z.string(),
  hotel: z.string(),
});

export type TRoomCreateData = z.infer<typeof roomSchemaCreateForm>;

export const roomSchemaUpdateForm = z.object({
  number: z.coerce.number().optional(),
  quantity: z.coerce.number().optional(),
  status: z.string().optional(),
  departure_date: z.string().optional(),
  guest: z.string().optional(),
  image: z.string().optional(),
  image2: z.string().optional(),
  image3: z.string().optional(),
  image4: z.string().optional(),
  image5: z.string().optional(),
});

export type TRoomUpdateData = z.infer<typeof roomSchemaUpdateForm>;

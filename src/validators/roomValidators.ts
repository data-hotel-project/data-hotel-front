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
  quantity: z.number().optional(),
  status: z.string().optional(),
  departure_date: z.string().optional(),
  guest: z.string().optional(),
  full_url: z.string().optional(),
  full_url2: z.string().optional(),
  full_url3: z.string().optional(),
  full_url4: z.string().optional(),
  full_url5: z.string().optional(),
});

export type TRoomUpdateData = z.infer<typeof roomSchemaUpdateForm>;

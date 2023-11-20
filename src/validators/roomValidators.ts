import {z} from "zod"

export const roomSchemaForm = z.object({
    number: z.number(),
    quantity: z.number(),
    status: z.string(),
    daily_rate: z.string(),
    hotel: z.string()
})

export type TRoomCreateData = z.infer<typeof roomSchemaForm>
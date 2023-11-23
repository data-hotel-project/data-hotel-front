import {z} from "zod"

export const roomSchemaCreateForm = z.object({
    number: z.number(),
    quantity: z.number(),
    status: z.string(),
    daily_rate: z.string(),
    hotel: z.string()
})

export type TRoomCreateData = z.infer<typeof roomSchemaCreateForm>

export const roomSchemaUpdateForm = z.object({
    number: z.number().optional(),
    quantity: z.number().optional(),
    status: z.string().optional(),
    daily_rate: z.string().optional(),
    hotel: z.string().optional()
})

export type TRoomUpdateData = z.infer<typeof roomSchemaUpdateForm>
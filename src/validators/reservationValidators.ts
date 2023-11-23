import {z} from "zod"

export const reservationSchemaCreateForm = z.object({
    quantity: z.number(),
    entry_date: z.string(),
    departure_date: z.string(),
    hotel: z.string(),
})

export type TReservationCreateData = z.infer<typeof reservationSchemaCreateForm>

export const reservationSchemaUpdateForm = z.object({
    quantity: z.number(),
    entry_date: z.string(),
    departure_date: z.string(),
    hotel: z.string(),
})

export type TReservationUpdateData = z.infer<typeof reservationSchemaUpdateForm>
import {z} from "zod"

export const reservationSchemaForm = z.object({
    quantity: z.number(),
    entry_date: z.string(),
    departure_date: z.string(),
    hotel: z.string(),
})

export type TReservationCreateData = z.infer<typeof reservationSchemaForm>
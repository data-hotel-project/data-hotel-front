import {z} from "zod"

export const addressSchema  = z.object({
    street: z.string(),
    number: z.string(),
    city: z.string(),
    state: z.string(),
    complement: z.string()
})

export type TAddressCreateData = z.infer<typeof addressSchema>
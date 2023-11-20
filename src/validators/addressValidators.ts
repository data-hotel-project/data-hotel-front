import {z} from "zod"

export const addressSchemaForm  = z.object({
    street: z.string(),
    number: z.string(),
    city: z.string(),
    state: z.string(),
    complement: z.string()
})

export type TAddressCreateData = z.infer<typeof addressSchemaForm>
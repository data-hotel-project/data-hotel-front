import {z} from "zod"

export const addressSchemaForm  = z.object({
    street: z.string(),
    number: z.string(),
    city: z.string(),
    state: z.string(),
    complement: z.string()
})

export type TAddressCreateData = z.infer<typeof addressSchemaForm>

export const addressSchemaUpdateForm  = z.object({
    street: z.string().optional(),
    number: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    complement: z.string().optional()
})

export type TAddressUpdateData = z.infer<typeof addressSchemaForm>
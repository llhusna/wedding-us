import {z} from 'zod' 

export const guestInfoSchema = z.object({
    name: z.string().min(1, { message: "Must be 5 or more characters long" }),
    pax: z.string().min(1, { message: "Must be 5 or more characters long" }),
})
import z from 'zod'

export const emailSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
})

export type Email = z.infer<typeof emailSchema>

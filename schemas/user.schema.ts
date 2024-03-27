import { z } from "zod";

export const SignupSchema = z.object({
  password: z.string().min(6),
  email: z.string().email(),
  displayName: z.string().min(3),
  role: z.enum(["organizer", "attendee"])
})

export const SigninSchema = z.object({
  password: z.string().min(6),
  email: z.string().email(),
})
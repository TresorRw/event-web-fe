import { z } from "zod";

export const TicketSchema = z.object({
  contactName: z.string().min(2).max(50),
  contactNumber: z.string().regex(/^\+(?:[0-9] ?){6,14}[0-9]$/),
  eventId: z.string(),
})

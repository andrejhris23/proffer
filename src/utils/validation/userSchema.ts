import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email().optional(),
  image: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  website: z.string().optional(),
  bio: z.string().optional()
});
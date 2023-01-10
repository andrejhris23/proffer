import { z } from "zod";

export const userSchema = z.object({
  email: z
    .string()
    .email('This is not a valid email address!').optional(),
  image: z
    .string()
    .url('This is not a valid url address!')
    .optional(),
  firstName: z
    .string()
    .min(1, 'First Name must be atleast 1 character long!')
    .optional(),
  lastName: z
    .string()
    .min(1, 'Last Name must be atleast 1 character long!')
    .optional(),
  website: z
    .string()
    .url('Website must be a valid url address!')
    .optional(),
  bio: z
    .string()
    .min(1, 'Bio must be atleast 1 character long!')
    .optional(),
});
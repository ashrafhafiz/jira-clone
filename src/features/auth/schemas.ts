import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1, "required"),
});

export const signUpFormSchema = z.object({
  name: z.string().trim().min(1, "required"),
  email: z.string().trim().email(),
  password: z.string().min(8, "minimum of 8 characters required.").max(256),
});

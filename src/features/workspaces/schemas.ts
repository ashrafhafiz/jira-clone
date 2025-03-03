import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().trim().min(1, "required"),
  image: z
    .union([
      z.instanceof(File),
      z.string().transform((value) => (value === "" ? null : value)),
    ])
    .optional(),
});

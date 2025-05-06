import { z } from "zod";

const envSchema = z.object({
  // API Settings
  PORT: z.coerce.number().int().positive(),
  APP_URL: z.string().min(1),
});

export const env = envSchema.parse(process.env);

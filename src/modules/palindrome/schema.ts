import { z } from "zod";

export const PalindromeCheckRequestSchema = z.object({
  text: z
    .string({
      required_error: "Text is required",
      invalid_type_error: "Text must be a string",
    })
    .min(1, "Text cannot be empty"),
});

export type PalindromeCheckRequestSchemaType = z.infer<
  typeof PalindromeCheckRequestSchema
>;

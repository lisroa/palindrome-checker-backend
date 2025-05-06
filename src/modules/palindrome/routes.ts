import { Container } from "typedi";
import { honoPublic } from "../../common/hono";
import { zValidator } from "@hono/zod-validator";
import { PalindromeCheckRequestSchema } from "./schema";
import { PalindromeService } from "./service";

const palindromeService = Container.get(PalindromeService);

export const palindromeRoutes = honoPublic.createApp();

palindromeRoutes.post(
  "check",
  zValidator("json", PalindromeCheckRequestSchema),
  async (c) => {
    const body = c.req.valid("json");

    const isPalindrome = await palindromeService.isPalindrome(body.text);

    return c.json({
      isPalindrome,
    });
  },
);

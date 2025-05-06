import { palindromeRoutes } from "./modules/palindrome/routes";
import { honoPublic } from "./common/hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { env } from "./common/env";

const publicRoutes = honoPublic
  .createApp()
  .route("palindrome", palindromeRoutes);

export const app = honoPublic
  .createApp()
  .basePath("/api")
  .use(logger())
  .use(
    "*",
    cors({
      origin: [env.APP_URL],
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: [
        "POST",
        "GET",
        "DELETE",
        "PUT",
        "PATCH",
        "UPDATE",
        "OPTIONS",
      ],
      exposeHeaders: ["Content-Length"],
      maxAge: 600,
      credentials: true,
    }),
  )
  .route("", publicRoutes);

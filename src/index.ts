import "reflect-metadata";
import { serve } from "@hono/node-server";
import { app } from "./app";
import { env } from "./common/env";

serve(
  {
    fetch: app.fetch,
    port: env.PORT,
  },
  (addr) =>
    console.log(`Server listening on http://${addr.address}:${addr.port} 🚀`),
);

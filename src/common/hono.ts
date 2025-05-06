import { Env } from "hono";
import { HttpBindings } from "@hono/node-server";
import { createFactory } from "hono/factory";

export interface BaseEnv extends Env {
  Bindings: HttpBindings;
}

export const honoPublic = createFactory<BaseEnv>();

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  base: "/bemtorres.github.io/",
  integrations: [tailwind()],
  site: "https://bemtorres.github.io",
  output: "server",
});

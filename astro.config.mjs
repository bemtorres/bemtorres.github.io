import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  ...(process.env.NODE_ENV === 'production' && {
    base: "/bemtorres.github.io/",
    site: "https://bemtorres.github.io",
  }),
  output: "static",
});

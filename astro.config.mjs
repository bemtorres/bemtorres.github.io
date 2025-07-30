import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  ...(process.env.NODE_ENV === 'production' && {
    base: "/",
    site: "https://profebenja.lat",
    build: {
      assets: "_astro"
    }
  }),
  output: "static",
});

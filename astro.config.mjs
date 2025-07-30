import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://bemtorres.github.io',
  base: '/bemtorres.github.io'
}); 
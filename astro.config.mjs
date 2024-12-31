import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://abhilashpanda04.github.io',
  base: '/Portfolio_site',
  integrations: [tailwind()]
});
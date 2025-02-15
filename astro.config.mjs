// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-tutorial-for-me.netlify.app/',
  integrations: [preact()]
});
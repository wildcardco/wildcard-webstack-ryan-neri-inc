import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.neriinc.net',
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/home': '/',
    '/services-1': '/custom-home-building',
    '/cart': '/',
  },
});

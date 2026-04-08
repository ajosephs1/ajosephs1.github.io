import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import path from 'path'

// https://astro.build/config
export default defineConfig({
    site: 'https://www.andrewjosephs.com',
    integrations: [mdx(), sitemap(), tailwind()],
    vite: {
        resolve: {
            alias: {
                '@': path.resolve('./src'),
            },
        },
    },
});

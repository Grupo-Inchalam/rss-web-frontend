// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-plus-jakarta-sans',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/PlusJakartaSans-Regular.woff2'], weight: 400, style: 'normal' },
          { src: ['./src/assets/fonts/PlusJakartaSans-Medium.woff2'], weight: 500, style: 'normal' },
          { src: ['./src/assets/fonts/PlusJakartaSans-SemiBold.woff2'], weight: 600, style: 'normal' },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});

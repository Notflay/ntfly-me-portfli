import { defineConfig } from 'astro/config';

// TODO: cuando tengas dominio propio, pon aquí su URL (para sitemap y metadatos).
export default defineConfig({
  // site: 'https://tu-dominio.dev',
  markdown: {
    // Los bloques ```mermaid se dejan sin resaltar; un script del navegador los dibuja.
    syntaxHighlight: { type: 'shiki', excludeLangs: ['mermaid'] },
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});

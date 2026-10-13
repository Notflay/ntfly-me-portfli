# Portafolio de Sebastián Poma

Sitio estático hecho con [Astro](https://astro.build). Cada proyecto es un archivo Markdown: editas el texto y el sitio se actualiza.

## Probarlo en tu PC

Necesitas Node 18 o superior.

```bash
npm install
npm run dev        # abre http://localhost:4321
```

## Publicarlo

```bash
npm run build      # genera la carpeta dist/
```

Arrastra la carpeta `dist/` a [Netlify Drop](https://app.netlify.com/drop), o conecta el repositorio a Netlify, Vercel o GitHub Pages (comando de build `npm run build`, carpeta `dist`).
La carpeta `dist/` ya viene generada en este zip, así que puedes publicarla sin instalar nada.

## Dónde editar

| Qué | Dónde |
|---|---|
| Inicio (título, sobre mí, stack, contacto) | `src/pages/index.astro` |
| Casos de estudio | `src/content/proyectos/*.md` |
| Capturas | `public/img/` (se enlazan como `/img/...`) |
| Colores y tipografía | `src/styles/global.css`, bloque «VARIABLES» |

### Agregar un proyecto

Crea `src/content/proyectos/mi-proyecto.md` con este encabezado y escribe el contenido debajo:

```md
---
titulo: "Nombre del proyecto"
destacado: "Una frase que lo resuma."
resumen: "Dos o tres líneas para la tarjeta del inicio."
orden: 4
etiquetas: ["SAP CPI", "Groovy"]
imagen: "/img/mi-proyecto/portada.webp"   # opcional
imagenAlt: "Descripción de la imagen"     # opcional
---
```

Los bloques ` ```mermaid ` se dibujan como diagramas. Las imágenes se amplían al hacer clic.

## Antes de publicar

- Las capturas se usan solo con datos de demostración. Revisa cada una por si queda un RUC, un nombre, una URL o un usuario reales.
- No subas los zips de iFlows ni los exports de CPI: contienen credenciales y datos del cliente.
- Las fuentes (Google Fonts) y los diagramas (Mermaid, desde jsDelivr) necesitan internet al abrir el sitio.
- Cuando tengas dominio, descomenta `site` en `astro.config.mjs`.

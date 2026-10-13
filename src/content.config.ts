import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),          // 2 a 3 líneas para la tarjeta del inicio
    orden: z.number(),            // orden en el inicio
    etiquetas: z.array(z.string()),
    destacado: z.string(),        // frase corta bajo el título
    imagen: z.string().optional(), // miniatura para el inicio
    imagenAlt: z.string().optional(),
    flujo: z.array(z.string()).optional(), // origen → integración → destino, para la tarjeta
  }),
});

export const collections = { proyectos };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    date: z.coerce.date().optional(),
    links: z
      .object({
        paper: z.string().url().optional(),
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };

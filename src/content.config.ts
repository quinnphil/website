import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bookmarks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bookmarks' }),
  schema: z.object({
    title: z.string().trim().min(1),
    url: z.string().url().refine(
      (value) => /^https?:\/\//i.test(value),
      'Bookmark URLs must use HTTP or HTTPS',
    ),
    tags: z.array(z.string().trim().min(1)).default([]),
    comment: z.string().trim().optional(),
  }),
});

export const collections = { bookmarks };

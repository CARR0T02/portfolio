// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// Define a `type` and `schema` for each collection
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    sortOrder: z.number(),
    title: z.string(),
    year: z.number(),
    description: z.string(),
    imageSrc: z.string().optional(),
    tags: z.array(z.string()),
    link: z.object({
      GitHub: z.string().url(),
      Live: z.string().url().optional(),
    }),
  }),
});

export const collections = {
  projects,
};

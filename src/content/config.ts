// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// Define a `type` and `schema` for each collection
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    sortOrder: z.number(),
    title: z.string(),
    year: z.number(),
    description: z.string().optional(),
    imageSrc: z.string().optional(),
    tags: z.array(z.string()),
    link: z.object({
      GitHub: z.string().url(),
      Live: z.string().url().optional(),
    }),
  }),
});

const WorkEx = defineCollection({
  type: 'content',
  schema: z.object({
    sortOrder: z.number(),
    position: z.string(),
    company: z.string(),
    url: z.string(),
    tags: z.array(z.string()),
    start: z.string(),
    end: z.string(),
  }),
});

export const collections = {
  projects,
  WorkEx,
};

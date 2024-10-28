import { z, defineCollection } from "astro:content";

const blogsCollection = defineCollection({
  type: "content",
  schema: z.object({
    // layout: z.string().nullable(),
    draft: z.boolean().default(false),
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
  }),
});

export const collections = {
  blogs: blogsCollection,
};

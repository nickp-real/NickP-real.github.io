import { z, defineCollection } from "astro:content";

const blogsCollection = defineCollection({
  type: "content",
  schema: z.object({
    draft: z.boolean().optional().default(false),
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
  }),
});

export const collections = {
  blogs: blogsCollection,
};

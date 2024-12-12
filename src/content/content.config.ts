import { defineCollection, z } from "astro:content";

const productos = defineCollection({

    schema: z.object({
        id: z.string(),
        title: z.string(),
        price: z.string(),
        img: z.string(),
        readtime: z.string(),
        description: z.string(),
        but: z.object({
            spain: z.string(),
            usa: z.string(),
        }),
    }),
});


export const collection = { productos };
import { router, publicProcedure } from "../main/trpc";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const postRouter = router({
  bookCreate: publicProcedure
    .input(
      z.object({
        title: z.string(),
        author: z.string(),
        price: z.number(),
        quantity: z.number(),
      })
    )
    .mutation(async (opts) => {
      const { title, author, price, quantity } = opts.input;
      const createbook = await prisma.book.create({
        data: { title, author, price, quantity },
      });
      return createbook;
    }),
  bookUpdate: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string(),
        author: z.string(),
        price: z.number(),
        quantity: z.number(),
      })
    )
    .mutation(async (opts) => {
      const { id, title, author, price, quantity } = opts.input;
      const updatebook = await prisma.book.update({
        where: { id },
        data: { title, author, price, quantity },
      });
      return updatebook;
    }),
  bookList: publicProcedure.query(async () => {
    const books = await prisma.book.findMany();
    return books;
  }),
  bookById: publicProcedure.input(z.number()).query(async (opts) => {
    const { input } = opts;
    const book = await prisma.book.findUnique({ where: { id: input } });
    return book;
  }),
  bookDelete: publicProcedure.input(z.number()).mutation(async (opts) => {
    const { input } = opts;
    const deletebook = await prisma.book.delete({ where: { id: input } });
    return deletebook;
  }),
  bookAuthor: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    const bookAuthor = await prisma.book.findMany({
      where: { author: { contains: input } },
    });
    return bookAuthor;
  }),
  bookPrice: publicProcedure
    .input(
      z.object({
        minPrice: z.number(),
        maxPrice: z.number(),
      })
    )
    .query(async (opts) => {
      const { minPrice,maxPrice } = opts.input;
      const bookPrice = await prisma.book.findMany({
        where: {
          price: {
            gte: minPrice,
            lte: maxPrice,
          },
        },
      });
      return bookPrice;
    }),
});

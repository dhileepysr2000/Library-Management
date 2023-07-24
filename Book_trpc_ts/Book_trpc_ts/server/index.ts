// // import { createHTTPServer } from "@trpc/server/adapters/standalone";

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// import { publicProcedure, router } from "./trpc";
// // import { userDelete,userCreate } from "./userdelete";
// import { z } from "zod";

// export const appRouter = router({
//   bookList: publicProcedure.query(async () => {
//     const books = await prisma.book.findMany();
//     return books;
//   }),
//   bookById: publicProcedure.input(z.number()).query(async (opts) => {
//     const { input } = opts;
//     const book = await prisma.book.findUnique({ where: { id: input } });
//     return book;
//   }),
//   bookCreate: publicProcedure
//     .input(
//       z.object({
//         title: z.string(),
//         author: z.string(),
//         price: z.number(),
//         quantity: z.number(),
//       })
//     )
//     .mutation(async (opts) => {
//       const { title, author, price, quantity } = opts.input;
//       const createbook = await prisma.book.create({
//         data: { title, author, price, quantity },
//       });
//       return createbook;
//     }),
// });

// export type AppRouter = typeof appRouter;

// // const server = createHTTPServer({
// //   router: appRouter,
// // });

// // server.listen(3031);

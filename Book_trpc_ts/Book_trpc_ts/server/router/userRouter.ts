// import { router, publicProcedure } from '../trpc';
// import { z } from 'zod';

// export const userRouter = router({
//   postCreate: publicProcedure
//     .input(
//       z.object({
//         title: z.string(),
//       }),
//     )
//     .mutation((opts) => {
//       const { input } = opts;
               
// const input: {
//     title: string;
// }
//       // [...]
//     }),
//   postList: publicProcedure.query(() => {
//     // ...
//     return [];
//   }),
// });

// // export type UserRouter = typeof userRouter;
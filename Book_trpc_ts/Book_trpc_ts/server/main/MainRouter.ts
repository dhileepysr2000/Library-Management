import { router } from './trpc';
import { z } from 'zod';

// import { userRouter } from './userRouter';
import { postRouter } from '../router/postRouter';
 
export const appRouter = router({
  // user: userRouter, // put procedures under "user" namespace
  post: postRouter, // put procedures under "post" namespace
});
 
// You can then access the merged route with
// http://localhost:3000/trpc/<NAMESPACE>.<PROCEDURE>
 
// export type AppRouter = typeof appRouter;
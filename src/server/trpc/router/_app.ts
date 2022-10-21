import { router } from '../trpc';
import { userRouter } from './user';

export const appRouter = router({
  // all of your routers will go here
  user: userRouter,
});

export type AppRouter = typeof appRouter;
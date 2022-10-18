import { router } from '../trpc';

export const appRouter = router({
  // all of your routers will go here
});

export type AppRouter = typeof appRouter;
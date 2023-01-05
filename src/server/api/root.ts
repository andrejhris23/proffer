import { router } from './trpc';
import { userRouter } from './routers/user';
import { offerRouter } from './routers/offer';

export const appRouter = router({
  // all of your routers will go here
  user: userRouter,
  offer: offerRouter,
});

export type AppRouter = typeof appRouter;
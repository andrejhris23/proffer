import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import type { Session } from 'next-auth';
import { getServerAuthSession } from '../auth';
import { prisma } from '../db';

type CreateContextOptions = {
  session: Session | null;
}

const createInnerTRPCContext = async (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma
  };
};

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  const session = await getServerAuthSession({ req, res });

  return await createInnerTRPCContext({
    session,
  });
};

const t = initTRPC
  .context<Awaited<ReturnType<typeof createTRPCContext>>>()
  .create({
    transformer: superjson,
    errorFormatter({ shape }) {
      return shape;
    }
});

export const router = t.router;

/**
 * Unprotected procedure 
 **/
export const publicProcedure = t.procedure;

/**
 * Reusable middleware to ensure users are logged in
 **/

const isAuthed = t.middleware(({ctx, next }) => {
  if(!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      // infers the 'session' as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

const isAdmin = t.middleware(({ctx, next}) => {
  if(ctx.session?.user?.role !== 'AGENT') {
    throw new TRPCError({ 
      code: 'FORBIDDEN', 
      message: 'You are not an admin!'
     });
  }

  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session. user },
    },
  });
});

const isTalent = t.middleware(({ctx, next}) => {
  if(ctx.session?.user?.role !== 'TALENT') {
    throw new TRPCError({ 
      code: 'FORBIDDEN', 
      message: 'You are not an admin!'
     });
  }

  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session. user },
    },
  });
});

/**
 * Protected procedure
 **/
export const protectedProcedure = t.procedure.use(isAuthed);
/**
 * Protected procedures with checked roles
 */
export const agentProcedure = protectedProcedure.use(isAdmin);
export const talentProcedure = protectedProcedure.use(isTalent);
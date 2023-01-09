import { router, protectedProcedure, agentProcedure, talentProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { Prisma, Role } from '@prisma/client';
import { z } from 'zod';

const defaultTalentValidator = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  email: true,
  image: true,
  applications: true
});

const defaultAgentValidator = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  email: true,
  image: true,
  offers: true
});

export const userRouter = router({
  
  getAgent: agentProcedure
  .query(async ({ ctx }) => {
    return await ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id
      },
      select: defaultAgentValidator
    });
  }),

  getTalent: talentProcedure
  .query(async ({ ctx }) => {
    return await ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id
      },
      select: defaultTalentValidator
    });
  }),

  setRoleAsAgent: protectedProcedure
  .mutation(async ({ ctx }) => {
    if(ctx.session.user.role) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'you can not change your role once it has been set'
      });
    }

    await ctx.prisma.user.update({
      where: {
        id: ctx.session.user.id
      },
      data: {
        role: Role.AGENT
      }
    });

    return 'Successfully set role to Agent!';
  }),

  setRoleAsTalent: protectedProcedure
  .mutation(async ({ ctx }) => {
    if(ctx.session.user.role) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'you can not change your role once it has been set'
      });
    }

    await ctx.prisma.user.update({
      where: {
        id: ctx.session.user.id
      },
      data: {
        role: Role.TALENT
      }
    });

    return 'Successfully set role to Talent!';
  }),

  update: protectedProcedure
  .input(z.object({
    
  }))
  .mutation(async ({ ctx }) => {

  })
});
 
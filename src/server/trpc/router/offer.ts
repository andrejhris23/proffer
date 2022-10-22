import { router, protectedProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { Prisma } from '@prisma/client';
import z from 'zod';
import type { Context } from '../context';

const defaultOfferValidator = Prisma.validator<Prisma.OfferSelect>()({
  id: true, 
  title: true,
  description: true,
  category: true,
  type: true,
  payRange: true,
  website: true,
  createdAt: true,
  validUntil: true,
});

const checkIfRoleIsAgent = (ctx: Context) => {
  if(ctx.session?.user?.role !== 'AGENT') {
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: 'you have to be an agent in order to create an offer'
    });
  }
}

export const offerRouter = router({
  create: protectedProcedure
  .input(
    z.object({
      title: z.string(),
      category: z.string(),
      description: z.string(),
      type: z.string(),
      payRange: z.string(),
      website: z.string().optional(),
      validUntil: z.date()
    })
    )
  .mutation(async ({ ctx, input }) => {
    checkIfRoleIsAgent(ctx);

    return await ctx.prisma.offer.create({
      data: {
        title: input.title,
        agentId: ctx.session.user.id,
        category: input.category,
        description: input.description,
        type: input.type,
        payRange: input.payRange,
        website: input.website,
        validUntil: input.validUntil
      },
    });
  }),
  update: protectedProcedure
  .input(
    z.object({
      id: z.string().uuid(),
      title: z.string(),
      category: z.string(),
      description: z.string(),
      type: z.string(),
      payRange: z.string(),
      website: z.string().optional(),
      validUntil: z.date()
  }))
  .mutation(async ({ ctx, input }) => {
    checkIfRoleIsAgent(ctx)
    const {id, ...rest} = input;

    return await ctx.prisma.offer.update({
      where: {
        id
      },
      data: {
        ...rest
      }
    });
  }),
  delete: protectedProcedure
  .input(
    z.object({
     offerId: z.string().uuid()
    }))
  .mutation(async ({ ctx, input }) => {
    checkIfRoleIsAgent(ctx);

    await ctx.prisma.offer.delete({
      where: {
        id: input.offerId
      }
    });
  }),
  getAll: protectedProcedure
  .query(async({ ctx }) => {
    return await ctx.prisma.offer.findMany({
      select: defaultOfferValidator
    });
  }),
  // TODO: add filters when quering orders
})
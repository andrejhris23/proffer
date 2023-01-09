import { router, protectedProcedure, agentProcedure, talentProcedure } from '../trpc';
import { Prisma } from '@prisma/client';
import z from 'zod';

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

export const offerRouter = router({

  create: agentProcedure
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

  update: agentProcedure
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

  delete: agentProcedure
  .input(
    z.object({
     offerId: z.string().uuid()
    }))
  .mutation(async ({ ctx, input }) => {
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

  filterByCategory: protectedProcedure
  .input(
    z.object({
      category: z.string()
    })
  )
  .query(async({ ctx, input }) => {
    return await ctx.prisma.offer.findMany({
      where: {
        category: input.category
      },
      select: defaultOfferValidator
    });
  }),
  
  // TODO: add filters when quering orders
})
import * as trpc from '@trpc/server';
import { hash } from 'argon2';

import { Context } from './context';
import { signUpSchema } from '../utils/validation/auth';
import { z } from 'zod';

export const serverRouter = trpc.router<Context>()
  .mutation('signup', {
    input: signUpSchema,
    resolve: async ({ input, ctx }) => {
      const { username, email, password } = input;

      // check if email exists
      const emailExists = await ctx.prisma.user.findFirst({
        where: { email }
      });

      if (emailExists) {
        throw new trpc.TRPCError({
          code: 'CONFLICT',
          message: 'User already exists',
        });
      }

      const hashedPassword = await hash(password);

      const result = await ctx.prisma.user.create({
        data: { username, email, password: hashedPassword }
      });

      return {
        status: 201,
        message: 'Account created successfully',
        result: result.email
      };
    }
  });

export type ServerRouter = typeof serverRouter;
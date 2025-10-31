import { z } from 'zod';

export const createClaimSchema = z.object({
  title: z.string().min(5).max(200),
  description: z.string().min(10),
  domain: z.string().optional()
});

export const voteSchema = z.object({
  claimId: z.string().cuid(),
  choice: z.enum(['yes', 'no', 'abstain'])
});

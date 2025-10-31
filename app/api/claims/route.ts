import { NextRequest } from 'next/server';
import prisma from '../../../../lib/prisma';
import { createClaimSchema } from '../../../../lib/validations';

export async function GET() {
  // public: list claims (paginated later)
  const claims = await prisma.claim.findMany({ include: { author: true } , orderBy: { createdAt: 'desc' } });
  return new Response(JSON.stringify(claims), { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = createClaimSchema.parse(body);
    // TODO: attach current user from session — for now require authorId in body in dev
    const authorId = body.authorId as string | undefined;
    if (!authorId) return new Response(JSON.stringify({ error: 'authorId required in dev' }), { status: 400 });
    const claim = await prisma.claim.create({ data: { ...parsed, authorId } });
    return new Response(JSON.stringify(claim), { status: 201 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 400 });
  }
}

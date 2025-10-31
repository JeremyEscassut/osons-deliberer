import { NextRequest } from 'next/server';
import prisma from '../../../../lib/prisma';
import { voteSchema } from '../../../../lib/validations';

export async function POST(req: NextRequest){
  try{
    const body = await req.json();
    const parsed = voteSchema.parse(body);
    // require voterId in dev payload
    const voterId = body.voterId as string | undefined;
    if (!voterId) return new Response(JSON.stringify({ error: 'voterId required in dev' }), { status: 400 });
    const vote = await prisma.vote.create({ data: { claimId: parsed.claimId, voterId, choice: parsed.choice } });
    return new Response(JSON.stringify(vote), { status: 201 });
  }catch(err:any){
    return new Response(JSON.stringify({ error: err.message }), { status: 400 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { Prisma, PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();
export async function POST(req: NextRequest) {
    const data = await req.json();

    prismaClient.user.create({
        data: {
            username: data.username,
            password: data.password
        }
    })
    
    return NextResponse.json({
        message: "You have signed up"
    })
}

export async function GET() {
    const user = await prismaClient.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}
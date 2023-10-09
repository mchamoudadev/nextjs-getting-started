import { NextResponse } from "next/server";
import prisma from "../../../prisma/client";

import bcrypt from 'bcrypt';

export async function POST(request) {

    const body = await request.json();

    const user = await prisma.user.findUnique({ where: { email: body.email } });
    if (user) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
        data: { email: body.email, hashedPassword }
    });

    return NextResponse.json({ email: newUser.email });

}
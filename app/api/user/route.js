

import { NextResponse } from "next/server";
import userSchema from "./schema";

import prisma from "../../../prisma/client";


export async function GET(request, { params }) {

    const usersInfo = await prisma.user.findMany();

    return NextResponse.json(usersInfo, { status: 200 });

};

export async function POST(request, { params }) {


    try {
        const body = await request.json();

        const validation = userSchema.safeParse(body);

        if (validation.success) {

            // const registerUser = await prisma.user.create({
            //     data: body
            // });

            const registerUser = await prisma.user.create({
                data: body
            });

            return NextResponse.json({ message: registerUser }, { status: 200, });
        } else {
            // @ts-ignore
            return NextResponse.json({ message: validation.error.errors }, { status: 400, });
        }
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400, });
    }


};

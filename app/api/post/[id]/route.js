import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import postSchema from "../schema";



export const GET = async (req, { params }) => {

    const postInfo = await prisma.post.findUnique({ where: { id: params.id } });

    return NextResponse.json(postInfo);

};

export const DELETE = async (req, { params }) => {

    const deletePost = await prisma.post.delete({ where: { id: params.id } });

    return NextResponse.json(deletePost);
};


export const PUT = async (request, { params }) => {


    try {
        const body = await request.json();

        const validation = postSchema.safeParse(body);

        if (validation.success) {


            const { content, title, url } = validation.data;


            const updatedPost = await prisma.post.update({
                where: { id: params.id },
                data: {
                    content: content,
                    url: url,
                    title: title,
                }
            });

            return NextResponse.json({ message: updatedPost }, { status: 200 });
        } else {
            // @ts-ignore
            return NextResponse.json({ message: validation.error.errors }, { status: 400 });
        }
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }


};
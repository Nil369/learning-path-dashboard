import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(req,{params}){
    try {
        const { userId } = auth();

        const { courseId } = params
        const values = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const course = await db.course.update({
            where:{
                id: courseId,
                userId
            },
            data: {
               ...values,
            },
        });

        return NextResponse.json(course); // Return the created course as a JSON response
    } catch (error) {
        console.log("[COURSE_ID]: ", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

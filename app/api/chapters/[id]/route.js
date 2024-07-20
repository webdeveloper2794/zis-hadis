import connectMongoDB from "@/libs/mongodb";
import Chapter from "@/models/chapters";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;

    await connectMongoDB();

    const chapter = await Chapter.findById(id);
    if (!chapter) {
        return NextResponse.json({ message: "Chapter not found" }, { status: 404 });
    }

    return NextResponse.json({ chapter });
}

export async function PUT(request, { params }) {
    const { id } = params;
    const { bookId, chapterNumber, startPage, endPage, title_ar, title_uz } = await request.json();

    await connectMongoDB();

    const chapter = await Chapter.findByIdAndUpdate(id, { bookId, chapterNumber, startPage, endPage, title_ar, title_uz }, { new: true });
    if (!chapter) {
        return NextResponse.json({ message: "Chapter not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Chapter updated", chapter }, { status: 200 });
}

export async function DELETE(request, { params }) {
    const { id } = params;

    await connectMongoDB();

    const chapter = await Chapter.findByIdAndDelete(id);
    if (!chapter) {
        return NextResponse.json({ message: "Chapter not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Chapter deleted" }, { status: 200 });
}

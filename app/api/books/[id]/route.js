import connectMongoDB from "@/libs/mongodb";
import Book from "@/models/books";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const book = await Book.findById(id);
    if (!book) {
        return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }
    return NextResponse.json({ book });
}

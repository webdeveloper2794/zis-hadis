import connectMongoDB from "@/libs/mongodb";
import Book from "@/models/books";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title_arabic, title_uzb, author, biography } = await request.json();
    await connectMongoDB();
    await Book.create({ title_arabic, title_uzb, author, biography });
    return NextResponse.json({message: "Book added"}, { status: 201});
}
export async function GET(request) {   
    await connectMongoDB();
    const books = await Book.find();    
    return NextResponse.json({books});
}

export async function DELETE(request) {
    const { id } = await request.json();
    await connectMongoDB();
    await Book.findByIdAndDelete(id);
    return NextResponse.json({ message: "Book deleted" }, { status: 200 });
}

export async function PUT(request) {
    const { id, title_arabic, title_uzb, author, biography } = await request.json();
    await connectMongoDB();
    const book = await Book.findByIdAndUpdate(id, { title_arabic, title_uzb, author, biography }, { new: true });
    return NextResponse.json({ message: "Book updated", book }, { status: 200 });
}
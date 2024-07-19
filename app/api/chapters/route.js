import connectMongoDB from "@/libs/mongodb";
import Chapter from "@/models/chapters";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { bookId, chapterNumber, startPage, endPage, title_ar, title_uz } = await request.json();
    await connectMongoDB();
    await Chapter.create({ bookId, chapterNumber, startPage, endPage, title_ar, title_uz });
    return NextResponse.json({message: "Chapter added"}, { status: 201 });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const bookId = searchParams.get("bookId");

  await connectMongoDB();

  let chapters;
  if (bookId) {
      chapters = await Chapter.find({ bookId });
  } else {
      chapters = await Chapter.find();
  }

  return NextResponse.json({ chapters });
}

export async function DELETE(request) {
    const { id } = await request.json();
    await connectMongoDB();
    await Chapter.findByIdAndDelete(id);
    return NextResponse.json({ message: "Chapter deleted" }, { status: 200 });
}

export async function PUT(request) {
    const { id, bookId, chapterNumber, startPage, endPage, title_ar, title_uz } = await request.json();
    await connectMongoDB();
    const chapter = await Chapter.findByIdAndUpdate(id, { bookId, chapterNumber, startPage, endPage, title_ar, title_uz }, { new: true });
    return NextResponse.json({ message: "Chapter updated", chapter }, { status: 200 });
}

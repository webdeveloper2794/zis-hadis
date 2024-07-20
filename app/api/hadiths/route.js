import connectMongoDB from "@/libs/mongodb";
import Hadith from "@/models/hadiths";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { chapterId, subChapterNumber, subChapterTitle, arabic_ayah, narratorName, hadith, hadithNumber, reference, accuracy, source } = await request.json();
    await connectMongoDB();
    const newHadith = await Hadith.create({ chapterId, subChapterNumber, subChapterTitle, arabic_ayah, narratorName, hadith, hadithNumber, reference, accuracy, source });
    return NextResponse.json({ message: "Hadith added", hadith: newHadith }, { status: 201 });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const chapterId = searchParams.get("chapterId");

  await connectMongoDB();

  let hadiths;
  if (chapterId) {
      hadiths = await Hadith.find({ chapterId });
  } else {
      hadiths = await Hadith.find();
  }

  return NextResponse.json({ hadiths });
}

export async function DELETE(request) {
    const { id } = await request.json();
    await connectMongoDB();
    await Hadith.findByIdAndDelete(id);
    return NextResponse.json({ message: "Hadith deleted" }, { status: 200 });
}

export async function PUT(request) {
    const { id, chapterId, subChapterNumber, subChapterTitle, arabic_ayah, narratorName, hadith, hadithNumber, reference, accuracy, source } = await request.json();
    await connectMongoDB();
    const updatedHadith = await Hadith.findByIdAndUpdate(id, { chapterId, subChapterNumber, subChapterTitle, arabic_ayah, narratorName, hadith, hadithNumber, reference, accuracy, source }, { new: true });
    return NextResponse.json({ message: "Hadith updated", hadith: updatedHadith }, { status: 200 });
}

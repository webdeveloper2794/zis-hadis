import connectMongoDB from "@/libs/mongodb";
import Hadith from "@/models/hadiths";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const searchQuery = searchParams.get("searchQuery") || "";

  await connectMongoDB();

  let hadiths = [];

  if (searchQuery) {
    const query = {
      $or: [
        { arabic_ayah: { $regex: searchQuery, $options: 'i' } },
        { narratorName: { $regex: searchQuery, $options: 'i' } },
        { "hadith.arabic": { $regex: searchQuery, $options: 'i' } },
        { "hadith.uzbek": { $regex: searchQuery, $options: 'i' } },
        { "hadith.english": { $regex: searchQuery, $options: 'i' } },
        { "hadith.kril": { $regex: searchQuery, $options: 'i' } },
        { accuracy: { $regex: searchQuery, $options: 'i' } },
        { hadithNumber: !isNaN(searchQuery) ? Number(searchQuery) : null }
      ].filter(Boolean)  // Filter out null values to avoid casting errors
    };

    hadiths = await Hadith.find(query).exec();
  } else {
    hadiths = await Hadith.find().exec();
  }

  return NextResponse.json({ hadiths });
}

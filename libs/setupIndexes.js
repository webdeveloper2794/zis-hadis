import connectMongoDB from "@/libs/mongodb";
import Hadith from "@/models/hadiths";

export async function setupTextIndex() {
  await connectMongoDB();
  await Hadith.collection.createIndex({
    "arabic_ayah": "text",
    "narratorName": "text",
    "hadith.arabic": "text",
    "hadith.uzbek": "text",
    "hadith.english": "text",
    "hadith.kril": "text",
    "accuracy": "text",
  });
  console.log("Text indexes created successfully.");
}

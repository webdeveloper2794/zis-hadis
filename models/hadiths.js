import mongoose from "mongoose";

const HadithSchema = new mongoose.Schema(
  {
    chapterId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Chapter",
    },
    subChapterNumber: {
      type: Number,
      required: true,
    },
    subChapterTitle: {
      uz: {
        type: String,
        required: true,
      },
      ar: {
        type: String,
        required: true,
      },
    },
    arabic_ayah: {
      type: String,
      required: false,
    },
    narratorName: {
      type: String,
      required: true,
    },
    hadith: {
      arabic: {
        type: String,
        required: true,
      },
      uzbek: {
        type: String,
        default: "",
      },
      english: {
        type: String,
        default: "",
      },
      kril: {
        type: String,
        default: "",
      },
    },
    hadithNumber: {
      type: Number,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
    accuracy: {
      type: String,
      required: false,
    },
    source: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // This will add createdAt and updatedAt fields
  }
);

const Hadith = mongoose.models.Hadith || mongoose.model("Hadith", HadithSchema);

export default Hadith;


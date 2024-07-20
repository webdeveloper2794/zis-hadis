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
      required: false,
    },
    subChapterTitle: {
      uz: {
        type: String,
        required: false,
      },
      ar: {
        type: String,
        required: false,
      },
    },
    arabic_ayah: {
      type: String,
      required: false,
    },
    narratorName: {
      type: String,
      required: false,
    },
    hadith: {
      arabic: {
        type: String,
        required: false,
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
      required: false,
    },
    reference: {
      type: String,
      required: false,
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


import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema({
  title_arabic: {
    type: String,
    required: true
  },
  title_uzb: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  biography: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

const Book = mongoose.models.Book || mongoose.model("Book", BookSchema);

export default Book;

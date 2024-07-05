import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema({
  arabic_name: {
    type: String,
    required: true
  },
  uzbek_name: {
    type: String,
    required: true
  },
  biography: {
    type: String,
    required: true
  }
});

const Book = mongoose.model.Book || mongoose.model("Book", BookSchema);

export default Book;

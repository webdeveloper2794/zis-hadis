import mongoose from 'mongoose';

const ChapterSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Book'
    },
    chapterNumber: {
        type: Number,
        required: true
    },
    startPage: {
        type: Number,
        required: true
    },
    endPage: {
        type: Number,
        required: true
    },
    title_ar: {
        type: String,
        required: true
    },
    title_uz: {
        type: String,
        required: true
    }
}, {
    timestamps: true // This will add createdAt and updatedAt fields
});

const Chapter = mongoose.models.Chapter || mongoose.model('Chapter', ChapterSchema);

export default Chapter;

import mongoose from 'mongoose';

const ErrorReportSchema = new mongoose.Schema({
    bookId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    chapterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter',
        required: true,
    },
    hadithId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hadith',
        required: true,
    },
    hadithUzTitle: {
        type: String,
        required: true,
    },
    hadithArTitle: {
        type: String,
        required: true,
    },
    errorReport: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ErrorReport = mongoose.models.ErrorReport || mongoose.model('ErrorReport', ErrorReportSchema);

export default ErrorReport;

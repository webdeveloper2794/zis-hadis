import connectMongoDB from "@/libs/mongodb";
import ErrorReport from "@/models/ErrorReport";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { chapterId, hadithId, hadithUzTitle, hadithArTitle, errorReport, bookId } = await request.json();
        await connectMongoDB();
        await ErrorReport.create({ chapterId, hadithId, hadithUzTitle, hadithArTitle, errorReport,bookId });
        return NextResponse.json({ message: "Error report added" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error adding report", error: error.message }, { status: 400 });
    }
}

export async function GET(request) {
    try {
        await connectMongoDB();
        const errorReports = await ErrorReport.find();
        return NextResponse.json({ errorReports }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching reports", error: error.message }, { status: 400 });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();
        await connectMongoDB();
        const result = await ErrorReport.findByIdAndDelete(id);
        if (!result) {
            return NextResponse.json({ message: "Error report not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Error report deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error deleting report", error: error.message }, { status: 400 });
    }
}
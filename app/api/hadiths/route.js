import connectMongoDB from "@/libs/mongodb";
import Hadith from "@/models/hadiths"; 
import { NextResponse } from "next/server"; 

export async function POST(request) { 
    // Define an asynchronous POST function to handle creating new Hadith entries.
    
    const { chapterId, subChapterNumber, subChapterTitle, arabic_ayah, narratorName, hadith, hadithNumber, orderNumber, reference, accuracy, source } = await request.json();
    // Destructure the properties from the incoming request's JSON body, including the new orderNumber field.
    
    await connectMongoDB(); 
    // Connect to the MongoDB database.
    
    const newHadith = await Hadith.create({ chapterId, subChapterNumber, subChapterTitle, arabic_ayah, narratorName, hadith, hadithNumber, orderNumber, reference, accuracy, source });
    // Create a new Hadith document in the database with the provided data.
    
    return NextResponse.json({ message: "Hadith added", hadith: newHadith }, { status: 201 });
    // Return a JSON response indicating the Hadith was successfully added, with a status code of 201 (Created).
}

export async function GET(request) { 
    // Define an asynchronous GET function to handle retrieving Hadith entries.
    
    const { searchParams } = new URL(request.url); 
    // Extract query parameters from the request URL.
    
    const chapterId = searchParams.get("chapterId"); 
    // Retrieve the chapterId query parameter from the URL, if it exists.
    
    await connectMongoDB(); 
    // Connect to the MongoDB database.
    
    let hadiths; 
    // Initialize a variable to store the retrieved Hadith entries.
    
    if (chapterId) { 
        // Check if a chapterId was provided in the query parameters.
        
        hadiths = await Hadith.find({ chapterId }); 
        // If chapterId exists, find and retrieve Hadith entries that match the chapterId.
        
    } else { 
        // If no chapterId is provided...
        
        hadiths = await Hadith.find(); 
        // Retrieve all Hadith entries from the database.
    }

    return NextResponse.json({ hadiths }); 
    // Return the retrieved Hadith entries as a JSON response.
}

export async function DELETE(request) { 
    // Define an asynchronous DELETE function to handle deleting a Hadith entry.
    
    const { id } = await request.json(); 
    // Destructure the id from the incoming request's JSON body.
    
    await connectMongoDB(); 
    // Connect to the MongoDB database.
    
    await Hadith.findByIdAndDelete(id); 
    // Find and delete the Hadith entry by its ID.
    
    return NextResponse.json({ message: "Hadith deleted" }, { status: 200 }); 
    // Return a JSON response indicating the Hadith was successfully deleted, with a status code of 200 (OK).
}

export async function PUT(request) { 
    // Define an asynchronous PUT function to handle updating a Hadith entry.
    
    const { id, chapterId, subChapterNumber, subChapterTitle, arabic_ayah, narratorName, hadith, hadithNumber, orderNumber, reference, accuracy, source } = await request.json();
    // Destructure the properties from the incoming request's JSON body, including the new orderNumber field.
    
    await connectMongoDB(); 
    // Connect to the MongoDB database.
    
    const updatedHadith = await Hadith.findByIdAndUpdate(id, { chapterId, subChapterNumber, subChapterTitle, arabic_ayah, narratorName, hadith, hadithNumber, orderNumber, reference, accuracy, source }, { new: true });
    // Find the Hadith entry by its ID and update it with the provided data, including the orderNumber. 
    // The { new: true } option ensures the updated document is returned.
    
    return NextResponse.json({ message: "Hadith updated", hadith: updatedHadith }, { status: 200 }); 
    // Return a JSON response indicating the Hadith was successfully updated, with a status code of 200 (OK).
}

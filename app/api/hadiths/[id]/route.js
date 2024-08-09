// Importing necessary modules
import connectMongoDB from '@/libs/mongodb'; // Function to connect to MongoDB
import Hadith from '@/models/hadiths'; // Hadith model
import { NextResponse } from 'next/server'; // Next.js response utility

// Handler for GET request to fetch a single hadith by ID
export async function GET(request, { params }) {
  const { id } = params; // Extract the hadithId from the request parameters
  await connectMongoDB(); // Connect to the MongoDB database

  try {
    const hadith = await Hadith.findById(id); // Find the hadith by ID in the database
    if (!hadith) { // If the hadith is not found
      return NextResponse.json({ message: 'Hadith not found' }, { status: 404 }); // Return a 404 response
    }
    return NextResponse.json({ hadith }); // Return the found hadith
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 }); // Return a 500 response if an error occurs
  }
}

// Handler for PUT request to update a single hadith by ID
export async function PUT(request, { params }) {
  const { id } = params; // Extract the hadithId from the request parameters
  // Extract the hadith data from the request body
  const { chapterId, subChapterNumber, subChapterTitle, arabic_ayah, narratorName, hadith, hadithNumber, orderNumber,reference, accuracy, source } = await request.json();
  await connectMongoDB(); // Connect to the MongoDB database

  try {
    // Update the hadith in the database by ID and return the updated hadith
    const updatedHadith = await Hadith.findByIdAndUpdate(
      id, // The ID of the hadith to update
      { chapterId, subChapterNumber, subChapterTitle, arabic_ayah, narratorName, hadith, hadithNumber,orderNumber, reference, accuracy, source }, // The new hadith data
      { new: true, runValidators: true } // Options to return the updated document and run validation
    );

    if (!updatedHadith) { // If the hadith is not found
      return NextResponse.json({ message: 'Hadith not found' }, { status: 404 }); // Return a 404 response
    }

    return NextResponse.json({ message: 'Hadith updated', hadith: updatedHadith }, { status: 200 }); // Return the updated hadith
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 }); // Return a 500 response if an error occurs
  }
}

// Handler for DELETE request to delete a single hadith by ID
export async function DELETE(request, { params }) {
  const { id } = params; // Extract the hadithId from the request parameters
  await connectMongoDB(); // Connect to the MongoDB database

  try {
    const deletedHadith = await Hadith.findByIdAndDelete(id); // Delete the hadith by ID in the database

    if (!deletedHadith) { // If the hadith is not found
      return NextResponse.json({ message: 'Hadith not found' }, { status: 404 }); // Return a 404 response
    }

    return NextResponse.json({ message: 'Hadith deleted' }, { status: 200 }); // Return a success message
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 }); // Return a 500 response if an error occurs
  }
}

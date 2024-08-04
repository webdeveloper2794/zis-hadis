import connectMongoDB from "@/libs/mongodb"; // Import the function to connect to MongoDB
import User from "@/models/User"; // Import the User model
import bcrypt from "bcrypt"; // Import bcrypt for hashing passwords
import { NextResponse } from "next/server"; // Import NextResponse for sending responses

export async function POST(request) { // Define the POST function to handle the registration request
  const { email, password, role } = await request.json(); // Destructure the email, password, and role from the request body

  if (!email || !password ) { // Check if any of the required fields are missing
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 }); // If missing, return a 400 status with an error message
  }

  try {
    await connectMongoDB(); // Connect to the MongoDB database

    const existingUser = await User.findOne({ email }); // Check if a user with the given email already exists
    if (existingUser) { // If the user exists
      return NextResponse.json({ error: "User already exists" }, { status: 409 }); // Return a 409 status with an error message
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the user's password using bcrypt

    const newUser = new User({ // Create a new user object with the email, hashed password, and role
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save(); // Save the new user to the database

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 }); // Return a 201 status with a success message
  } catch (error) { // Catch any errors that occur during the process
    console.error("Error registering user:", error); // Log the error to the console
    return NextResponse.json({ error: "Internal server error" }, { status: 500 }); // Return a 500 status with an error message
  }
}

// app/api/login/route.js
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET; // Ensure to set a secret key

export async function POST(request) {
  const { email, password } = await request.json();
  
  await connectMongoDB();

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Compare provided password with stored hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Generate a JWT token with user role
  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  // Set token in cookies
  const response = NextResponse.json({ message: "Login successful" });
  response.cookies.set('token', token, {
    httpOnly: true,
    maxAge: 60 * 60, // 1 hour
  });

  return response;
}

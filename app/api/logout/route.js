// app/api/logout/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  const response = NextResponse.json({ message: "Logout successful" });
  response.cookies.set('token', '', {
    httpOnly: true,
    maxAge: 0,
  });

  return response;
}

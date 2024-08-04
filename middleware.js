// /middleware.js
import { NextResponse } from 'next/server';
import {jwtDecode} from 'jwt-decode';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;

  console.log("Token:", token); // Log the token to see if it's being retrieved

  if (!token) {
    if (request.nextUrl.pathname.startsWith('/admin')) {
      console.log("No token found, redirecting to login"); // Log when no token is found
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  try {
    const decodedToken = jwtDecode(token); // Use jwt-decode for decoding

    console.log("Decoded Token:", decodedToken); // Log the decoded token

    if (request.nextUrl.pathname.startsWith('/admin') && decodedToken.role !== 'Admin') {
      console.log("Token role is not Admin, redirecting to login"); // Log if role check fails
      return NextResponse.redirect(new URL('/login', request.url));
    }

    request.user = decodedToken;
    return NextResponse.next();
  } catch (error) {
    console.error("Error decoding token:", error); // Log any errors during token decoding

    if (request.nextUrl.pathname.startsWith('/admin')) {
      console.log("Token decoding failed, redirecting to login"); // Log if decoding fails
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/admin/:path*'], // Apply middleware to all admin routes
};

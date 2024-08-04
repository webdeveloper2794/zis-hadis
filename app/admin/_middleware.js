// // /admin/_middleware.js

// import { NextResponse } from "next/server";
// import authMiddleware from "@/authMiddleware";

// export function middleware(req) {
//   const response = authMiddleware(req);
//   if (response.status === 401) {
//     return response;
//   }

//   if (req.user.role !== "Admin") {
//     return NextResponse.redirect("/login");
//   }

//   return NextResponse.next();
// }

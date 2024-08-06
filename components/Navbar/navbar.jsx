'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiAdminFill } from "react-icons/ri";
import jwtDecode from "jwt-decode";
import { useRouter,useSearchParams  } from "next/navigation";
// import { getToken } from "@/utils/getToken";

const Navbar = () => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const searchParams = 44;
  const search = 45;
  const [searchQuery, setSearchQuery] = useState(search || "");

  const handleSearch = (event) => {
    event.preventDefault();
    const trimmedSearchQuery = searchQuery.trim();
    if (trimmedSearchQuery) {
      router.push(`/hadith?search=${encodeURIComponent(trimmedSearchQuery)}`);
    }
  };

  // const token = getToken();
  // const isAdmin = token ? jwtDecode(token.value).role === "Admin" : false;
  const isAdmin = true;
  console.log(isAdmin);

  return (
    <div className="flex items-center navbar bg-green-500  backdrop-blur-sm p-0 fixed z-10">
      <div className="navbar-start">
        <Link href="/" className="flex items-center md:pl-10">
          <Image src="/logo2.png" alt="logo" width={60} height={60} />
          {/* <span className="text-xl font-sans font-thin text-green-600">ZIS-Hadis.com</span> */}
        </Link>
      </div>
      
      <div className="navbar-end">
      <form onSubmit={handleSearch} className="flex items-center gap-1">
          <input
            type="text"
            className="input  input-sm text-green-900 focus:outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>

        {/* Admin icon */}
        {isAdmin && (
          <Link href="/admin" className="btn btn-ghost btn-circle">
            <RiAdminFill className="text-xl text-white" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

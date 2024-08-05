import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiAdminFill } from "react-icons/ri";
import { jwtDecode } from "jwt-decode";
import { getToken } from "@/utils/getToken";
// import { AuthContext } from '@/utils/AuthContext';
const Navbar = () => {
  const token = getToken();
  const isAdmin = token ? jwtDecode(token.value).role === "Admin" : false;
  console.log(isAdmin);
  return (
    <div className="navbar bg-green-500 fixed z-10">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl text-white font-serif">
          <Image src="/logo.png" alt="" width={60} height={60} />
        </Link>
      </div>
      <div className="navbar-center">
        {/* <a className="btn btn-ghost text-xl text-green-800">ZIS-Hadis</a> */}
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
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

        {/* admin icon  */}
        {isAdmin && (
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Link
                href="/admin"
                className="btn btn-ghost  text-white font-serif"
              >
                <RiAdminFill className="text-xl" />
              </Link>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

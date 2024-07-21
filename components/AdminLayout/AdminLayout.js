"use client"
import { useState } from 'react';
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; // Importing a menu icon from react-icons

const AdminLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col pt-16 w-full p-0">
      <header className="bg-green-100 w-full text-gray-700 py-4 fixed z-50">
        <div className="container mx-auto flex justify-between items-center px-2">
          <div className="text-lg font-semibold text-gray-400 ">Admin Panel</div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/admin" className="text-sm px-4 hover:text-green-500 transition-colors duration-300">
              Home
            </Link>
            <Link href="/admin/addbook" className="text-sm px-1 hover:text-green-500 transition-colors duration-300">
              Add Book
            </Link>
            <Link href="/admin/addchapter" className="text-sm px-1 hover:text-green-500 transition-colors duration-300">
              Add Chapter
            </Link>
            <Link href="/admin/addhadith" className="text-sm px-1 hover:text-green-500 transition-colors duration-300">
              Add Hadith
            </Link>
            <Link href="/admin/errorreport" className="text-sm px-1 hover:text-green-500 transition-colors duration-300">
              Error page
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-xl">
              <FiMenu />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-2 p-4 bg-green-200">
              <Link href="/admin" className="text-sm hover:text-green-500 transition-colors duration-300" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/admin/addbook" className="text-sm hover:text-green-500 transition-colors duration-300" onClick={toggleMenu}>
                Add Book
              </Link>
              <Link href="/admin/addchapter" className="text-sm hover:text-green-500 transition-colors duration-300" onClick={toggleMenu}>
                Add Chapter
              </Link>
              <Link href="/admin/addhadith" className="text-sm hover:text-green-500 transition-colors duration-300" onClick={toggleMenu}>
                Add Hadith
              </Link>
              <Link href="/admin/errorreport" className="text-sm hover:text-green-500 transition-colors duration-300" onClick={toggleMenu}>
                Error page
              </Link>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
    </div>
  );
};

export default AdminLayout;

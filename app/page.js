"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Books from "@/components/Books/books";
import HadithPageComponent from "@/components/Hadith/Hadith";
// import Hadiths from "@/components/Hadiths/hadiths"; // Import the Hadiths component

export default function Home() {
  const [books, setBooks] = useState([]);
  const [hadiths, setHadiths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/api/books");
        setBooks(response.data.books);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`/api/search?searchQuery=${encodeURIComponent(searchQuery)}`);
      setHadiths(response.data.hadiths);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <main className="flex w-full min-h-screen flex-col items-center bg-[#ebfcef] pt-16 p-6"
      style={{
        background: `url("/background.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}>
      <h1 className="text-2xl sm:text-4xl text-green-700 py-10 font-serif text-center">Rosululloh <span className="text-gray-900 font-bold">صلى الله عليه و سلم</span> Hadislari to'plami</h1>

      <form onSubmit={handleSearch} className="input input-bordered flex items-center gap-2 bg-green-100 shadow-xl input-accent w-full lg:w-1/2 ">
        <input 
          type="text" 
          className="grow input-bordered input-accent input-sm text-green-900" 
          placeholder="Search" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button type="submit" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="green"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </button>
      </form>

      {loading && <p className="text-green-700">Loading...</p>}
      {error && <p className="text-green-700">Error: {error.message}</p>}
      {searchQuery && hadiths.length > 0 ? (
        <HadithPageComponent hadiths={hadiths} />
        // <h1 className="text-black">fetched</h1>
      ) : (
        <Books books={books} />
      )}
    </main>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter,useSearchParams  } from "next/navigation";
import HadithPageComponent from "@/components/Hadith/Hadith";
import { Suspense } from 'react'

export default function HadithPage() {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const searchParams = 45;
  const search = 45;
  // const search = 'search';
  console.log('%c%s', 'color: #ff0000', search);


  const [hadiths, setHadiths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(search || "");

  useEffect(() => {
    const fetchHadiths = async () => {
      if (search) {
        setLoading(true);
        try {
          const response = await axios.get(`/api/search?searchQuery=${encodeURIComponent(search)}`);
          setHadiths(response.data.hadiths);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchHadiths();
  }, [search]);

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   if (searchQuery.trim()) {
  //     router.push(`/hadith?search=${encodeURIComponent(searchQuery)}`);
  //   }
  // };

  return (
    <main
      className="flex w-full min-h-screen flex-col items-center bg-[#ebfcef] pt-16 p-6"
      style={{
        background: `url("/background.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* <form
        onSubmit={handleSearch}
        className="input input-bordered flex items-center gap-2 bg-green-100 shadow-xl input-accent w-full lg:w-1/2"
      >
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
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form> */}

      {loading && <p className="text-green-700">Loading...</p>}
      {error && <p className="text-green-700">Error: {error.message}</p>}

      {searchQuery && hadiths.length > 0 && (
        <HadithPageComponent hadiths={hadiths} searchTerm={searchQuery} />
      )}
    </main>
  );
}

export function Hadith() {
    return (
      // You could have a loading skeleton as the `fallback` too
      <Suspense>
        <HadithPage />
      </Suspense>
    )
  }
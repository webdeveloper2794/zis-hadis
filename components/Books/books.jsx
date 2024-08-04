"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const  Books = ({ books }) => {
    // const [books, setBooks] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchBooks = async () => {
    //         try {
    //             const response = await axios.get("/api/books");
    //             setBooks(response.data.books);
    //             setLoading(false);
    //         } catch (error) {
    //             setError(error);
    //             setLoading(false);
    //         }
    //     };

    //     fetchBooks();
    // }, []);
    
    const handleBookClick = (bookId) => {
        // router.push(`/books/${bookId}`);
    };
    // if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading books</div>;
    return (
        <div className="container mx-auto xl:px-40 py-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {books && books.map(book => (
                    <Link key={book.id}  href={`/books/${book._id}`}>
                        <div className="relative group">
                            <div
                                className="flex justify-between items-center p-2 bg-white border hover:border-2  rounded-sm shadow-lg cursor-pointer transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg px-10"
                                onClick={() => handleBookClick(book.id)}
                            >
                                <h2 className="text-green-600 font-serif text-base font-extralight mb-2">{book.title_uzb}</h2>
                                <p className="text-green-600 font-serif text-xl font-semibold mb-2">{book.title_arabic}</p>
                                
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-green-100 opacity-0 transition-opacity duration-300 group-hover:opacity-25 rounded-lg"></div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Books

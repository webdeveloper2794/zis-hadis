"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { CiSquareRemove } from "react-icons/ci";
import { useRouter } from "next/navigation";
export default function Page() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();


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
  const handleEdit = (bookId) => {
    // Navigate to the edit book page
    router.push(`/admin/book/${bookId}`);
    // router.push(`/admin/editbook`);
  };


  const handleRemove = async (bookId) => {
    try {
      const response = await axios.delete(`/api/books`, {
        data: { id: bookId }, // Include the book ID in the request body
      });
      if (response.status === 200) {
        setBooks(books.filter(book => book._id !== bookId));
        alert("Kitob muvaffaqiyatli o'chirildi!");
      }
    } catch (error) {
      console.error("Kitobni o'chirishda xatolik yuz berdi:", error);
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading books</div>;
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-6 text-green-900">Books</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {books && books.map((book) => (
            <div key={book._id} className="bg-white p-4 rounded shadow flex flex-col justify-between">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-lg font-semibold">{book.title_arabic}</h2>
                  <h2 className="text-lg font-semibold">{book.title_uzb}</h2>
                </div>

                <div className="flex space-x-2">
                  <div className="lg:tooltip" data-tip="Edit">
                    <button
                      onClick={() => handleEdit(book._id)}
                      className=" text-green-500 hover:text-green-700"
                    >
                      <FaEdit className="text-lg" />
                    </button>
                  </div>
                  <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Diqqat!</h3>
                      <p className="py-4">Bu kitobni o'chirishga aminmisiz?</p>
                      <div className="modal-action">
                        <form method="dialog">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-red-700 hover:text-white">✕</button>
                          </form>
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn text-red-500 hover:bg-red-700 hover:text-white" onClick={() => handleRemove(book._id)}>Ok</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  <div className="lg:tooltip" data-tip="Remove">
                    <button
                      // onClick={() => handleRemove(book._id)}
                      onClick={() => document.getElementById('my_modal_5').showModal()}
                      className=" text-red-500 hover:text-red-700"
                    >
                      <CiSquareRemove className="text-xl" />
                    </button>
                  </div>


                </div>
              </div>
              <p className="text-sm">{book.biography}</p>
              <div className="mt-4">
                <Link href={`/admin/book/${book._id}/chapter`} className="text-green-500 hover:underline">
                  Manage Chapters
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

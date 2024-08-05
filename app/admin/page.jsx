"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import Image from "next/image";
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
    const confirmDelte = confirm("Bu kitobni o'chirishga aminmisiz?");
    if (confirmDelte) {
      try {
        const response = await axios.delete(`/api/books`, {
          data: { id: bookId }, // Include the book ID in the request body
        });
        if (response.status === 200) {
          setBooks(books.filter((book) => book._id !== bookId));
          alert("Kitob muvaffaqiyatli o'chirildi!");
        }
      } catch (error) {
        console.error("Kitobni o'chirishda xatolik yuz berdi:", error);
      }
    }
  };
  if (loading)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-green-500 mt-32"></span>
      </div>
    );

  if (error)
    return (
      <div className="m-auto bg-transparent mt-32 text-red-500 text-xl text-center flex items-center justify-center font-semibold">
        Kitob bo&apos;limlarini yuklashda hatolik yuz berdi !
      </div>
    );
  return (
    <>
      <div className=" w-full p-2">
        <h1 className="text-2xl font-bold mb-6 text-green-900">Kitoblar</h1>

        <div className="overflow-x-auto">
          <table className="table text-slate-900">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Kitob Nomi</th>
                <th>Bo&apos;lim</th>
                <th>Tahrirlash</th>
                <th>O&apos;chirish</th>
              </tr>
            </thead>
            <tbody>
              {books &&
                books.map((book, index) => (
                  <tr key={book._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <Image
                              src="https://images.unsplash.com/photo-1491841651911-c44c30c34548?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Avatar Tailwind CSS Component"
                              width={50}
                              height={50}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{book.title_uzb}</div>
                          <div className="text-lg text-right">
                            {book.title_arabic}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button className="btn btn-outline btn-success group">
                        <Link
                          href={`/admin/book/${book._id}/chapter`}
                          className="text-gray-800 group-hover:text-white "
                        >
                          Bo&apos;limlar
                        </Link>
                      </button>
                      {/* <Link
                          href={`/admin/book/${book._id}/chapter`}
                          className="text-green-500 "
                        >
                          Manage Chapters
                        </Link> */}
                    </td>
                    <td>
                      <button
                        onClick={() => handleEdit(book._id)}
                        className=" text-green-500 hover:text-green-700"
                      >
                        <FaEdit className="text-lg" />
                      </button>
                    </td>
                    <th>
                      
                        <button
                          onClick={() => handleRemove(book._id)}
                          className="btn btn-ghost btn-xs text-red-500 hover:text-red-700"
                        >
                          <MdDeleteSweep className="text-xl" />
                        </button>
                  
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {books &&
            books.map((book) => (
              <div
                key={book._id}
                className="bg-white p-4 rounded shadow flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h2 className="text-lg font-semibold">
                      {book.title_arabic}
                    </h2>
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

                    <div className="lg:tooltip" data-tip="Remove">
                      <button
                        onClick={() => handleRemove(book._id)}
                        className=" text-red-500 hover:text-red-700"
                      >
                        <MdDeleteSweep className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/admin/book/${book._id}/chapter`}
                    className="text-green-500 hover:underline"
                  >
                    Manage Chapters
                  </Link>
                </div>
              </div>
            ))}
        </div> */}
      </div>
    </>
  );
}

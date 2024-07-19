"use client";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Page() {
  const [titleUz, setTitleUz] = useState("");
  const [titleAr, setTitleAr] = useState("");
  const [chapterNumber, setChapterNumber] = useState(null);
  const [endPage, setEndPage] = useState(null);
  const [startPage, setStartPage] = useState(null);
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleUzTitleChange = (e) => {
    setTitleUz(e.target.value);
    console.log(titleUz);
  };
  const handleArTitleChange = (e) => {
    setTitleAr(e.target.value);
  };
  const handleChapterChange = (e) => {
    setChapterNumber(e.target.value);
  };
  const handleStartChange = (e) => {
    setStartPage(e.target.value);
  };
  const handleEndChange = (e) => {
    setEndPage(e.target.value);
  };
  const handleChapterSubmit = async (e) => {
    e.preventDefault();
    const newChapter = {
      bookId: selectedBookId,
      title_uz: titleUz,
      title_ar: titleAr,
      chapterNumber: Number(chapterNumber),
      startPage: Number(startPage),
      endPage: Number(endPage),
    };
    try {
      const response = await axios.post("/api/chapters", newChapter);
      if (response.status === 201) {
        // Clear the form fields after successful submission
        setTitleUz("");
        setTitleAr("");
        setChapterNumber(null);
        setEndPage(null);
        setStartPage(null);
        setSelectedBookId("");
        alert("Bo'lim muvaffaqiyatli qo'shildi!");
      }
    } catch (error) {
      console.error("Kitobni qo'shishda xatolik yuz berdi:", error);
    }
  };

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
  return (
    <main className="flex w-full  flex-col items-center pt-10 p-2">
      <h1 className="text-2xl text-green-900 font-bold mb-6">Add Chapter</h1>
      <form
        className="flex flex-wrap justify-between w-full mb-4 border-solid  p-6 rounded-md shadow-xl  bg-white/75"
        onSubmit={handleChapterSubmit}
      >
        <select className="select select-success w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2" defaultValue="" onChange={(e) => setSelectedBookId(e.target.value)}
        required>
          <option disabled value="">
          Kitob nomini tanlang
        </option>
        {loading ? (
          <option>Loading...</option>
        ) : error ? (
          <option>Error loading books</option>
        ) : (
          books.map((book) => (
            <option key={book._id} value={book._id}>
              {book.title_uzb} / {book.title_arabic}
            </option>
          ))
        )}
        </select>
        <input
          type="text"
          placeholder="Bo\'lim raqami"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={chapterNumber}
          onChange={handleChapterChange}
        />
        <input
          type="text"
          placeholder="Bo\'lim nomi o\'zbekcha"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={titleUz}
          onChange={handleUzTitleChange}
        />
        <input
          type="text"
          placeholder="Bo\'lim nomi arabcha"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={titleAr}
          onChange={handleArTitleChange}
        />
        
        <input
          type="number"
          placeholder="Bet boshlanish raqami"
          className="input input-bordered input-accent  min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={startPage}
          onChange={handleStartChange}
        />
        <input
          type="number"
          placeholder="Bet tugash raqami"
          className="input input-bordered input-accent  min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={endPage}
          onChange={handleEndChange}
        />
        <button
          className="shadow-lg m-2 btn btn-outline btn-success bg-green-500"
          style={{ color: "white" }}
          type="submit"
        >
          Saqlash
        </button>
      </form>
    </main>
  );
}


"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export default function Page() {
  const [formData, setFormData] = useState({
    titleUz: "",
    titleAr: "",
    subChapterNumber: null,
    arabicAyah: "",
    narratorName: "",
    hadithArabic: "",
    hadithUzbek: "",
    hadithEnglish: "",
    hadithKril: "",
    hadithNumber: null,
    reference: "",
    accuracy: "",
    source: "",
    selectedChapterId: "",
  });
  const [books, setBooks] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingBooks, setLoadingBooks] = useState(true);
  const [loadingChapters, setLoadingChapters] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/api/books");
        setBooks(response.data.books);
        setLoadingBooks(false);
      } catch (error) {
        setError(error);
        setLoadingBooks(false);
      }
    };

    fetchBooks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "selectedBookId") {
      fetchChapters(value); // Fetch chapters when book is selected
      setSelectedBookId(value);
    }
  };

  const fetchChapters = async (bookId) => {
    try {
      setLoadingChapters(true);
      const response = await axios.get(`/api/chapters?bookId=${bookId}`);
      setChapters(response.data.chapters);
      setLoadingChapters(false);
    } catch (error) {
      setError(error);
      setLoadingChapters(false);
    }
  };

  const handleHadithSubmit = async (e) => {
    e.preventDefault();
    const newHadith = {
      chapterId: formData.selectedChapterId,
      subChapterNumber: Number(formData.subChapterNumber),
      subChapterTitle: {
        uz: formData.titleUz,
        ar: formData.titleAr,
      },
      arabic_ayah: formData.arabicAyah,
      narratorName: formData.narratorName,
      hadith: {
        arabic: formData.hadithArabic,
        uzbek: formData.hadithUzbek,
        english: formData.hadithEnglish,
        kril: formData.hadithKril,
      },
      hadithNumber: Number(formData.hadithNumber),
      reference: formData.reference,
      accuracy: formData.accuracy,
      source: formData.source,
    };
    try {
      const response = await axios.post("/api/hadiths", newHadith);
      if (response.status === 201) {
        // Clear the form fields after successful submission
        setFormData({
          titleUz: "",
          titleAr: "",
          subChapterNumber: "",
          arabicAyah: "",
          narratorName: "",
          hadithArabic: "",
          hadithUzbek: "",
          hadithEnglish: "",
          hadithKril: "",
          hadithNumber: "",
          reference: "",
          accuracy: "",
          source: "",
        });
        toast.success("Hadis muvaffaqiyyatli qo'shildi!");
      }
    } catch (error) {
      toast.error("Hadis qo'shishda hatolik yuz berdi!");
      console.error("Error adding hadith:", error);
    }
  };
  return (
    <main className="flex w-full  flex-col items-center pt-10 p-2">
      <h1 className="text-2xl text-green-900 font-bold mb-6">Add Hadith</h1>
      <form
        className="flex flex-wrap justify-between w-full mb-4 border-solid  p-6 rounded-md shadow-xl  bg-white/75"
        onSubmit={handleHadithSubmit}
      >
        <select
        className="select select-success w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
        name="selectedBookId"
        value={formData.selectedBookId || ""}
        onChange={handleChange}
        required
      >
        <option disabled value="">
          Select a book
        </option>
        {loadingBooks ? (
          <option>Loading books...</option>
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
        <select
        className="select select-success w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
        name="selectedChapterId"
        value={formData.selectedChapterId}
        onChange={handleChange}
        required
      >
        <option disabled value="">
          Select a chapter
        </option>
        {loadingChapters ? (
          <option>Loading chapters...</option>
        ) : error ? (
          <option>Error loading chapters</option>
        ) : (
          chapters && chapters.map((chapter) => (
            <option key={chapter._id} value={chapter._id}>
              {chapter.title_uz} / {chapter.title_ar}
            </option>
          ))
        )}
      </select>
        <input
          type="number"
          name="subChapterNumber"
          placeholder="Bob raqami"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.subChapterNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="titleUz"
          placeholder="Bob nomi o'zbekcha"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.titleUz}
          onChange={handleChange}
        />
        <input
          type="text"
          name="titleAr"
          placeholder="Bob nomi arabcha"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.titleAr}
          onChange={handleChange}
        />
        <input
          type="text"
          name="arabicAyah"
          placeholder="Oyatdan dalil"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.arabicAyah}
          onChange={handleChange}
        />
        <input
          type="text"
          name="narratorName"
          placeholder="Rivoyat qiluvchi"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.narratorName}
          onChange={handleChange}
        />
        <textarea
          className="w-full textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          placeholder="Ozbekcha Hadis matni"
          name="hadithUzbek"
          value={formData.hadithUzbek}
          onChange={handleChange}
        ></textarea>
        <textarea
          className="w-full textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          placeholder="Kirilcha Hadis matni"
          value={formData.hadithKril}
          name="hadithKril"
          onChange={handleChange}
        ></textarea>
        <textarea
          className="w-full textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          placeholder="Arabcha Hadis matni"
          name="hadithArabic"
          value={formData.hadithArabic}
          onChange={handleChange}
        ></textarea>
        <textarea
          className="w-full textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          placeholder="Inglizcha Hadis matni"
          name="hadithEnglish"
          value={formData.hadithEnglish}
          onChange={handleChange}
        ></textarea>
        {/* <input
          type="number"
          placeholder="Bolim raqami"
          className="input input-bordered input-accent  min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          name="subChapterNumber"
          value={formData.subChapterNumber}
          onChange={handleChange}
        /> */}
        <input
          type="number"
          placeholder="Hadis raqami"
          className="input input-bordered input-accent  min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          name="hadithNumber"
          value={formData.hadithNumber}
          onChange={handleChange}
        />
         <input
          type="text"
          placeholder="Reference"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.reference}
          name="reference"
          onChange={handleChange}
        />
         <input
          type="text"
          name="accuracy"
          placeholder="Sanadi"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.accuracy}
          onChange={handleChange}
        />
         <input
          type="text"
          name="source"
          placeholder="Hadis manbasi"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.source}
          onChange={handleChange}
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


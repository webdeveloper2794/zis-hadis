"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { toast } from "react-toastify";
//chapte update page================================================================
export default function Page({ params }) {
  const router = useRouter();

  const { id, chapterId } = params;
  const [titleUz, setTitleUz] = useState("");
  const [titleAr, setTitleAr] = useState("");
  const [chapterNumber, setChapterNumber] = useState(null);
  const [endPage, setEndPage] = useState(null);
  const [startPage, setStartPage] = useState(null);
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
    try {
      const updatedChapter = {
        bookId:id,
        title_uz: titleUz,
        title_ar: titleAr,
        chapterNumber: Number(chapterNumber),
        startPage: Number(startPage),
        endPage: Number(endPage),
      };
      const response = await axios.put(`/api/chapters/${chapterId}`, updatedChapter);
      if (response.status === 200) {
        toast.success("Muvaffaqiyyatli yangilandi!");
        router.push(`/admin/book/${id}/chapter`);
      }
    } catch (error) {
      toast.error("Hatolik yuz berdi!");
      console.error("Error updating chapter:", error);
    }
  };

  useEffect(() => {
    if (chapterId) {
      // Fetch book data when the component mounts or id changes
      const fetchBookData = async () => {
        try {
          const response = await axios.get(`/api/chapters/${chapterId}`);
          const chapter = response.data.chapter;
          setTitleUz(chapter.title_uz);
          setTitleAr(chapter.title_ar);
          setChapterNumber(chapter.chapterNumber);
          setEndPage(chapter.startPage);
          setStartPage(chapter.endPage);
          // setSelectedBookId(chapter.bookId);
        } catch (error) {
          toast.error("Hatolik yuz berdi!");
          console.error('Error fetching book data:', error);
        }
      };
      fetchBookData();
    }
  }, [chapterId]);

  
  return (
    <main className="flex w-full  flex-col items-center pt-10 p-2">
      <h1 className="text-2xl text-green-900 font-bold mb-6">Edit Chapter</h1>
      <form
        className="flex flex-wrap justify-between w-full mb-4 border-solid  p-6 rounded-md shadow-xl  bg-white/75"
        onSubmit={handleChapterSubmit}
      >
        <input
          type="text"
          placeholder="Bo'lim raqami"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={chapterNumber}
          onChange={handleChapterChange}
        />
        <input
          type="text"
          placeholder="Bo'lim nomi o'zbekcha"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={titleUz}
          onChange={handleUzTitleChange}
        />
        <input
          type="text"
          placeholder="Bo'lim nomi arabcha"
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

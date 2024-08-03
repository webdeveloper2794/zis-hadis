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
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
        setLoading(false);
        toast.success("Muvaffaqiyyatli yangilandi!");
        router.push(`/admin/book/${id}/chapter`);
      }
    } catch (error) {
      toast.error("Hatolik yuz berdi!");
      setLoading(false);
      console.error("Error updating chapter:", error);
    }
  };

  useEffect(() => {
    if (chapterId) {
      // Fetch book data when the component mounts or id changes
      const fetchBookData = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`/api/chapters/${chapterId}`);
          const chapter = response.data.chapter;
          setTitleUz(chapter.title_uz);
          setTitleAr(chapter.title_ar);
          setChapterNumber(chapter.chapterNumber);
          setEndPage(chapter.startPage);
          setStartPage(chapter.endPage);
          // setSelectedBookId(chapter.bookId);
          setLoading(false);
        } catch (error) {
          toast.error("Hatolik yuz berdi!");
          setLoading(false);
          console.error('Error fetching book data:', error);
        }
      };
      fetchBookData();
    }
  }, [chapterId]);

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
    <main className="flex w-full flex-col items-center p-2">
    <h1 className="text-2xl text-green-900 font-bold mb-6">Bo&apos;limni Tahrirlash</h1>
    <form
      className="flex flex-wrap justify-between w-full mb-4 border-solid p-6 rounded-md shadow-xl bg-white/75"
      onSubmit={handleChapterSubmit}
    >
      <div className="w-full min-w-xs m-2">
        <label className="block text-green-900 font-bold mb-2" htmlFor="chapterNumber">
          Bo&apos;lim raqami
        </label>
        <input
          id="chapterNumber"
          type="text"
          placeholder="Bo'lim raqami"
          className="input input-bordered input-accent w-full bg-transparent focus:border-2 focus:outline-none text-green-900"
          value={chapterNumber}
          onChange={handleChapterChange}
        />
      </div>
      <div className="w-full min-w-xs m-2">
        <label className="block text-green-900 font-bold mb-2" htmlFor="titleUz">
          Bo&apos;lim nomi o&apos;zbekcha
        </label>
        <input
          id="titleUz"
          type="text"
          placeholder="Bo'lim nomi o'zbekcha"
          className="input input-bordered input-accent w-full bg-transparent focus:border-2 focus:outline-none text-green-900"
          value={titleUz}
          onChange={handleUzTitleChange}
        />
      </div>
      <div className="w-full min-w-xs m-2">
        <label className="block text-green-900 font-bold mb-2" htmlFor="titleAr">
          Bo&apos;lim nomi arabcha
        </label>
        <input
          id="titleAr"
          type="text"
          placeholder="Bo'lim nomi arabcha"
          className="input input-bordered input-accent w-full bg-transparent focus:border-2 focus:outline-none text-green-900"
          value={titleAr}
          onChange={handleArTitleChange}
        />
      </div>
      <div className="w-full min-w-xs m-2">
        <label className="block text-green-900 font-bold mb-2" htmlFor="startPage">
          Bet boshlanish raqami
        </label>
        <input
          id="startPage"
          type="number"
          placeholder="Bet boshlanish raqami"
          className="input input-bordered input-accent w-full bg-transparent focus:border-2 focus:outline-none text-green-900"
          value={startPage}
          onChange={handleStartChange}
        />
      </div>
      <div className="w-full min-w-xs m-2">
        <label className="block text-green-900 font-bold mb-2" htmlFor="endPage">
          Bet tugash raqami
        </label>
        <input
          id="endPage"
          type="number"
          placeholder="Bet tugash raqami"
          className="input input-bordered input-accent w-full bg-transparent focus:border-2 focus:outline-none text-green-900"
          value={endPage}
          onChange={handleEndChange}
        />
      </div>
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

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { toast } from "react-toastify";
//Hadith page
const Page = ({ params }) => {
  const [hadiths, setHadiths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chapter, setChapter] = useState([]);
  // const router = useRouter();
  const { id, chapterId } = params;

  const fetchHadiths = async () => {
    try {
      if (chapterId) {
        const response = await axios.get(`/api/hadiths?chapterId=${chapterId}`);
        const responseChapter = await axios.get(`/api/chapters/${chapterId}`);
        const chapter = responseChapter.data.chapter;
        setChapter(chapter);
        setHadiths(response.data.hadiths);
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHadiths();
  }, [chapterId]);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Hadisni o'chirib yuborishga aminmisiz?");
    if (confirmDelete) {
      try {
        const response = await axios.delete(`/api/hadiths/${id}`);
        if (response.status === 200) {
          toast.success("Hadis muvaffaqiyatli o'chirildi!"); // Notify success
          fetchHadiths();
        }
      } catch (error) {
        toast.error("Hadisni o'chirishda hatolik yuz berdi!"); // Notify error
        console.error("Error deleting hadith:", error);
      }
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading hadiths</div>;
  return (
    <div className="text-4xl text-slate-900 text-center min-h-screen pt-20 w-full p-4 md:p-10 md:pt-0 max-w-screen-lg m-auto">
      <div>
        <header className="w-full flex justify-between">
          <h1 className="text-xl">
            <span className="m-1">{chapter.chapterNumber}.</span>
            {chapter.title_uz}
          </h1>
          <h1 className="text-xl">{chapter.title_ar}</h1>
        </header>
        {hadiths
          .sort((a, b) => a.orderNumber - b.orderNumber)
          .map((hadith, index) => (
            <div key={hadith._id}>
              <section className="flex justify-between my-4">
                <Link
                  href={`/admin/book/${id}/chapter/${chapterId}/hadith/${hadith._id}`}
                >
                  <button className="btn btn-outline btn-success  group">
                    <FaEdit className="group-hover:text-white" />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(hadith._id)}
                  className="btn btn-outline btn-error group"
                >
                  <MdDeleteSweep className="group-hover:text-white" />
                </button>
              </section>
              {hadith.subChapterNumber || hadith.subChapterNumber > 0 && (
                <section className="flex flex-wrap justify-between my-4">
                  <h1 className="text-base">
                    <span className="m-2">{hadith.subChapterNumber}.Bob: </span>
                    {hadith.subChapterTitle.uz}
                  </h1>
                  <h1 className="text-lg text-right">
                    {hadith.subChapterTitle.ar} :باب
                  </h1>
                </section>
              )}

              <section className="flex flex-wrap justify-between my-4">
                {hadith.arabic_ayah && (
                  <h1 className="text-xl text-right w-full" dir="rtl">
                    {" "}
                    {hadith.arabic_ayah}
                  </h1>
                )}
              </section>
              <main className="bg-white shadow-xl p-2 text-left w-full rounded-md">
                <p className="text-sm font-semibold text-green-900 p-2">
                  {hadith.narratorName}dan:
                </p>

                <article className="flex flex-col md:flex-row justify-between items-start gap-2">
                  <div
                    role="tablist"
                    className="tabs tabs-boxed bg-white w-full md:w-1/2 max-w-[40rem]"
                  >
                    <input
                      type="radio"
                      name={`my_tabs_${index}`}
                      role="tab"
                      className="tab text-gray-800"
                      aria-label="O'zbekcha"
                      defaultChecked
                    />
                    <div role="tabpanel" className="tab-content p-2">
                      <p className="text-sm md:text-sm text-justify">
                        {hadith.hadith.uzbek}
                      </p>
                    </div>

                    <input
                      type="radio"
                      name={`my_tabs_${index}`}
                      role="tab"
                      className="tab"
                      aria-label="Узбекча"
                    />
                    <div role="tabpanel" className="tab-content p-2">
                      <p className="text-sm text-justify">
                        {hadith.hadith.kril}
                      </p>
                    </div>

                    <input
                      type="radio"
                      name={`my_tabs_${index}`}
                      role="tab"
                      className="tab"
                      aria-label="English"
                    />
                    <div role="tabpanel" className="tab-content p-2">
                      <p className="text-sm text-justify">
                        {hadith.hadith.english}
                      </p>
                    </div>
                  </div>
                  <div className="p-2 max-w-[40rem] w-full  md:w-1/2 pt-10">
                    <p
                      className="text-lg text-justify "
                      style={{ textAlignLast: "right" }}
                    >
                      {hadith.hadith.arabic}
                    </p>
                  </div>
                </article>
                <footer className="p-4">
                  <p className="text-xs text-left text-green-900">
                    {hadith.reference}
                  </p>
                  <p className="text-xs text-left text-green-900">
                    {hadith.hadithNumber}-hadis
                  </p>
                </footer>
              </main>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;

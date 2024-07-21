//chapter list page
"use client"
import { useEffect, useState,useCallback  } from "react";
import Link from "next/link";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { HiChevronRight } from "react-icons/hi";
const Page = ({ params }) => {
    const { id } = params;
    const [chapters, setChapters] = useState([]);
    const [error, setError] = useState(null);
    const [loadingChapters, setLoadingChapters] = useState(false);

    const fetchChapters = useCallback(async () => {
        try {
            setLoadingChapters(true);
            const response = await axios.get(`/api/chapters?bookId=${id}`);
            setChapters(response.data.chapters);
        } catch (error) {
            setError(error);
        } finally {
            setLoadingChapters(false);
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            fetchChapters();
        }
    }, [id, fetchChapters]);

    const handleRemove = async (chapterId) => {
        const confirmDelte = confirm("Bu bo'limni o'chirishga aminmisiz?");
        if (confirmDelte) {
            try {
                setLoadingChapters(true);
                const response = await axios.delete(`/api/chapters/${chapterId}`);
                if (response.status === 200) {
                    alert("Chapter deleted successfully!");
                    fetchChapters();
                }
                setLoadingChapters(false);
            } catch (error) {
                setError(error);
                console.error("Error deleting chapter:", error);
                setLoadingChapters(false);
            }

        }
    };
    const sortedChapters = [...chapters].sort((a, b) => a.chapterNumber - b.chapterNumber);
    if (loadingChapters) return <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-green-500 mt-32"></span>
    </div>;
    if (error) return <div className="m-auto bg-transparent mt-32 text-red-500 text-xl text-center flex items-center justify-center font-semibold">Kitob bo&apos;limlarini yuklashda hatolik yuz berdi !</div>;
    return (
        <div className='py-20 px-4 bg-transparent rounded-md'>

            <div className="overflow-x-auto py-10 max-w-screen-lg m-auto" >
                <table className="table bg-transparent">
                    <thead>
                        <tr>
                            <th className="text-green-900 text-lg font-semibold hover:text-green-500">#</th>
                            <th className='text-lg text-green-900 font-semibold'>Bob</th>
                            <th className='text-lg text-green-900 font-semibold'>باب</th>                        </tr>
                    </thead>
                    <tbody>
                        {sortedChapters.map((chapter, index) => (
                            <tr
                                key={chapter._id}
                                className={`bg-white/50 hover:bg-green-100 transition-colors duration-300 cursor-pointer ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-100'}`}
                            >
                                <td className='text-green-900'>{chapter.chapterNumber}</td>
                                <td className='text-green-900 text-lg font-semibold group '>
                                    
                                    <Link href={`/admin/book/${id}/chapter/${chapter._id}/hadith`} className="group-hover:text-green-500 flex items-center" >
                                    <HiChevronRight className="group-hover:text-green-500" />
                                        {chapter.title_uz}
                                    </Link>
                                </td>
                                <td className='text-green-900 text-lg font-semibold'>
                                    {chapter.title_ar}
                                </td>
                                <td className='text-green-900'>
                                    <Link href={`/admin/book/${id}/chapter/${chapter._id}`} >
                                        <button className="btn btn-outline btn-success  group"><FaEdit className="group-hover:text-white" /></button>
                                    </Link>
                                </td>

                                <td className='text-green-900'><button onClick={() => handleRemove(chapter._id)} className="btn btn-outline btn-error group"><MdDeleteSweep className="group-hover:text-white" /></button></td>
                                <td className='text-green-900'>
                                    <Link href={`/admin/addchapter`} >
                                        <button className="btn btn-outline btn-info group"><MdOutlinePostAdd className="group-hover:text-white" />
                                        </button>
                                    </Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Page
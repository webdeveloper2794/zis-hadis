"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
const Page = ({ params }) => {
    const { id } = params;
    const [chapters, setChapters] = useState([]);
    const [book, setBook] = useState([]);
    const [error, setError] = useState(null);
    const [loadingChapters, setLoadingChapters] = useState(false);
    const fetchChapters = async () => {
        try {
            setLoadingChapters(true);
            const response = await axios.get(`/api/chapters?bookId=${id}`);
            const bookResponse = await axios.get(`/api/books/${id}`);
            const book = bookResponse.data.book;
            setBook(book);
            setChapters(response.data.chapters);
            setLoadingChapters(false);
        } catch (error) {
            setError(error);
            setLoadingChapters(false);
        }
    };
    useEffect(() => {
        if (id) {
            fetchChapters();
        }
    }, [id]);

    const sortedChapters = [...chapters].sort((a, b) => a.chapterNumber - b.chapterNumber);

    if (loadingChapters) return <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-green-500 mt-32"></span>
    </div>;

    if (error) return <div className="m-auto bg-transparent mt-32 text-red-500 text-xl text-center flex items-center justify-center font-semibold">Kitob bo&apos;limlarini yuklashda hatolik yuz berdi !</div>;
    return (
        <div className='py-20 px-4 bg-transparent rounded-md w-full min-h-screen'>
            <div className='bg-green-100 p-6 shadow-xl max-w-screen-lg m-auto rounded-md'>
                                
                <header className=' text-gray-600 flex justify-between py-2'>
                    <h1 className='font-semibold text-gray-950'>{book.title_uzb}</h1>
                    <h1 className='font-semibold text-gray-950'>{book.title_arabic}</h1>
                </header>
                <p className='text-gray-700 text-sm'>{book.biography}</p>
            </div>
            <div className="overflow-x-auto py-10 max-w-screen-lg m-auto" >
                <table className="table bg-transparent">
                    <thead>
                        <tr>
                            <th className="text-green-900/50 font-normal text-lg  hover:text-green-500">#</th>
                            <th className='text-lg text-green-900/50 font-normal'>Bob</th>
                            <th className='text-lg text-green-900/50 font-normal text-right'>باب</th>
                            <th className='text-lg text-green-900/50 font-normal text-right'>Betlar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedChapters.map((chapter, index) => (
                            <tr
                                key={chapter.id}
                                className={`bg-white/50 hover:bg-green-100 transition-colors duration-300 cursor-pointer ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-100'}`}
                            >
                                <td className='text-green-900'>{chapter.chapterNumber}</td>
                                <td>
                                    <Link href={`/books/${id}/chapters/${chapter._id}`} className="text-green-900 text-sm md:text-lg font-semibold hover:text-green-500">
                                        {chapter.title_uz}
                                    </Link>
                                </td>
                                <td className='text-green-900 text-sm md:text-lg font-semibold  text-right'>
                                    <Link href={`/books/${id}/chapters/${chapter._id}`} className="text-green-900 text-sm md:text-lg font-semibold hover:text-green-500">
                                        {chapter.title_ar}
                                    </Link>
                                </td>
                                <td className='text-green-900 text-right'>{chapter.startPage}-{chapter.endPage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};


export default Page

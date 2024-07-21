//chapter list page
"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { HiChevronRight } from "react-icons/hi";
import { toast } from "react-toastify";
const Page = () => {
    const [errorReport, setErrorReport] = useState([]);
    const [error, setError] = useState(null);
    const [loadingChapters, setLoadingChapters] = useState(false);

    const fetchChapters = async () => {
        try {
            setLoadingChapters(true);
            const response = await axios.get(`/api/error`);
            setErrorReport(response.data.errorReports);
            setLoadingChapters(false);
        } catch (error) {
            setError(error);
            setLoadingChapters(false);
        }
    };
    useEffect(() => {
        
            // Fetch book data when the component mounts or id changes          
            fetchChapters();
        
    }, []);

    const handleRemove = async (errorId) => {
        const confirmDelte = confirm("Bu bo'limni o'chirishga aminmisiz?");
        if (confirmDelte) {
            try {
                // setLoadingChapters(true);
                const response = await axios.delete('/api/error', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: { id: errorId } 
                });
        
                if (response.status === 200) {
                    toast.success('Error report deleted:', response.data.message);
                    fetchChapters();
                    return response.data.message;
                } else {
                    toast.error('Error deleting report:', response.data.message);
                    return response.data.message;
                }
                setLoadingChapters(false);
            } catch (error) {
                // setError(error);
                toast.error("Error deleting report")
                console.error("Error deleting chapter:", error);
                setLoadingChapters(false);
            }

        }
    };
    
    if (loadingChapters) return <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-green-500 mt-32"></span>
    </div>;
    if (error) return <div className="m-auto bg-transparent mt-32 text-red-500 text-xl text-center flex items-center justify-center font-semibold">Kitob bo&apos;limlarini yuklashda hatolik yuz berdi !</div>;
    return (
        <div className='py-20 px-4 bg-transparent rounded-md'>

            <div className="overflow-x-auto py-10 max-w-screen-lg m-auto" >
                <table className="table bg-transparent">
                    
                    <tbody>
                        {errorReport.map((error, index) => (
                            <tr
                                key={error._id}
                                className={`bg-white/50 hover:bg-green-100 transition-colors duration-300 cursor-pointer ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-100'}`}
                            >
                                {/* <td className='text-green-900'>{chapter.chapterNumber}</td> */}
                                <td className='text-green-900 text-lg font-semibold group '>
                                    
                                    <Link href={`/admin/book/${error.bookId}/chapter/${error.chapterId}/hadith/${error.hadithId}`} className="group-hover:text-green-500 flex items-center" >
                                    <HiChevronRight className="group-hover:text-green-500" />
                                        {error.hadithUzTitle}
                                    </Link>
                                </td>
                                <td className='text-green-900 text-lg font-semibold'>
                                    {error.hadithArTitle}
                                </td>
                                <td className='text-green-900 text-lg font-semibold'>
                                    {error.errorReport}
                                </td>
                                <td className='text-green-900'>
                                    <Link href={`/admin/book/${error.bookId}/chapter/${error.chapterId}/hadith/${error.hadithId}`} >
                                        <button className="btn btn-outline btn-success  group"><FaEdit className="group-hover:text-white" /></button>
                                    </Link>
                                </td>

                                <td className='text-green-900'><button onClick={() => handleRemove(error._id)} className="btn btn-outline btn-error group"><MdDeleteSweep className="group-hover:text-white" /></button></td>                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Page
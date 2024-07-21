//chapter list page
"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
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
        <div className='py-16 px-4 bg-transparent rounded-md'>
<h1 className="text-center text-lg text-green-900 capitalize">error report page</h1>
            <div className="overflow-x-auto py-8 max-w-screen-lg m-auto" >
                {errorReport.map((error, index) => (
                    <main className='bg-white shadow-xl p-2 text-left w-full rounded-md my-4'>
                        <Link href={`/admin/book/${error.bookId}/chapter/${error.chapterId}/hadith/${error.hadithId}`} >
                            <button className="btn btn-outline btn-success  group mx-2"><FaEdit className="group-hover:text-white" /></button>
                        </Link>
                        <button onClick={() => handleRemove(error._id)} className="btn btn-outline btn-error group"><MdDeleteSweep className="group-hover:text-white" /></button>
                        {/* <p className='text-sm font-semibold text-green-900 p-2'>{hadith.narratorName}dan:</p> */}

                        <article className='flex flex-col md:flex-row justify-between items-start gap-2'>
                            <div role="tablist" className="tabs tabs-boxed bg-white text-gray-800  w-full md:w-1/2 max-w-[40rem]">

                                <input type="radio" name={`my_tabs_${index}`} role="tab" className="tab text-gray-800 ring-1" aria-label="O'zbekcha" defaultChecked />
                                <div role="tabpanel" className="tab-content p-2">
                                    <p className='text-sm md:text-sm text-justify text-gray-500'>
                                        {error.hadithUzTitle}
                                    </p>
                                </div>


                                <input type="radio" name={`my_tabs_${index}`} role="tab" className="tab" aria-label="Arabcha" />
                                <div role="tabpanel" className="tab-content p-2">
                                    <p className='text-sm text-right text-gray-500'>
                                        {error.hadithArTitle}
                                    </p>
                                </div>


                            </div>
                            {error.errorReport && (
                                <>
                                    <div className='p-2 max-w-[40rem] w-full  md:w-1/2 pt-1 flex  flex-col'>
                                    <p className='text-lg  text-red-600 text-center font-semibold'>Habar <MdOutlineReportGmailerrorred /></p>
                                        <p className='text-sm  text-gray-500 bg-red-100 p-2 my-1 rounded-md' >
                                            {error.errorReport}
                                        </p>


                                    </div>

                                </>
                            )}

                        </article>

                    </main>
                ))}

                
            </div>
        </div>
    )
}

export default Page
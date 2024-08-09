"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { FaCopy } from "react-icons/fa6";
import { toast } from "react-toastify";
//Hadith page
const Page = ({ params }) => {
    const [hadith, setHadith] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [chapter, setChapter] = useState([]); 
    const [selectedLanguages, setSelectedLanguages] = useState({
        
        uzbek: false,
        english: false,
        kril: false,
        arabic: false,
    });
    // console.log('%c%s', 'color: #2afc00', JSON.stringify(hadith.hadith.arabic));
    const { id, chapterId, hadithId } = params;

    const fetchHadiths = async () => {
        try {
            if (chapterId && hadithId) {
                const response = await axios.get(`/api/hadiths/${hadithId}`);
                const responseChapter = await axios.get(`/api/chapters/${chapterId}`);
                const chapter = responseChapter.data.chapter;
                setChapter(chapter);
                setHadith(response.data.hadith);
            }
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHadiths();
    }, [chapterId,hadithId]);

    const toggleCheckbox = (language) => {
        setSelectedLanguages((prev) => ({
            ...prev,
            [language]: !prev[language],
        }));
    };

    const copySelected = () => {
        const copyText = hadith.map(hadith => {
            let textToCopy = '';
            if (selectedLanguages.uzbek && hadith.hadith.uzbek) {
                textToCopy += `Uzbek: ${hadith.hadith.uzbek}\n`;
            }
            if (selectedLanguages.english && hadith.hadith.english) {
                textToCopy += `English: ${hadith.hadith.english}\n`;
            }
            if (selectedLanguages.kril && hadith.hadith.kril) {
                textToCopy += `Kril: ${hadith.hadith.kril}\n`;
            }
            if (selectedLanguages.arabic && hadith.hadith.arabic) {
                textToCopy += `Arabic: ${hadith.hadith.arabic}\n`;
            }
            return textToCopy;
        }).join("\n");

        navigator.clipboard.writeText(copyText).then(() => {
            toast.success("Copied to clipboard!");
        }).catch(err => {
            toast.error("Failed to copy!");
        });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading hadiths</div>;
    return (
        <div className='text-4xl text-slate-900 text-center min-h-screen pt-20 w-full p-4 md:p-10 md:pt-20 max-w-screen-lg m-auto'>
            <div>
                <header className='w-full flex justify-between'>
                    <h1 className='text-xl'>
                        <span className='m-1'>{chapter.chapterNumber}.</span>{chapter.title_uz}
                    </h1>
                    <h1 className='text-xl'>{chapter.title_ar}</h1>
                </header>
               
                    <div key={hadith._id}>
                        {hadith.subChapterNumber && (
                            <section className='flex flex-wrap justify-between my-4 '>
                                {hadith.subChapterTitle.uz ? <h1 className='text-base'><span className='m-2'>({hadith.subChapterNumber}).Bob: </span>{hadith.subChapterTitle.uz}</h1> : <h1 className='text-base'>({hadith.subChapterNumber}).Bob: </h1>}

                                {hadith.subChapterTitle.ar ? (
                                    <h1 className='text-lg text-right' dir="rtl">
                                        ({hadith.subChapterNumber}).   {hadith.subChapterTitle.ar}
                                    </h1>
                                ) : (
                                    <h1 className='text-base'>
                                        ({hadith.subChapterNumber}):باب
                                    </h1>
                                )}
                            </section>
                        )}

                        <section className='flex flex-wrap justify-between my-4'>
                            {hadith.arabic_ayah && <h1 className='text-xl text-right w-full' dir="rtl"> {hadith.arabic_ayah}</h1>}
                        </section>
                        {hadith.hadith && hadith.hadith.arabic && hadith.hadith.uzbek && hadith.hadith.kril && hadith.hadith.english && (
                            <main className='bg-white shadow-xl p-2 text-left w-full rounded-md'>
                                <p className='text-sm font-semibold text-green-900 p-2'>{hadith.narratorName}</p>

                                <article className='flex flex-col md:flex-row justify-between items-start gap-2'>
                                    <div role="tablist" className="tabs tabs-boxed bg-white w-full md:w-1/2 max-w-[40rem]">
                                        {hadith.hadith.uzbek && (
                                            <>
                                                <input type="radio" name={`my_tabs_1`} role="tab" className="tab text-gray-800" aria-label="O'zbekcha" defaultChecked />
                                                <div role="tabpanel" className="tab-content p-2">
                                                    <p className='text-sm md:text-sm text-justify'>
                                                        {hadith.hadith.uzbek}
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                        {hadith.hadith.kril && (
                                            <>
                                                <input type="radio" name={`my_tabs_1`} role="tab" className="tab" aria-label="Ўзбекча" />
                                                <div role="tabpanel" className="tab-content p-2">
                                                    <p className='text-sm text-justify'>
                                                        {hadith.hadith.kril}
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                        {hadith.hadith.english && (
                                            <>
                                                <input type="radio" name={`my_tabs_1`} role="tab" className="tab" aria-label="English" />
                                                <div role="tabpanel" className="tab-content p-2">
                                                    <p className='text-sm text-justify'>
                                                        {hadith.hadith.english}
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    {hadith.hadith.arabic && (
                                        <>
                                            <div className='p-2 max-w-[40rem] w-full  md:w-1/2 pt-10 flex flex-col'>
                                                <p className='text-lg text-justify ' style={{ textAlignLast: "right" }}>
                                                    {hadith.hadith.arabic}
                                                </p>


                                            </div>

                                        </>
                                    )}

                                </article>
                                <footer className='p-4 bg-green-100/25 flex justify-between items-center' >
                                    <div>
                                        {hadith.reference && (
                                            <p className='text-xs text-left text-green-900'>
                                                {hadith.reference}
                                            </p>
                                        )}
                                        {hadith.source && (
                                            <p className='text-xs text-left text-green-900'>
                                                {hadith.source}
                                            </p>
                                        )}
                                        {hadith.accuracy && (
                                            <p className='text-xs text-left text-green-900 font-semibold'>
                                                Sanadi: {hadith.accuracy}
                                            </p>
                                        )}

                                        {hadith.hadithNumber && (
                                            <p className='text-xs text-left text-green-900'>
                                                {hadith.hadithNumber}-hadis
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        className="btn btn-primary btn-outline my-1  p-2 py-0 h-0 min-h-8"
                                        onClick={() => setShowModal(true)}
                                    >
                                        <FaCopy />
                                    </button>

                                </footer>
                            </main>
                        )}



                    </div>
             
            </div>
            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h2 className="text-xl font-semibold mb-4">Copy Hadith Content</h2>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Copy Uzbek</span>
                                
                                <input
                                    type="checkbox"
                                    checked
                                    onChange={() => toggleCheckbox('uzbek')}
                                    defaultChecked 
                                    className="checkbox checkbox-accent"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Copy English</span>
                                <input
                                    type="checkbox"
                                    checked={selectedLanguages.english}
                                    onChange={() => toggleCheckbox('english')}
                                    className="checkbox"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Copy Kril</span>
                                <input
                                    type="checkbox"
                                    checked={selectedLanguages.kril}
                                    onChange={() => toggleCheckbox('kril')}
                                    className="checkbox"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text">Copy Arabic</span>
                                <input
                                    type="checkbox"
                                    checked={selectedLanguages.arabic}
                                    onChange={() => toggleCheckbox('arabic')}
                                    className="checkbox"
                                />
                            </label>
                        </div>
                        <div className="modal-action">
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    copySelected();
                                    setShowModal(false);
                                }}
                            >
                                Copy Selected
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Page

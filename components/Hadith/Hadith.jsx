"use client";
import { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { toast } from "react-toastify";

const HadithPageComponent = ({ hadiths, searchTerm }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedLanguages, setSelectedLanguages] = useState({
        uzbek: false,
        english: false,
        kril: false,
        arabic: false,
    });

    const toggleCheckbox = (language) => {
        setSelectedLanguages((prev) => ({
            ...prev,
            [language]: !prev[language],
        }));
    };

    const copySelected = () => {
        const copyText = hadiths.map(hadith => {
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

    const highlightSearchTerm = (text, searchTerm) => {
        if (!searchTerm) return text;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.split(regex).map((part, index) => 
            part.toLowerCase() === searchTerm.toLowerCase() ? 
                <span key={index} className="bg-green-300">{part}</span> : 
                part
        );
    };

    return (
        <div className='text-4xl text-slate-900 text-center min-h-screen pt-20 w-full p-4 md:p-10 md:pt-20 max-w-screen-lg m-auto'>
            {hadiths && hadiths.map((hadith) => (
                <div key={hadith._id}>
                    {hadith.subChapterNumber && (
                        <section className='flex flex-wrap justify-between my-4'>
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
                            <p className='text-sm font-semibold text-green-900 p-2'>{hadith.narratorName}dan:</p>

                            <article className='flex flex-col md:flex-row justify-between items-start gap-2'>
                                <div role="tablist" className="tabs tabs-boxed bg-white w-full md:w-1/2 max-w-[40rem]">
                                    {hadith.hadith.uzbek && (
                                        <>
                                            <input type="radio" name={`my_tabs_1`} role="tab" className="tab text-gray-800" aria-label="O'zbekcha" defaultChecked />
                                            <div role="tabpanel" className="tab-content p-2">
                                                <p className='text-sm md:text-sm text-justify'>
                                                    {highlightSearchTerm(hadith.hadith.uzbek, searchTerm)}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                    {hadith.hadith.kril && (
                                        <>
                                            <input type="radio" name={`my_tabs_1`} role="tab" className="tab" aria-label="Узбекча" />
                                            <div role="tabpanel" className="tab-content p-2">
                                                <p className='text-sm text-justify'>
                                                    {highlightSearchTerm(hadith.hadith.kril, searchTerm)}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                    {hadith.hadith.english && (
                                        <>
                                            <input type="radio" name={`my_tabs_1`} role="tab" className="tab" aria-label="English" />
                                            <div role="tabpanel" className="tab-content p-2">
                                                <p className='text-sm text-justify'>
                                                    {highlightSearchTerm(hadith.hadith.english, searchTerm)}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                                {hadith.hadith.arabic && (
                                    <>
                                        <div className='p-2 max-w-[40rem] w-full  md:w-1/2 pt-10 flex flex-col'>
                                            <p className='text-lg text-justify ' style={{ textAlignLast: "right" }}>
                                                {highlightSearchTerm(hadith.hadith.arabic, searchTerm)}
                                            </p>
                                        </div>
                                    </>
                                )}
                            </article>
                            <footer className='p-4 bg-green-100/25 flex justify-between items-center'>
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
            ))}
            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h2 className="text-xl font-semibold mb-4">Select Languages to Copy</h2>
                        <form>
                            {Object.keys(selectedLanguages).map((language) => (
                                <label key={language} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedLanguages[language]}
                                        onChange={() => toggleCheckbox(language)}
                                    />
                                    <span>{language}</span>
                                </label>
                            ))}
                        </form>
                        <div className="modal-action">
                            <button
                                className="btn btn-primary"
                                onClick={copySelected}
                            >
                                Copy Selected
                            </button>
                            <button
                                className="btn"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HadithPageComponent;

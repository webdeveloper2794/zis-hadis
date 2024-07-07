"use client"
import React from 'react'
import Link from 'next/link';
const  Books = () => {
    const books = [
        { id: 1, title_uzb: 'Sahih al-Bukhari', title_arabic: 'صحيح البخاري', author: 'Imam al-Bukhari', link: '/bukhari' },
        { id: 2, title_uzb: 'Sahih Muslim', title_arabic: 'صحيح مسلم', author: 'Imam Muslim', link: '/muslim' },
        { id: 3, title_uzb: `Sunan an-Nasa'i`, title_arabic: 'سنن النسائي', author: `Imam an-Nasa'i`, link: '/nasa-i' },
        { id: 4, title_uzb: 'Sunan Abi Dawud', title_arabic: 'سنن أبي داود', author: 'Imam Abu Dawud', link: '/abi-dawud' },
        { id: 5, title_uzb: `Jami' at-Tirmidhi`, title_arabic: 'جامع الترمذي', author: 'Imam at-Tirmidhi', link: '/tirmidhi' },
        { id: 6, title_uzb: 'Sunan Ibn Majah', title_arabic: 'سنن ابن ماجه', author: 'Imam Ibn Majah', link: '/ibn-majah' },
        { id: 7, title_uzb: 'Muwatta Malik', title_arabic: 'موطأ مالك', author: 'Imam Malik', link: '/malik' },
        { id: 8, title_uzb: 'Musnad Ahmad', title_arabic: 'مسند أحمد', author: 'Imam Ahmad ibn Hanbal', link: '/ahmad' },
        { id: 9, title_uzb: 'Sunan ad-Darimi', title_arabic: 'سنن الدارمي', author: 'Imam ad-Darimi', link: '/darimi' },
        { id: 10, title_uzb: 'Collections of Forty', title_arabic: 'الأربعينات', author: 'Various', link: '/forty' },
        { id: 11, title_uzb: `An-Nawawi's 40 Hadith`, title_arabic: 'الأربعون النووية', author: 'Imam Nawawi', link: '/nawawi' },
        { id: 12, title_uzb: 'Al-Adab Al-Mufrad', title_arabic: 'الأدب المفرد', author: 'Imam Bukhari', link: '/bukhari' },
        { id: 13, title_uzb: `Ash-Shama'il Al-Muhammadiyah`, title_arabic: 'الشمائل المحمدية', author: 'Imam Tirmidhi', link: '/tirmidhi' },
        { id: 14, title_uzb: 'Bulugh al-Maram', title_arabic: 'بلوغ المرام', author: 'Imam Nawawi', link: '/nawawi' },
        { id: 15, title_uzb: 'Hisn al-Muslim', title_arabic: 'حصن المسلم', author: 'Imam Nawawi', link: '/nawawi' },
        { id: 16, title_uzb: 'Mishkat al-Masabih', title_arabic: 'مشكاة المصابيح', author: 'Imam Bukhari', link: '/bukhari' },
      ];
    const handleBookClick = (bookId) => {
        // router.push(`/books/${bookId}`);
    };
    return (
        <div className="container mx-auto xl:px-40 py-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {books.map(book => (
                    <Link key={book.id} href={book.link}>
                        <div className="relative group">
                            <div
                                className="flex justify-between p-2 bg-white border hover:border-2  rounded-sm shadow-lg cursor-pointer transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg px-10"
                                onClick={() => handleBookClick(book.id)}
                            >
                                <h2 className="text-green-600 font-serif text-base font-extralight mb-2">{book.title_uzb}</h2>
                                <p className="text-green-600 font-serif text-xl font-semibold mb-2">{book.title_arabic}</p>
                                
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-green-100 opacity-0 transition-opacity duration-300 group-hover:opacity-25 rounded-lg"></div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Books

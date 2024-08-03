"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const books = [
    {
      _id: 1,
      title_uzb: "Sahih al-Bukhari",
      title_arabic: "صحيح البخاري",
      author: "Imam al-Bukhari",
      link: "/bukhari",
      biography:
        "Sahih al-Bukhari is a collection of hadith compiled by Imam Bukhari.",
    },
    {
      _id: 2,
      title_uzb: "Sahih Muslim",
      title_arabic: "صحيح مسلم",
      author: "Imam Muslim",
      link: "/muslim",
      biography:
        "Sahih Muslim is one of the six major hadith collections in Sunni Islam.",
    },
    {
      _id: 3,
      title_uzb: `Sunan an-Nasa'i`,
      title_arabic: "سنن النسائي",
      author: `Imam an-Nasa'i`,
      link: "/nasa-i",
      biography: "Sunan an-Nasa'i is one of the six major hadith collections.",
    },
    {
      _id: 4,
      title_uzb: "Sunan Abi Dawud",
      title_arabic: "سنن أبي داود",
      author: "Imam Abu Dawud",
      link: "/abi-dawud",
      biography:
        "Sunan Abi Dawud is one of the six major hadith collections of Sunni Islam.",
    },
    {
      _id: 5,
      title_uzb: `Jami' at-Tirmidhi`,
      title_arabic: "جامع الترمذي",
      author: "Imam at-Tirmidhi",
      link: "/tirmidhi",
      biography:
        "Jami' at-Tirmidhi is one of the six major hadith collections.",
    },
    {
      _id: 6,
      title_uzb: "Sunan Ibn Majah",
      title_arabic: "سنن ابن ماجه",
      author: "Imam Ibn Majah",
      link: "/ibn-majah",
      biography:
        "Sunan Ibn Majah is one of the six major hadith collections of Sunni Islam.",
    },
    {
      _id: 7,
      title_uzb: "Muwatta Malik",
      title_arabic: "موطأ مالك",
      author: "Imam Malik",
      link: "/malik",
      biography: "Muwatta Malik is one of the earliest collections of hadith.",
    },
    {
      _id: 8,
      title_uzb: "Musnad Ahmad",
      title_arabic: "مسند أحمد",
      author: "Imam Ahmad ibn Hanbal",
      link: "/ahmad",
      biography:
        "Musnad Ahmad is a collection of hadith compiled by Imam Ahmad ibn Hanbal.",
    },
    {
      _id: 9,
      title_uzb: "Sunan ad-Darimi",
      title_arabic: "سنن الدارمي",
      author: "Imam ad-Darimi",
      link: "/darimi",
      biography:
        "Sunan ad-Darimi is a hadith collection compiled by Imam ad-Darimi.",
    },
    {
      _id: 10,
      title_uzb: "Collections of Forty",
      title_arabic: "الأربعينات",
      author: "Various",
      link: "/forty",
      biography:
        "Collections of Forty is a compilation of hadith chosen by various scholars.",
    },
    {
      _id: 11,
      title_uzb: `An-Nawawi's 40 Hadith`,
      title_arabic: "الأربعون النووية",
      author: "Imam Nawawi",
      link: "/nawawi",
      biography:
        "An-Nawawi's 40 Hadith is a collection of 42 hadith compiled by Imam Nawawi.",
    },
    {
      _id: 12,
      title_uzb: "Al-Adab Al-Mufrad",
      title_arabic: "الأدب المفرد",
      author: "Imam Bukhari",
      link: "/bukhari",
      biography:
        "Al-Adab Al-Mufrad is a collection of hadith compiled by Imam Bukhari focusing on manners and morals.",
    },
    {
      _id: 13,
      title_uzb: `Ash-Shama'il Al-Muhammadiyah`,
      title_arabic: "الشمائل المحمدية",
      author: "Imam Tirmidhi",
      link: "/tirmidhi",
      biography:
        "Ash-Shama'il Al-Muhammadiyah is a collection of hadith compiled by Imam Tirmidhi that describes the Prophet Muhammad (PBUH).",
    },
    {
      _id: 14,
      title_uzb: "Bulugh al-Maram",
      title_arabic: "بلوغ المرام",
      author: "Imam Nawawi",
      link: "/nawawi",
      biography:
        "Bulugh al-Maram is a collection of hadith compiled by Imam Nawawi.",
    },
    {
      _id: 15,
      title_uzb: "Hisn al-Muslim",
      title_arabic: "حصن المسلم",
      author: "Imam Nawawi",
      link: "/nawawi",
      biography:
        "Hisn al-Muslim is a collection of hadith compiled by Imam Nawawi focusing on supplications and remembrances.",
    },
    {
      _id: 16,
      title_uzb: "Mishkat al-Masabih",
      title_arabic: "مشكاة المصابيح",
      author: "Imam Bukhari",
      link: "/bukhari",
      biography:
        "Mishkat al-Masabih is a collection of hadith compiled by Imam Bukhari.",
    },
  ];
  useEffect(() => {
    // Redirect to /admin if this page is accessed directly
    router.push('/admin');
  }, [router]);
  return (
    <>      
      <main className="grid min-h-screen w-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/admin"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>           
          </div>
        </div>
      </main>
    </>
  );
}
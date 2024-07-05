import Link from "next/link";
export default function page() {
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
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-green-900">
        {books.map((book) => (
          <div key={book._id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">
              {book.title_uzb} / {book.title_arabic}
            </h2>
            <p>{book.biography}</p>
            <div className="mt-4">
              <Link href={`/admin/book/${book._id}`}  className="text-blue-500">
               Manage Chapters
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
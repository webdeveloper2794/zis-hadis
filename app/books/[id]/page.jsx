import React from 'react'
import Link from 'next/link';
const page = () => {
    const bukhariChapters = [
        {
            id: 1,
            title_uzb: "Risolat",
            title_arabic: "كتاب بدء الوحى",
            range: "1 to 7",
            content: `Chapter Content for Ilm boshlangan...`,
        },
        {
            id: 2,
            title_uzb: "Iymon",
            title_arabic: "كتاب الإيمان",
            range: "8 to 58",
            content: `Chapter Content for Imon...`,
        },
        {
            id: 3,
            title_uzb: "Ilm",
            title_arabic: "كتاب العلم",
            range: "59 to 134",
            content: `Chapter Content for Ilm...`,
        },
        {
            id: 4,
            title_uzb: "Tahorat",
            title_arabic: "كتاب الوضوء",
            range: "135 to 247",
            content: `Chapter Content for Wuduu...`,
        },
        {
            id: 5,
            title_uzb: "Ghusl",
            title_arabic: "كتاب الغسل",
            range: "248 to 293",
            content: `Chapter Content for Ghusl...`,
        },
        {
            id: 6,
            title_uzb: "Hayz",
            title_arabic: "كتاب الحيض",
            range: "294 to 333",
            content: `Chapter Content for Hayz...`,
        },
        {
            id: 7,
            title_uzb: "Tayammum",
            title_arabic: "كتاب التيمم",
            range: "334 to 348",
            content: `Chapter Content for Tayammum...`,
        },
        {
            id: 8,
            title_uzb: "Namoz",
            title_arabic: "كتاب الصلاة",
            range: "349 to 520",
            content: `Chapter Content for Namoz...`,
        },
        {
            id: 9,
            title_uzb: "Namoz vaqtlari",
            title_arabic: "كتاب مواقيت الصلاة",
            range: "521 to 602",
            content: `Chapter Content for Namoz vaqtlari...`,
        },
        {
            id: 10,
            title_uzb: "Adhan",
            title_arabic: "كتاب الأذان",
            range: "603 to 875",
            content: `Chapter Content for Adhan...`,
        },
        {
            id: 11,
            title_uzb: "Jumma namozi",
            title_arabic: "كتاب الجمعة",
            range: "876 to 941",
            content: `Chapter Content for Jumma namozi...`,
        },
        {
            id: 12,
            title_uzb: "Qorin vaqtlarida namoz",
            title_arabic: "كتاب صلاة الخوف",
            range: "942 to 947",
            content: `Chapter Content for Qorin vaqtlarida namoz...`,
        },
        {
            id: 13,
            title_uzb: "Iedain",
            title_arabic: "كتاب العيدين",
            range: "948 to 989",
            content: `Chapter Content for Iedain...`,
        },
        {
            id: 14,
            title_uzb: "Vitr namozi",
            title_arabic: "كتاب الوتر",
            range: "990 to 1004",
            content: `Chapter Content for Vitr namozi...`,
        },
        {
            id: 15,
            title_uzb: "Istisqo",
            title_arabic: "كتاب الاستسقاء",
            range: "1005 to 1039",
            content: `Chapter Content for Istisqo...`,
        },
        {
            id: 16,
            title_uzb: "Qorong'liklar",
            title_arabic: "كتاب الكسوف",
            range: "1040 to 1065",
            content: `Chapter Content for Qorong'liklar...`,
        },
        {
            id: 17,
            title_uzb: "Qur'on o'qilishda sajda",
            title_arabic: "كتاب سجود القرآن",
            range: "1067 to 1079",
            content: `Chapter Content for Qur'on o'qilishda sajda...`,
        },
        {
            id: 18,
            title_uzb: "Namozni qisqartirish (At-Taqseer)",
            title_arabic: "كتاب التقصير",
            range: "1080 to 1119",
            content: `Chapter Content for Namozni qisqartirish (At-Taqseer)...`,
        },
        {
            id: 19,
            title_uzb: "Ramazon kechqurishi (Tahajjud)",
            title_arabic: "كتاب التهجد",
            range: "1120 to 1187",
            content: `Chapter Content for Ramazon kechqurishi (Tahajjud)...`,
        },
        {
            id: 20,
            title_uzb: "Makka va Madina masjidlari namozi fazilatlari",
            title_arabic: "كتاب فضل الصلاة في مسجد مكة والمدينة",
            range: "1188 to 1197",
            content: `Chapter Content for Makka va Madina masjidlari namozi fazilatlari...`,
        },
        {
            id: 21,
            title_uzb: "Namozda amallar",
            title_arabic: "كتاب العمل في الصلاة",
            range: "1198 to 1223",
            content: `Chapter Content for Namozda amallar...`,
        },
        {
            id: 22,
            title_uzb: "Namozda suh",
            title_arabic: "كتاب السهو",
            range: "1224 to 1236",
            content: `Chapter Content for Namozda suh...`,
        },
        {
            id: 23,
            title_uzb: "Janaiz",
            title_arabic: "كتاب الجنائز",
            range: "1237 to 1394",
            content: `Chapter Content for Janaiz...`,
        },
        {
            id: 24,
            title_uzb: "Zakat",
            title_arabic: "كتاب الزكاة",
            range: "1395 to 1512",
            content: `Chapter Content for Zakat...`,
        },
        {
            id: 25,
            title_uzb: "Hajj",
            title_arabic: "كتاب الحج",
            range: "1513 to 1771",
            content: `Chapter Content for Hajj...`,
        },
        {
            id: 26,
            title_uzb: "Umra",
            title_arabic: "كتاب العمرة",
            range: "1773 to 1805",
            content: `Chapter Content for Umra...`,
        },
        {
            id: 27,
            title_uzb: "Maqisr",
            title_arabic: "كتاب المحصر",
            range: "1806 to 1820",
            content: `Chapter Content for Maqisr...`,
        },
        {
            id: 28,
            title_uzb: "Jazo",
            title_arabic: "كتاب جزاء الصيد",
            range: "1821 to 1866",
            content: `Chapter Content for Jazo...`,
        },
        {
            id: 29,
            title_uzb: "Madinaning fazilatlari",
            title_arabic: "كتاب فضائل المدينة",
            range: "1867 to 1890",
            content: `Chapter Content for Madinaning fazilatlari...`,
        },
        {
            id: 30,
            title_uzb: "Ro'za",
            title_arabic: "كتاب الصوم",
            range: "1891 to 2007",
            content: `Chapter Content for Ro'za...`,
        },
        {
            id: 31,
            title_uzb: "Ramazon kechqurishi (Taravih)",
            title_arabic: "كتاب صلاة التراويح",
            range: "2008 to 2013",
            content: `Chapter Content for Ramazon kechqurishi (Taravih)...`,
        },
        {
            id: 32,
            title_uzb: "Qadr to'rtkishi fazilatlari",
            title_arabic: "كتاب فضل ليلة القدر",
            range: "2014 to 2024",
            content: `Chapter Content for Qadr to'rtkishi fazilatlari...`,
        },
        {
            id: 33,
            title_uzb: "I'tikof",
            title_arabic: "كتاب الاعتكاف",
            range: "2025 to 2046",
            content: `Chapter Content for I'tikof...`,
        },
        {
            id: 34,
            title_uzb: "Savdo sotiq",
            title_arabic: "كتاب البيوع",
            range: "2047 to 2238",
            content: `Chapter Content for Savdo sotiq...`,
        },
        {
            id: 35,
            title_uzb: "Sotiq xulosi",
            title_arabic: "كتاب السلم",
            range: "2239 to 2256",
            content: `Chapter Content for Sotiq xulosi...`,
        },
        {
            id: 36,
            title_uzb: "Shuf'a",
            title_arabic: "كتاب الشفعة",
            range: "2257 to 2259",
            content: `Chapter Content for Shuf'a...`,
        },
        {
            id: 37,
            title_uzb: "Ijarachi",
            title_arabic: "كتاب الإجارة",
            range: "2260 to 2285",
            content: `Chapter Content for Ijarachi...`,
        },
        {
            id: 38,
            title_uzb: "O'zgarish",
            title_arabic: "كتاب الحوالات",
            range: "2287 to 2289",
            content: `Chapter Content for O'zgarish...`,
        },
        {
            id: 39,
            title_uzb: "Kafalat",
            title_arabic: "كتاب الكفالة",
            range: "2290 to 2298",
            content: `Chapter Content for Kafalat...`,
        },
        {
            id: 40,
            title_uzb: "Muvokil",
            title_arabic: "كتاب الوكالة",
            range: "2299 to 2319",
            content: `Chapter Content for Muvokil...`,
        },
        {
            id: 41,
            title_uzb: "Qishloq xo'jaligi",
            title_arabic: "كتاب المزارعة",
            range: "2320 to 2350",
            content: `Chapter Content for Qishloq xo'jaligi...`,
        },
        {
            id: 42,
            title_uzb: "Su bosimi",
            title_arabic: "كتاب المساقاة",
            range: "2351 to 2383",
            content: `Chapter Content for Su bosimi...`,
        },
        {
            id: 43,
            title_uzb: "Qarz olinda vaqtini muddatlantirish",
            title_arabic: "كتاب في الاستقراض",
            range: "2385 to 2409",
            content: `Chapter Content for Qarz olinda vaqtini muddatlantirish...`,
        },
        {
            id: 44,
            title_uzb: "Solishtirish",
            title_arabic: "كتاب الخصومات",
            range: "2410 to 2425",
            content: `Chapter Content for Solishtirish...`,
        },
        {
            id: 45,
            title_uzb: "Yo'rg'on bo'lma ishlar",
            title_arabic: "كتاب فى اللقطة",
            range: "2426 to 2439",
            content: `Chapter Content for Yo'rg'on bo'lma ishlar...`,
        },
        {
            id: 46,
            title_uzb: "Zulm",
            title_arabic: "كتاب المظالم",
            range: "2440 to 2482",
            content: `Chapter Content for Zulm...`,
        },
        {
            id: 47,
            title_uzb: "Sherkat",
            title_arabic: "كتاب الشركة",
            range: "2483 to 2507",
            content: `Chapter Content for Sherkat...`,
        },
        {
            id: 48,
            title_uzb: "Rahnu",
            title_arabic: "كتاب الرهن",
            range: "2508 to 2515",
            content: `Chapter Content for Rahnu...`,
        },
        {
            id: 49,
            title_uzb: "Gulomlarni azad qilish",
            title_arabic: "كتاب العتق",
            range: "2517 to 2559",
            content: `Chapter Content for Gulomlarni azad qilish...`,
        },
        {
            id: 50,
            title_uzb: "Mukaatib",
            title_arabic: "كتاب المكاتب",
            range: "2560 to 2565",
            content: `Chapter Content for Mukaatib...`,
        },
        {
            id: 51,
            title_uzb: "Sovg'alar",
            title_arabic: "كتاب الهبة",
            range: "2566 to 2636",
            content: `Chapter Content for Sovg'alar...`,
        },
        {
            id: 52,
            title_uzb: "Shohidlar",
            title_arabic: "كتاب الشهادات",
            range: "2637 to 2689",
            content: `Chapter Content for Shohidlar...`,
        },
        {
            id: 53,
            title_uzb: "Sulh",
            title_arabic: "كتاب الصلح",
            range: "2690 to 2710",
            content: `Chapter Content for Sulh...`,
        },
        {
            id: 54,
            title_uzb: "Shartlar",
            title_arabic: "كتاب الشروط",
            range: "2711 to 2737",
            content: `Chapter Content for Shartlar...`,
        },
        {
            id: 55,
            title_uzb: "Vasiyatlar (Wasaayaa)",
            title_arabic: "كتاب الوصايا",
            range: "2738 to 2781",
            content: `Chapter Content for Vasiyatlar (Wasaayaa)...`,
        },
        {
            id: 56,
            title_uzb: "Allonga g'azab (Jihad)",
            title_arabic: "كتاب الجهاد",
            range: "2782 to 3090",
            content: `Chapter Content for Allonga g'azab (Jihad)...`,
        },
        {
            id: 57,
            title_uzb: "Halol booty uchun to'qqizma (Khumus)",
            title_arabic: "كتاب فرض الخمس",
            range: "3091 to 3155",
            content: `Chapter Content for Halol booty uchun to'qqizma (Khumus)...`,
        },
        {
            id: 58,
            title_uzb: "Jizya va Mawaada'ah",
            title_arabic: "كتاب الجزية",
            range: "3156 to 3189",
            content: `Chapter Content for Jizya va Mawaada'ah...`,
        },
        {
            id: 59,
            title_uzb: "Buyuk yaratilish",
            title_arabic: "كتاب بدء الخلق",
            range: "3190 to 3325",
            content: `Chapter Content for Buyuk yaratilish...`,
        },
        {
            id: 60,
            title_uzb: "Anbiyolar hadislar",
            title_arabic: "كتاب أحاديث الأنبياء",
            range: "3326 to 3488",
            content: `Chapter Content for Anbiyolar hadislar...`,
        },
        {
            id: 61,
            title_uzb: "Peygamber (vafot etgan)",
            title_arabic: "كتاب المناقب",
            range: "3489 to 3648",
            content: `Chapter Content for Peygamber (vafot etgan)...`,
        },
        {
            id: 62,
            title_uzb: "Peygamber ashablari",
            title_arabic: "كتاب فضائل أصحاب النبى صلى الله عليه وسلم",
            range: "3649 to 3775",
            content: `Chapter Content for Peygamber ashablari...`,
        },
        {
            id: 63,
            title_uzb: "Nabiy-Muhammad s.a.v. badiy",
            title_arabic: "كتاب المغازى",
            range: "3776 to 4473",
            content: `Chapter Content for Nabiy-Muhammad s.a.v. badiy...`,
        },
        {
            id: 64,
            title_uzb: "Ahmad",
            title_arabic: "كتاب الأشربة",
            range: "4474 to 4480",
            content: `Chapter Content for Ahmad...`,
        },
        {
            id: 65,
            title_uzb: "Qisas",
            title_arabic: "كتاب القصاص",
            range: "4481 to 4517",
            content: `Chapter Content for Qisas...`,
        },
        {
            id: 66,
            title_uzb: "Muvokil (Wasiiyyat)",
            title_arabic: "كتاب الوصية",
            range: "4518 to 4654",
            content: `Chapter Content for Muvokil (Wasiiyyat)...`,
        },
        {
            id: 67,
            title_uzb: "O'qiy kuylar",
            title_arabic: "كتاب الذكر",
            range: "4655 to 4704",
            content: `Chapter Content for O'qiy kuylar...`,
        },
        {
            id: 68,
            title_uzb: "So'ngi so'z",
            title_arabic: "كتاب الدعوات",
            range: "4705 to 4752",
            content: `Chapter Content for So'ngi so'z...`,
        },
        {
            id: 69,
            title_uzb: "Hodisalar",
            title_arabic: "كتاب الأحاديث القدسية",
            range: "4753 to 4757",
            content: `Chapter Content for Hodisalar...`,
        },
        {
            id: 70,
            title_uzb: "Kiyomat hadislar",
            title_arabic: "كتاب الأحاديث القدسية",
            range: "4758 to 4781",
            content: `Chapter Content for Kiyomat hadislar...`,
        },
        {
            id: 71,
            title_uzb: "Rasululloh ashablari hadislar",
            title_arabic: "كتاب أحاديث الأنبياء",
            range: "4782 to 4801",
            content: `Chapter Content for Rasululloh ashablari hadislar...`,
        },
        {
            id: 72,
            title_uzb: "Namozdan so'ng uch tavoqqa",
            title_arabic: "كتاب الأذكار",
            range: "4802 to 5027",
            content: `Chapter Content for Namozdan so'ng uch tavoqqa...`,
        },
        {
            id: 73,
            title_uzb: "Ilmli so'z",
            title_arabic: "كتاب العلم",
            range: "5028 to 5062",
            content: `Chapter Content for Ilmli so'z...`,
        },
        {
            id: 74,
            title_uzb: "Hayvonotlar",
            title_arabic: "كتاب الأنعام",
            range: "5063 to 5146",
            content: `Chapter Content for Hayvonotlar...`,
        },
        {
            id: 75,
            title_uzb: "Sofas",
            title_arabic: "كتاب الصفاة",
            range: "5147 to 5205",
            content: `Chapter Content for Sofas...`,
        },
        {
            id: 76,
            title_uzb: "Malhuzat",
            title_arabic: "كتاب المعجلات",
            range: "5206 to 5217",
            content: `Chapter Content for Malhuzat...`,
        },
        {
            id: 77,
            title_uzb: "Safro ishtirok etish",
            title_arabic: "كتاب الصفراء",
            range: "5218 to 5219",
            content: `Chapter Content for Safro ishtirok etish...`,
        },
        {
            id: 78,
            title_uzb: "Fudhool (Mufadhalat)",
            title_arabic: "كتاب المفضلات",
            range: "5220 to 5241",
            content: `Chapter Content for Fudhool (Mufadhalat)...`,
        },
        {
            id: 79,
            title_uzb: "Namozdan so'ng tasbih",
            title_arabic: "كتاب التسبيح",
            range: "5242 to 5266",
            content: `Chapter Content for Namozdan so'ng tasbih...`,
        },
        {
            id: 80,
            title_uzb: "Bakhshish (At-Tawba)",
            title_arabic: "كتاب التوبة",
            range: "5267 to 5800",
            content: `Chapter Content for Bakhshish (At-Tawba)...`,
        },
        {
            id: 81,
            title_uzb: "Nafarkand bo'lish",
            title_arabic: "كتاب الفرقان",
            range: "5801 to 5846",
            content: `Chapter Content for Nafarkand bo'lish...`,
        },
        {
            id: 82,
            title_uzb: "Nadhir qilish",
            title_arabic: "كتاب النذر",
            range: "5847 to 5914",
            content: `Chapter Content for Nadhir qilish...`,
        },
        {
            id: 83,
            title_uzb: "Orzaq ishlanish (At-Tafsir)",
            title_arabic: "كتاب التفسير",
            range: "5915 to 6094",
            content: `Chapter Content for Orzaq ishlanish (At-Tafsir)...`,
        },
        {
            id: 84,
            title_uzb: "Sufa so'zlar",
            title_arabic: "كتاب الصوم",
            range: "6095 to 6171",
            content: `Chapter Content for Sufa so'zlar...`,
        },
        {
            id: 85,
            title_uzb: "Anbiyolar va Farishtalar (Muaaridh)",
            title_arabic: "كتاب المعارض",
            range: "6172 to 6253",
            content: `Chapter Content for Anbiyolar va Farishtalar (Muaaridh)...`,
        },
        {
            id: 86,
            title_uzb: "Iftitox ijobatlar",
            title_arabic: "كتاب الإجارة",
            range: "6254 to 6274",
            content: `Chapter Content for Iftitox ijobatlar...`,
        },
        {
            id: 87,
            title_uzb: "Shariat",
            title_arabic: "كتاب الشرائع",
            range: "6275 to 6304",
            content: `Chapter Content for Shariat...`,
        },
        {
            id: 88,
            title_uzb: "Fasting ishuqlar va kamchiliklar",
            title_arabic: "كتاب الصوم",
            range: "6305 to 6334",
            content: `Chapter Content for Fasting ishuqlar va kamchiliklar...`,
        },
        {
            id: 89,
            title_uzb: "Labbayk",
            title_arabic: "كتاب الحج",
            range: "6335 to 6347",
            content: `Chapter Content for Labbayk...`,
        },
        {
            id: 90,
            title_uzb: "Me'raj",
            title_arabic: "كتاب المعجزات",
            range: "6348 to 6354",
            content: `Chapter Content for Me'raj...`,
        },
        // Add more chapters as needed
    ];

    // Example usage:
    //   const chapter5 = bukhariChapters.find(chapter => chapter.id === 5);
    //   console.log(chapter5.title_uzb); // Output: "Ghusl"
    //   console.log(chapter5.title_arabic); // Output: "كتاب الغسل"
    //   console.log(chapter5.range); // Output: "248 to 293"
    //   console.log(chapter5.content); // Output: "Chapter Content for Ghusl..."

    return (
        <div className='py-20 px-4 bg-transparent rounded-md'>
            <div className='bg-green-100 p-6 shadow-xl max-w-screen-lg'>
                <header className=' text-gray-600 flex justify-between py-2'>
                    <h1 className='font-semibold text-gray-950'>Sahih al-Bukhari</h1>
                    <h1 className='font-semibold text-gray-950'>صحيح البخاري</h1>
                </header>
                <p className='text-gray-700 text-sm'>Sahih al-Bukhari is a collection of hadith compiled by Imam Muhammad al-Bukhari (d. 256 AH/870 AD) (rahimahullah). His collection is recognized by the overwhelming majority of the Muslim world to be the most authentic collection of reports of the Sunnah of the Prophet Muhammad (ﷺ). It contains over 7500 hadith (with repetitions) in 97 books. The translation provided here is by Dr. M. Muhsin Khan.</p>
            </div>
        <div className="overflow-x-auto py-10 max-w-screen-lg m-auto" >
          <table className="table bg-transparent">
            <thead>
              <tr>
                <th className="text-green-900 text-lg font-semibold hover:text-green-500">#</th>
                <th className='text-lg text-green-900 font-semibold'>Bob</th>
                <th className='text-lg text-green-900 font-semibold'>باب</th>
                <th className='text-lg text-green-900 font-semibold'>Betlar</th>
              </tr>
            </thead>
            <tbody>
              {bukhariChapters.map((chapter, index) => (
                <tr
                  key={chapter.id}
                  className={`bg-white/50 hover:bg-green-100 transition-colors duration-300 cursor-pointer ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-100'}`}
                >
                  <td className='text-green-900'>{chapter.id}</td>
                  <td>
                    <Link href={`/bukhari/${chapter.id}`} className="text-green-900 text-lg font-semibold hover:text-green-500">
                     {chapter.title_uzb}
                    </Link>
                  </td>
                  <td className='text-green-900 text-lg font-semibold'>
                  <Link href={`/bukhari/${chapter.id}`} className="text-green-900 text-lg font-semibold hover:text-green-500">
                  {chapter.title_arabic}
                    </Link>                   
                    </td>
                  <td className='text-green-900'>{chapter.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    );
};


export default page

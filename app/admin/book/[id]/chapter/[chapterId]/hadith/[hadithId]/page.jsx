"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// Hadith Edit Page =======================================
export default function Page({ params }) {
  const router = useRouter();
  const { id, chapterId, hadithId } = params;
  console.log('%c%s', 'color: #00b300', JSON.stringify(hadithId));
  const [formData, setFormData] = useState({
    titleUz: "",
    titleAr: "",
    subChapterNumber: null,
    arabicAyah: "",
    narratorName: "",
    hadithArabic: "",
    hadithUzbek: "",
    hadithEnglish: "",
    hadithKril: "",
    hadithNumber: null,
    reference: "",
    accuracy: "",
    source: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchHadith = async () => {
      try {
        const response = await axios.get(`/api/hadiths/${hadithId}`);
        const hadith = response.data.hadith;
        setFormData({
          titleUz: hadith.subChapterTitle.uz,
          titleAr: hadith.subChapterTitle.ar,
          subChapterNumber: hadith.subChapterNumber,
          arabicAyah: hadith.arabic_ayah,
          narratorName: hadith.narratorName,
          hadithArabic: hadith.hadith.arabic,
          hadithUzbek: hadith.hadith.uzbek,
          hadithEnglish: hadith.hadith.english,
          hadithKril: hadith.hadith.kril,
          hadithNumber: hadith.hadithNumber,
          reference: hadith.reference,
          accuracy: hadith.accuracy,
          source: hadith.source,
        });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchHadith();
  }, [hadithId]);

  const handleHadithSubmit = async (e) => {
    e.preventDefault();
    const updatedHadith = {
      chapterId: chapterId,
      subChapterNumber: Number(formData.subChapterNumber),
      subChapterTitle: {
        uz: formData.titleUz,
        ar: formData.titleAr,
      },
      arabic_ayah: formData.arabicAyah,
      narratorName: formData.narratorName,
      hadith: {
        arabic: formData.hadithArabic,
        uzbek: formData.hadithUzbek,
        english: formData.hadithEnglish,
        kril: formData.hadithKril,
      },
      hadithNumber: Number(formData.hadithNumber),
      reference: formData.reference,
      accuracy: formData.accuracy,
      source: formData.source,
    };
    try {
      const response = await axios.put(`/api/hadiths/${hadithId}`, updatedHadith);
      if (response.status === 200) {
        toast.success("Hadis muvaffaqiyatli yangilandi!");
        router.push(`/admin/book/${id}/chapter/${chapterId}/hadith`);
      }
    } catch (error) {
      toast.error("Hadisni yangilashda hatolik yuz berdi!");
      console.error("Error updating hadith:", error);
    }
  };
  return (
    <main className="flex w-full  flex-col items-center pt-10 p-2">
      <h1 className="text-2xl text-green-900 font-bold mb-6">Edit Hadith</h1>
      <form
        className="flex flex-wrap justify-between w-full mb-4 border-solid  p-6 rounded-md shadow-xl  bg-white/75"
        onSubmit={handleHadithSubmit}
      >
        <label class="form-control w-full max-w-xs ">
          <div class="label">
            <span class="label-text text-gray-500 ">Bob raqami</span>
          </div>
          <input
            type="number"
            name="subChapterNumber"
            placeholder="Bob raqami"
            className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
            value={formData.subChapterNumber}
            onChange={handleChange}
          />
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-gray-500 ">Bob o&apos;zbekcha nomi</span>
          </div>
        <input
          type="text"
          name="titleUz"
          placeholder="Bob nomi o'zbekcha"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.titleUz}
          onChange={handleChange}
        />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-gray-500  ">Bob arabcha nomi</span>
          </div>
        <input
          type="text"
          name="titleAr"
          placeholder="Bob nomi arabcha"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.titleAr}
          onChange={handleChange}
        />
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-gray-500">Oyatdan dalil</span>
          </div>
        <input
          type="text"
          name="arabicAyah"
          placeholder="Oyatdan dalil"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.arabicAyah}
          onChange={handleChange}
        />
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-gray-500">Rivoyat qiluvchi</span>
          </div>
        <input
          type="text"
          name="narratorName"
          placeholder="Rivoyat qiluvchi"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.narratorName}
          onChange={handleChange}
        />
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-gray-500">Hadis o&apos;zbekcha</span>
          </div>
        <textarea
          className="w-full textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          placeholder="O'zbekcha Hadis matni"
          name="hadithUzbek"
          value={formData.hadithUzbek}
          onChange={handleChange}
        ></textarea>
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-gray-500">Hadis kirilcha</span>
          </div>
        <textarea
          className="w-full textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          placeholder="Kirilcha Hadis matni"
          value={formData.hadithKril}
          name="hadithKril"
          onChange={handleChange}
        ></textarea>
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-gray-500">Hadis arabcha</span>
          </div>
        <textarea
          className="w-full textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          placeholder="Arabcha Hadis matni"
          name="hadithArabic"
          value={formData.hadithArabic}
          onChange={handleChange}
        ></textarea>
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-gray-500">Hadis Inglizcha</span>
          </div>
        <textarea
          className="w-full textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          placeholder="Inglizcha Hadis matni"
          name="hadithEnglish"
          value={formData.hadithEnglish}
          onChange={handleChange}
        ></textarea>
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-gray-500">Hadis raqami</span>
          </div>
        <input
          type="number"
          placeholder="Hadis raqami"
          className="input input-bordered input-accent  min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          name="hadithNumber"
          value={formData.hadithNumber}
          onChange={handleChange}
        />
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-gray-500">Hadis reference i</span>
          </div>
        <input
          type="text"
          placeholder="Reference"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.reference}
          name="reference"
          onChange={handleChange}
        />
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-gray-500">Hadis sanadi</span>
          </div>
        <input
          type="text"
          name="accuracy"
          placeholder="Sanadi"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.accuracy}
          onChange={handleChange}
        />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text text-gray-500">Hadis manbasi</span>
          </div>
        <input
          type="text"
          name="source"
          placeholder="Hadis manbasi"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={formData.source}
          onChange={handleChange}
        />
        </label>
        <button
          className="shadow-lg m-2 btn btn-outline btn-success bg-green-500"
          style={{ color: "white" }}
          type="submit"
        >
          Saqlash
        </button>
      </form>
    </main>
  );
}


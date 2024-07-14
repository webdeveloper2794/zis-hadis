"use client"
import { useEffect, useState } from "react";
import axios from "axios";
export default function Page() {

  const [titleUz, setTitleUz] = useState("");
  const [titleAr, setTitleAr] = useState("");
  const [author, setAuthor] = useState("");
  const [bio, setBio] = useState("");

  const handleUzTitleChange = (e) => {
    setTitleUz(e.target.value);
    console.log(titleUz);
  }
  const handleArTitleChange = (e) => {
    setTitleAr(e.target.value);
  }
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  }
  const handleBioChange = (e) => {
    setBio(e.target.value);
  }
  const handleAddBookSubmit = async (e) => {
    e.preventDefault();
    const newBook = {
      title_uzb: titleUz,
      title_arabic: titleAr,
      author: author,
      biography: bio
    };
    try {
      const response = await axios.post('/api/books', newBook);
      if (response.status === 201) {
        // Clear the form fields after successful submission
        setTitleUz("");
        setTitleAr("");
        setAuthor("");
        setBio("");
        alert('Kitob muvaffaqiyatli qo\'shildi!');
      }
    } catch (error) {
      console.error('Kitobni qo\'shishda xatolik yuz berdi:', error);
    }

  }
  return (
    <main className="flex w-full  flex-col items-center pt-10 p-2">
      <h1 className="text-2xl text-green-900 font-bold mb-6">Add new book</h1>
      <form className="flex flex-wrap justify-between w-full mb-4 border-solid  p-6 rounded-md shadow-xl  bg-white/75" onSubmit={handleAddBookSubmit}>
        <input
          type="text"
          placeholder="Kitob nomi ozbekcha"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={titleUz}
          onChange={handleUzTitleChange}
        />
        <input
          type="text"
          placeholder="Kitob nomi arabcha"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={titleAr}
          onChange={handleArTitleChange}
        />
        <input
          type="text"
          placeholder="Kitob Muallifi"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 m-2"
          value={author}
          onChange={handleAuthorChange}
        />
        <textarea
          className="textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 w-full m-2"
          placeholder="Kitob Biografiyasini qo'shing"
          value={bio}
          onChange={handleBioChange}
        ></textarea>
        <button className="shadow-lg m-2 btn btn-outline btn-success bg-green-500" style={{ color: "white" }} type="submit">Kitob qoshish</button>
      </form>


      <div className="flex flex-wrap justify-between w-full  p-6 rounded-md shadow-xl mb-4 bg-white/75 gap-4">
        <select className="select select-success w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 " defaultValue="">
          <option disabled value="">
            Kitob nomini tanlang
          </option>
          <option>One Piece</option>
          <option>Naruto</option>
          <option>Death Note</option>
          <option>Attack on Titan</option>
          <option>Bleach</option>
          <option>Fullmetal Alchemist</option>
          <option>Jojos Bizarre Adventure</option>
        </select>
        <textarea
          className="textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 w-full"
          placeholder="Kitob Biografiyasini qo'shing"
        ></textarea>
        <button className="btn btn-outline btn-success bg-green-500 shadow-lg" style={{ color: "white" }}>
          Kitob biografiyasini qoshish
        </button>
      </div>
      {/* ===============================================Bo'limlarni qo'shish========================= */}
      <div className="gap-2 flex flex-wrap justify-between w-full  p-6 rounded-md shadow-xl bg-white/75 mb-4">
        <select className="select select-success w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2" defaultValue="">
          <option disabled value="">
            Kitob nomini tanlang
          </option>
          <option>One Piece</option>
          <option>Naruto</option>
          <option>Death Note</option>
          <option>Attack on Titan</option>
          <option>Bleach</option>
          <option>Fullmetal Alchemist</option>
          <option>Jojos Bizarre Adventure</option>
        </select>
        <input
          type="number"
          placeholder="Bolim raqami"
          className="input input-bordered input-accent  min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2 "
        />
        <input
          type="text"
          placeholder="Bolim nomi ozbekcha"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="text"
          placeholder="Bolim nomi arabcha"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="number"
          placeholder="Bet boshlanish raqami"
          className="input input-bordered input-accent  min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="number"
          placeholder="Bet tugash raqami"
          className="input input-bordered input-accent  min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />

        <button className="shadow-lg btn btn-outline btn-success bg-green-500" style={{ color: "white" }}>
          Kitob Bolimlarini qoshish
        </button>
      </div>

      {/* ===============================================Bob va Hadislarni qo'shish========================= */}
      <div className="gap-2 flex flex-wrap justify-between w-full  p-6 rounded-md shadow-lg bg-white/75">
        <select className="select select-success w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2" defaultValue="">
          <option disabled value="">
            Kitob nomini tanlang
          </option>
          <option>One Piece</option>
          <option>Naruto</option>
          <option>Death Note</option>
          <option>Attack on Titan</option>
          <option>Bleach</option>
          <option>Fullmetal Alchemist</option>
          <option>Jojos Bizarre Adventure</option>
        </select>
        <select className="select select-success w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2" defaultValue="">
          <option disabled value="">
            Bolim nomini tanlang
          </option>
          <option>One Piece</option>
          <option>Naruto</option>
          <option>Death Note</option>
          <option>Attack on Titan</option>
          <option>Bleach</option>
          <option>Fullmetal Alchemist</option>
          <option>Jojos Bizarre Adventure</option>
        </select>
        <input
          type="number"
          placeholder="Bob raqami"
          className="input input-bordered input-accent  min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2 "
        />
        <input
          type="text"
          placeholder="Bob nomi ozbekcha"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="text"
          placeholder="Bob nomi arabcha"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="text"
          placeholder="Oyatdan dalil"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="text"
          placeholder="Kimdan rivoyat qilingan"
          className="input input-bordered input-accent w-full min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <textarea
          className="w-full textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
          placeholder="Ozbekcha Hadis matni"
        ></textarea>
        <textarea
          className="w-full textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
          placeholder="Kirilcha Hadis matni"
        ></textarea>
        <textarea
          className="w-full textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
          placeholder="Arabcha Hadis matni"
        ></textarea>
        <input
          type="number"
          placeholder="Bolim raqami"
          className="input input-bordered input-accent  min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="number"
          placeholder="Hadis raqami"
          className="input input-bordered input-accent  min-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <button className="shadow-lg btn btn-outline btn-success bg-green-500" style={{ color: "white" }}>
          Bobga tegishli hadislarni qoshish
        </button>
      </div>
    </main>
  );
}



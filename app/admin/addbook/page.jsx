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


      
    </main>
  );
}



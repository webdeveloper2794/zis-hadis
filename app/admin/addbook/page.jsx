export default function Page() {
  return (
    <main className="flex w-full  flex-col items-center pt-10 p-6 ">
      <h1 className="text-2xl text-green-900 font-bold mb-6">Add new book</h1>
      <div className="flex flex-wrap justify-between w-full mb-4 border-solid border-2 border-sky-500/50 p-6 rounded-md shadow-md mb-2 bg-white/75">
        <input
          type="text"
          placeholder="Kitob nomi ozbekcha"
          className="input input-bordered input-accent w-full max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900"
        />
        <input
          type="text"
          placeholder="Kitob nomi arabcha"
          className="input input-bordered input-accent w-full max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900"
        />
        <button className="btn btn-outline btn-success bg-green-500" style={{color:"white"}}>Kitob qoshish</button>
      </div>


      <div className="flex flex-wrap justify-between w-full border-solid border-2 border-sky-500/50 p-6 rounded-md shadow-md mb-4 bg-white/75">
        <select className="select select-success w-full max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 ">
          <option disabled selected>
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
          className="textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900"
          placeholder="Kitob Biografiyasini qo'shing"
        ></textarea>
        <button className="btn btn-outline btn-success bg-green-500" style={{color:"white"}}>
          Kitob biografiyasini qoshish
        </button>
      </div>
 {/* ===============================================Bo'limlarni qo'shish========================= */}
      <div className="flex flex-wrap justify-between w-full border-solid border-2 border-sky-500/50 p-6 rounded-md shadow-md bg-white/75 mb-4">
        <select className="select select-success w-full max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2">
          <option disabled selected>
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
          className="input input-bordered input-accent  max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2 "
        />
        <input
          type="text"
          placeholder="Bolim nomi ozbekcha"
          className="input input-bordered input-accent w-full max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="text"
          placeholder="Bolim nomi arabcha"
          className="input input-bordered input-accent w-full max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="number"
          placeholder="Bet boshlanish raqami"
          className="input input-bordered input-accent  max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="number"
          placeholder="Bet tugash raqami"
          className="input input-bordered input-accent  max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />

        <button className="btn btn-outline btn-success bg-green-500" style={{color:"white"}}>
          Kitob Bolimlarini qoshish
        </button>
      </div>

      {/* ===============================================Bob va Hadislarni qo'shish========================= */}
      <div className="flex flex-wrap justify-between w-full border-solid border-2 border-sky-500/50 p-6 rounded-md shadow-md bg-white/75">
        <select className="select select-success w-full max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2">
          <option disabled selected>
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
        <select className="select select-success w-full max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2">
          <option disabled selected>
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
          className="input input-bordered input-accent  max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2 "
        />
        <input
          type="text"
          placeholder="Bob nomi ozbekcha"
          className="input input-bordered input-accent w-full max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="text"
          placeholder="Bob nomi arabcha"
          className="input input-bordered input-accent w-full max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="text"
          placeholder="Oyatdan dalil"
          className="input input-bordered input-accent w-full max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="text"
          placeholder="Kimdan rivoyat qilingan"
          className="input input-bordered input-accent w-full max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
         <textarea
          className="textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
          placeholder="Ozbekcha Hadis matni"
        ></textarea>
         <textarea
          className="textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
          placeholder="Kirilcha Hadis matni"
        ></textarea>
         <textarea
          className="textarea textarea-success bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
          placeholder="Arabcha Hadis matni"
        ></textarea>
        <input
          type="number"
          placeholder="Bolim raqami"
          className="input input-bordered input-accent  max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <input
          type="number"
          placeholder="Hadis raqami"
          className="input input-bordered input-accent  max-w-xs bg-transparent focus:border-2 focus:outline-none text-green-900 mb-2"
        />
        <button className="btn btn-outline btn-success bg-green-500" style={{color:"white"}}>
          Bobga tegishli hadislarni qoshish
        </button>
      </div>
    </main>
  );
}



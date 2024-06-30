import Books from "@/components/Books/books";
export default function Home() {
  return (
    <main className="flex w-full min-h-screen  flex-col items-center  bg-[#ebfcef] pt-16 p-6"
      style={{
        background: `url("/background.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}>

      <h1 className="text-2xl sm:text-4xl text-green-700 py-10 font-serif text-center">Rosululloh <span className="text-gray-900 font-bold">صلى الله عليه و سلم</span>  Hadislari top&apos;lami</h1>
      <label className="input input-bordered flex items-center gap-2 bg-white input-accent w-full lg:w-1/2">
        <input type="text" className="grow input-bordered input-accent input-sm " placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
      </label>
      <Books />

    </main>
  );
}

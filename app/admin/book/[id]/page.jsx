import React from 'react'

const page = () => {
  return (
    <main className="flex w-full  flex-col items-center pt-10 p-6">
      <h1 className="text-2xl text-green-900 font-bold mb-6">Edit book</h1>
      <div className="flex flex-wrap justify-between w-full mb-4 border-solid border-2  p-6 rounded-md shadow-md  bg-white/75 gap-4">
        <input
          type="text"
          placeholder="Kitob nomi ozbekcha"
          className="input input-bordered input-accent w-full  bg-transparent focus:border-2 focus:outline-none text-green-900"
        />
        <input
          type="text"
          placeholder="Kitob nomi arabcha"
          className="input input-bordered input-accent w-full bg-transparent focus:border-2 focus:outline-none text-green-900"
        />
        <button className="btn btn-outline btn-success bg-green-500" style={{color:"white"}}>Update</button>
      </div>
    </main>
  )
}

export default page

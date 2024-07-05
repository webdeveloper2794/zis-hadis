import React from 'react'
import Link from 'next/link'
const Adminlayout = ({children}) => {
  return (
    <div className="flex min-h-screen pt-16">
      <aside className="w-64 bg-transparent text-green-500 flex flex-col shadow-lg">
        <div className="p-4 text-lg font-semibold pt-16">Admin Dashboard</div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/admin" className="hover:bg-gray-700 p-2 rounded">
           Home
          </Link>
          <Link href="/admin/addbook" className="hover:bg-gray-700 p-2 rounded">
           Add New Book
          </Link>
          <Link href="/admin/book" className="hover:bg-gray-700 p-2 rounded">
            Book Lists
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100/50 relative">{children}</main>
    </div>
  )
}

export default Adminlayout
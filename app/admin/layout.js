import React from 'react'
import Link from 'next/link'
import AdminNavbar from '@/components/adminNavbar/adminNavbar'

const Adminlayout = ({children}) => {
  return (
    <div className="flex min-h-screen pt-16 ">
      
      <main className="flex-1 p-8 bg-gray-100/50 relative scroll-auto">
      <aside className="w-40 bg-transparent text-gray-700 flex flex-col shadow-lg fixed z-50">
        <nav className="flex flex-col p-2 space-y-4  ">
          <Link href="/admin" className="hover:bg-green-500 hover:text-white p-2 rounded text-sm w-full">
           Home
          </Link>
          <Link href="/admin/addbook" className="hover:bg-green-500 hover:text-white p-2 rounded text-sm">
           Add New Book
          </Link>
          <Link href="/admin/book" className="hover:bg-green-500 hover:text-white p-2 rounded text-sm">
            Book Lists
          </Link>
        </nav>
      </aside>
      <AdminNavbar/>
      {children}
      </main>
    </div>
  )
}

export default Adminlayout
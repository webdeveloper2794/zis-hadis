import React from 'react'
import AdminLayout from '@/components/AdminLayout/AdminLayout'
const Adminlayout = ({ children }) => {
  return (

    <AdminLayout>
        <main className=" w-full flex flex-1 relative">
          {children}
        </main>
    </AdminLayout>
  )
}
export default Adminlayout
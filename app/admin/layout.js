import React from 'react'
import AdminLayout from '@/components/AdminLayout/AdminLayout'
const Adminlayout = ({ children }) => {
  return (

    <AdminLayout>
        <main className="flex-1  bg-gray-100/50 relative">
          {children}
        </main>
    </AdminLayout>
  )
}
export default Adminlayout
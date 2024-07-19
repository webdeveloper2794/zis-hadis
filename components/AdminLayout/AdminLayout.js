import Link from "next/link";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col pt-16 w-full p-0 ">
      <header className="bg-green-100 w-full text-gray-700 py-4 fixed z-50">
        <div className="container mx-auto flex justify-center">
          
          <nav>
          <Link href="/admin" className="px-4  text-sm">
            Home
          </Link>
            <Link href="/admin/addbook" className="px-4  text-sm">
              Add Book
            </Link>
            <Link href="/admin/addchapter" className="px-4  text-sm">
              Add Chapter
            </Link>
            <Link href="/admin/addhadith" className="px-4  text-sm">
              Add Hadith
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
    </div>
  );
};

export default AdminLayout;


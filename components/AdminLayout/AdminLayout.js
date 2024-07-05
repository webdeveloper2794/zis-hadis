import Link from "next/link";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between">
          <Link href="/admin" className="text-2xl font-bold">
            Admin Dashboard
          </Link>
          <nav>
            <Link href="/admin/addBook" className="px-4">
              Add Book
            </Link>
            <Link href="/admin/addChapter" className="px-4">
              Add Chapter
            </Link>
            <Link href="/admin/addHadith" className="px-4">
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


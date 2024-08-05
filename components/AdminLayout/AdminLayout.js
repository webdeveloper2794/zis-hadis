"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiHome, FiBook, FiLayers, FiClipboard, FiAlertCircle,FiArrowLeft  } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import LogoutButton from "../LogOutButton/logoutBtn";
const AdminLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  function previous() {
    window.history.back()
}

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    { href: "/admin", label: "Admin Home", icon: <FiHome /> },
    { href: "/admin/addbook", label: "Add Book", icon: <FiBook /> },
    { href: "/admin/addchapter", label: "Add Chapter", icon: <FiLayers /> },
    { href: "/admin/addhadith", label: "Add Hadith", icon: <FiClipboard /> },
    { href: "/admin/errorreport", label: "Error page", icon: <FiAlertCircle /> },
  ];

  // const generateBreadcrumbs = () => {
  //   const pathnames = pathname.split("/").filter((item) => item);
  //   return (
  //     <div className="breadcrumbs text-sm py-2">
  //       <ul className="flex space-x-2">
         
  //         {pathnames.map((value, index) => {
  //           const href = `/${pathnames.slice(0, index + 1).join("/")}`;
  //           const isLast = index === pathnames.length - 1;
  //           return (
  //             <li key={href}>
  //               {!isLast ? (
  //                 <Link href={href} className="text-green-500 hover:underline flex items-center">
  //                   {value.charAt(0).toUpperCase() + value.slice(1)}
  //                   <IoIosArrowForward className="pl-2" />
  //                 </Link>
  //               ) : (
  //                 <span className="text-gray-500">
  //                   {value.charAt(0).toUpperCase() + value.slice(1)}
  //                 </span>
  //               )}
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </div>
  //   );
  // };

  return (
    <div className="w-full min-h-screen flex justify-between pt-16 md:pt-2 p-0">
      {/* Navbar for small screens */}
      <header className="bg-green-100 w-full text-gray-700 py-4 fixed z-50 md:hidden">
        <div className="container mx-auto flex justify-between items-center px-2">
          <div className="text-lg font-semibold text-gray-400 tracking-wider text-green-700">Admin Panel</div>
          <button onClick={toggleMenu} className="text-xl group">
            <FiMenu className="group-hover:text-green-500 transition-all" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-2 p-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm hover:text-green-500 transition-colors duration-300 flex items-center space-x-2 ${pathname === link.href ? 'text-green-500' : ''}`}
                  onClick={toggleMenu}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Sidebar for medium and larger screens */}
      <aside className="hidden md:flex flex-col bg-green-100 w-64 min-h-screen pt-16">
        <div className="text-lg font-bold text-green-700 tracking-wider p-4 fixed font-sans pl-8 w-52">Admin Panel</div>
        <nav className="flex flex-col justify-between  space-y-4 p-4 pt-16 text-slate-600 fixed">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm rounded-md px-4 lg:pr-12 py-2 flex items-center space-x-2 hover:bg-green-500 hover:text-white transition-colors duration-300 ${pathname === link.href ? 'bg-green-500 text-white' : ''}`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        <LogoutButton/>
          
        </nav>
      </aside>

      {/* Main content area */}
      <main className="w-full flex-grow mt-16 md:ml-1/5 container mx-auto px-4 py-6">
       {pathname != "/admin" && <button
          onClick={() => router.back()}
          className="mb-4 flex items-center text-sm text-green-500 hover:underline"
        >
          <FiArrowLeft className="mr-2" /> Go Back
        </button>

       }
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import ToastProvider from "@/libs/ToastProvider/provider";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZIS-Hadis",
  description: "Hadislar to'plami",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#ebfcef]`}>
        <div className="min-h-screen  flex items-center flex-col justify-between">
          <Navbar />
          <ToastProvider>
            <Suspense fallback={<p className="text-green-700 text-center flex"><span className="loading loading-spinner text-success loading-lg m-2"></span>Loading...</p>}>

            {children}
            </Suspense>
            </ToastProvider>          
          <Footer />
        </div>
      </body>
    </html>
  );
}

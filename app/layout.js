import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import ToastProvider from "@/libs/ToastProvider/provider";
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
          <ToastProvider>{children}</ToastProvider>          
          <Footer />
        </div>
      </body>
    </html>
  );
}

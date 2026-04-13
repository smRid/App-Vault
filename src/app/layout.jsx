import { Inter } from "next/font/google";
import "./globals.css";
import AppContextProvider from "@/context/AppContext/AppContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "App Vault",
  description: "Your trusted application management platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={inter.variable}>
      <body className="bg-[#F5F5F5] min-h-screen flex flex-col">
        <AppContextProvider>
          {children}
          <ToastContainer />
        </AppContextProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Navbar from "@/components/Navbar";
// import MobileNavPopup from "@/components/MobilePopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your App",
  description: "App with smooth scroll",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrollProvider>
          {/* <MobileNavPopup /> */}
          <Navbar/>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
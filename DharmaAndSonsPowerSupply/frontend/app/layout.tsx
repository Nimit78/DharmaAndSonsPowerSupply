import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // 👈 ADD THIS
import { Whatsapp } from "@/CommonUi/WhatsApp";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dharma And Sons",
  description: "Power Supply",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* ✅ Fixed Header */}
        <Header />


        {/* ✅ Main Content (NO OVERLAP FIX) */}
        <main className="pt-[90px]">
          {children}
          <Whatsapp />
        </main>
        <Footer />
      </body>
    </html>
  );
}
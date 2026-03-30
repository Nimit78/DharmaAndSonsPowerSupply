"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // mobile menu state

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full h-[85px] z-50 flex justify-center">

            <div
                className={`w-[92%] max-w-7xl mt-4 px-5 md:px-7 py-4 flex items-center justify-between rounded-full transition-all duration-500 ${
                    isScrolled
                        ? "bg-white/30 backdrop-blur-md shadow-md"
                        : "bg-[#efebe8] shadow-md"
                }`}
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.jpeg"
                        alt="logo"
                        width={40}
                        height={40}
                        className="w-8 md:w-10 h-auto"
                    />
                    <div>
                        <h1 className="font-bold text-sm md:text-lg">
                            Dharma And Sons
                        </h1>
                        <p className="text-[10px] md:text-xs text-gray-500">
                            Power Suplly
                        </p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 text-sm font-bold text-gray-800">
                    <Link href="#">About</Link>
                    <Link href="#">Products & Services ▼</Link>
                    <Link href="#">Resources ▼</Link>
                    <Link href="#">Sustainability</Link>
                    <Link href="#">Careers</Link>
                    <Link href="#">Contact</Link>
                </nav>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-[90px] w-[92%] max-w-7xl bg-white shadow-lg rounded-2xl p-5 flex flex-col gap-4 text-sm font-bold md:hidden">
                    <Link href="#">About</Link>
                    <Link href="#">Products & Services</Link>
                    <Link href="#">Resources</Link>
                    <Link href="#">Sustainability</Link>
                    <Link href="#">Careers</Link>
                    <Link href="#">Contact</Link>
                </div>
            )}
        </header>
    );
}
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
                className={`w-[92%] max-w-7xl mt-4 px-5 md:px-7 py-4 flex items-center justify-between rounded-full transition-all duration-500 ${isScrolled
                        ? "bg-white/30 backdrop-blur-md shadow-md"
                        : "bg-[#efebe8] shadow-md"
                    }`}
            >
                {/* Logo */}
                <Link href="/" >
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={40}
                            height={40}
                            className="w-8 md:w-10 h-auto"
                        />
                        <div>
                            <h1 className="font-bold text-sm md:text-lg text-gray-900">
                                Dharma And Sons
                            </h1>
                            <p className="text-[10px] md:text-xs text-gray-500">
                                Power Suplly
                            </p>
                        </div>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 text-sm font-bold text-gray-800">
                    <Link href="about-us" className="hover:text-amber-500">About</Link>
                    <Link href="products" className="hover:text-amber-500">Products ▼</Link>
                    <Link href="services" className="hover:text-amber-500">Services ▼</Link>
                    <Link href="#" className="hover:text-amber-500">Sustainability</Link>
                    <Link href="#" className="hover:text-amber-500">Careers</Link>
                    <Link href="contact-us" className="hover:text-amber-500">Contact</Link>
                </nav>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-2xl text-gray-400"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div onClick={()=>setMenuOpen(!menuOpen)} className="absolute top-[90px] w-[92%] text-gray-700 max-w-7xl bg-white shadow-lg rounded-2xl p-5 flex flex-col gap-4 text-sm font-bold md:hidden">
                    <Link href="about-us">About</Link>
                    <Link href="products">Products </Link>
                    <Link href="services">Services</Link>
                    <Link href="#">Sustainability</Link>
                    <Link href="#">Careers</Link>
                    <Link href="contact-us">Contact</Link>
                </div>
            )}
        </header>
    );
}
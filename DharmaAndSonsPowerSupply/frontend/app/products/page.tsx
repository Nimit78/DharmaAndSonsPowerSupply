"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    ShoppingCart,
    Settings,
    ShieldCheck,
    ArrowRight,
    Box,
    Zap,
} from "lucide-react";

const partsList = [
    {
        id: 1,
        name: "Precision Piston Kit",
        price: "2,499",
        category: "Engine",
        desc: "High-grade aluminum alloy for Silent Power X-125 series. Heat resistant.",
        stock: true,
    },
    {
        id: 2,
        name: "Heavy Duty Fuel Tank",
        price: "5,800",
        category: "Fuel System",
        desc: "15L Capacity, Anti-corrosive coating specifically for industrial units.",
        stock: true,
    },
    {
        id: 3,
        name: "Copper Stator Motor",
        price: "12,500",
        category: "Electrical",
        desc: "100% Pure copper winding. High efficiency power generation core.",
        stock: false,
    }
];

type partsType = {
    id: number,
    name: string,
    price: string,
    category: string,
    desc: string,
    stock: boolean
}

const PartCard = ({ part }: { part: partsType }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white dark:bg-slate-900 
            rounded-3xl border border-slate-100 dark:border-slate-800 
            p-3 sm:p-4 transition-all duration-500 hover:shadow-xl"
        >
            {/* Image/Icon */}
            <div className="relative h-36 sm:h-44 w-full overflow-hidden 
            rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center">

                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Settings
                    className="text-slate-200 dark:text-slate-700 group-hover:text-blue-600 group-hover:rotate-90 transition-all duration-700"
                    size={50}
                />

                <span className="absolute top-2 left-2 text-[9px] sm:text-[10px] bg-blue-600 text-white px-2 py-1 rounded-full font-bold tracking-wider">
                    {part.category}
                </span>

                {part.stock && (
                    <div className="absolute top-2 right-2 bg-amber-400 p-1 rounded-full">
                        <Zap size={12} />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="mt-4 px-1">
                <div className="flex justify-between items-start gap-2">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
                        {part.name}
                    </h3>
                    <p className="text-blue-600 font-bold text-sm sm:text-base">
                        ₹{part.price}
                    </p>
                </div>

                <p className="text-slate-500 text-xs sm:text-sm mt-2 line-clamp-2 italic">
                    {part.desc}
                </p>

                {/* Info */}
                <div className="flex justify-between items-center text-[10px] mt-4 border-y py-2">
                    <div className="flex items-center gap-1 text-slate-500">
                        <ShieldCheck size={12} className="text-blue-600" />
                        WARRANTY
                    </div>

                    <div className={`flex items-center gap-1 font-bold ${
                        part.stock ? "text-green-600" : "text-red-500"
                    }`}>
                        <Box size={12} />
                        {part.stock ? "IN STOCK" : "OUT"}
                    </div>
                </div>

                {/* Button */}
                <button
                    disabled={!part.stock}
                    className={`w-full mt-4 flex items-center justify-center gap-2 
                    py-3 rounded-xl text-[11px] font-bold tracking-wider transition-all
                    ${part.stock
                        ? "bg-slate-900 text-white hover:bg-blue-600"
                        : "bg-red-500 text-white cursor-not-allowed"}`}
                >
                    <ShoppingCart size={16} />
                    {part.stock ? "ADD TO CART" : "UNAVAILABLE"}
                </button>
            </div>
        </motion.div>
    );
};

const GeneratorPartsPage = () => {
    return (
        <section className="relative py-12 sm:py-20 bg-slate-50 dark:bg-[#020617]">

            {/* Background */}
            <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-blue-600/5 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-amber-400/5 blur-[100px]" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">

                {/* Heading */}
                <div className="mb-10 sm:mb-16">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-[2px] bg-amber-500"></span>
                        <span className="text-blue-600 font-bold tracking-widest text-[10px]">
                            GENUINE SPARES
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                        Maintenance <span className="text-blue-600">&</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                            Spare Parts
                        </span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                    {partsList.map((part) => (
                        <PartCard key={part.id} part={part} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GeneratorPartsPage;
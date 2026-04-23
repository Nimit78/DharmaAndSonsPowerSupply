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
    CheckCircle2
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
    id: Number,
    name: string,
    price: string,
    category: string,
    desc: string,
    stock: boolean
}

type propsType = {
    part: partsType
}

const PartCard = ({ part }: propsType) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)]"
        >
            {/* Icon/Image Area */}
            <div className="relative h-48 w-full overflow-hidden rounded-[1.5rem] bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center">
                {/* Animated Background Element */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Settings
                    size={80}
                    className="text-slate-200 dark:text-slate-700 group-hover:text-blue-600 group-hover:rotate-90 transition-all duration-700"
                />

                <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-200">
                        {part.category}
                    </span>
                </div>

                {part.stock && (
                    <div className="absolute top-4 right-4 bg-amber-400 p-1.5 rounded-full text-slate-900 shadow-md">
                        <Zap size={14} fill="currentColor" />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="mt-6 px-2 pb-2">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {part.name}
                    </h3>
                    <p className="text-blue-600 font-black text-lg italic">₹{part.price}</p>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2 italic">
                    "{part.desc}"
                </p>

                {/* Features Info */}
                <div className="flex items-center gap-4 mb-6 border-y border-slate-50 dark:border-slate-800 py-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 dark:text-slate-400">
                        <ShieldCheck size={14} className="text-blue-600" />
                        <span>WARRANTY</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 dark:text-slate-400">
                        <Box size={14} className="text-amber-500" />
                        <span className={part.stock ? "text-green-600" : "text-red-500"}>
                            {part.stock ? "READY STOCK" : "OUT OF STOCK"}
                        </span>
                    </div>
                </div>

                {/* Action Button */}
                <button
                    disabled={!part.stock}
                    className={`w-full group/btn relative flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-xs tracking-widest transition-all
            ${part.stock
                            ? "bg-slate-900 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 shadow-xl shadow-blue-100 dark:shadow-none"
                            : "bg-red-500 text-slate-200 cursor-not-allowed"}`}
                >
                    <ShoppingCart size={18} className={part.stock ? "group-hover/btn:-translate-y-1 transition-transform" : ""} />
                    {part.stock ? "ADD TO CART" : "UNAVAILABLE"}
                    <ArrowRight size={14} className="absolute right-6 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-2 transition-all" />
                </button>
            </div>
        </motion.div>
    );
};

const GeneratorPartsPage = () => {
    return (
        <section className="relative py-20 bg-slate-50 dark:bg-[#020617]">
            {/* Background Orbs (As per your theme) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-8 h-[2px] bg-amber-500"></span>
                        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">
                            Genuine Spares
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase italic">
                        Maintenance <span className="text-blue-600">&</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                            Spare Parts
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partsList.map((part) => (
                        <PartCard key={part.id} part={part} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GeneratorPartsPage;
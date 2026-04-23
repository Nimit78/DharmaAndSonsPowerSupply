"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Zap,
  Shield,
  ArrowRight,
  Activity,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Silent Power X-125",
    capacity: "125 kVA",
    desc: "Perfect for large weddings and corporate events. Ultra-silent technology with fuel efficiency.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    price: "₹5,000 / Day",
  },
  {
    id: 2,
    name: "Industrial Prime 250",
    capacity: "250 kVA",
    desc: "Heavy-duty power for construction sites and industrial manufacturing units.",
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=600",
    price: "₹8,500 / Day",
  },
  {
    id: 3,
    name: "Compact Home Pro",
    capacity: "15 kVA",
    desc: "Reliable power backup for small offices and residential villas. Low maintenance.",
    image:
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=600",
    price: "₹1,200 / Day",
  },
];

const ProductCard = ({ product }: any) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-slate-900 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 dark:border-slate-800 p-3 sm:p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)]"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-60 w-full overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem] bg-slate-100 dark:bg-slate-800">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
        />

        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
          <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 sm:px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 border border-blue-50">
            {product.capacity}
          </span>
        </div>

        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-amber-400 p-2 rounded-lg text-slate-900 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all">
          <Zap size={16} />
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 sm:mt-6 px-1 sm:px-2 pb-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            {product.name}
          </h3>
          <p className="text-blue-600 font-bold text-xs sm:text-sm">
            {product.price}
          </p>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-2">
          {product.desc}
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
          <button className="flex items-center justify-center gap-2 py-2 sm:py-3 bg-blue-600 text-white rounded-xl font-bold text-[10px] sm:text-[11px] hover:bg-blue-700">
            <Activity size={14} /> Rent Now
          </button>

          <button className="flex items-center justify-center gap-2 py-2 sm:py-3 bg-[#25D366] text-white rounded-xl font-bold text-[10px] sm:text-[11px]">
            <MessageCircle size={14} /> WhatsApp
          </button>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white rounded-xl font-bold text-[10px] sm:text-[11px]">
          <Phone size={14} className="text-amber-500" />
          Call for Query
          <ArrowRight
            size={12}
            className="opacity-0 group-hover:opacity-100 transition-all"
          />
        </button>
      </div>
    </motion.div>
  );
};

const ServiceSection = () => {
  const [selected,setSelected]=useState('all')
  return (
    <section className="relative py-12 sm:py-20 bg-slate-50 dark:bg-[#020617] min-h-screen">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-400/5 blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[2px] bg-amber-500"></span>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[9px] sm:text-[10px]">
                Premium Fleet
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase">
              Heavy Duty <span className="text-blue-600">Rental</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Solutions
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 bg-white dark:bg-slate-900 p-2 rounded-2xl border overflow-x-auto whitespace-nowrap">
            <button onClick={()=>setSelected('all')} className={`px-4 sm:px-6 py-2 ${selected==='all'?'bg-blue-600 ':''} text-white rounded-xl text-[10px] sm:text-xs font-bold cursor-pointer`}>
              All
            </button>
            <button onClick={()=>setSelected('Silent')}  className={`px-4 sm:px-6 ${selected==='Silent'?'bg-blue-600 ':''}  py-2 text-white text-[10px] rounded-xl sm:text-xs font-bold cursor-pointer`}>
              Silent
            </button>
            <button onClick={()=>setSelected('Industrial')} className={`px-4 sm:px-6 py-2 ${selected==='Industrial'?'bg-blue-600 ':''}  text-white text-[10px] rounded-xl sm:text-xs font-bold cursor-pointer`}>
              Industrial
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 sm:mt-20 p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-r from-blue-700 to-indigo-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-black mb-2">
              Need a custom power setup?
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm opacity-80">
              Humare engineers aapke site ka visit karenge aur best plan
              suggest karenge.
            </p>
          </div>

          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-amber-400 text-slate-900 font-black rounded-2xl text-[10px] sm:text-xs">
            Get Site Assessment
          </button>

          <Shield
            size={180}
            className="absolute -right-10 -bottom-10 opacity-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
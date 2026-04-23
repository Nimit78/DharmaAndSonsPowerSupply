"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Zap, Award } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Uninterrupted Power",
      desc: "High-performance generators jo har condition mein load handle karte hain."
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-500" />,
      title: "24/7 Support",
      desc: "Emergency breakdown ke liye humari team hamesha taiyar rehti hai."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
      title: "Certified Units",
      desc: "Humare sabhi systems safety aur efficiency ke liye fully tested hain."
    }
  ];

  return (
    <section className="relative py-20 bg-white dark:bg-slate-950 overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -ml-40 -mt-40"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/5 blur-[100px] rounded-full -mr-20 -mb-20"></div>

      {/* Background Watermark */}
      <div className="absolute top-10 left-5 text-[8rem] font-black text-blue-600 opacity-[0.03] dark:opacity-[0.05] leading-none select-none pointer-events-none tracking-tighter">
        ENERGY
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Visual Side */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Image Border with Blue Accent */}
              <div className="rounded-[2.5rem] overflow-hidden border-4 border-slate-50 dark:border-slate-900 shadow-2xl relative">
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                  alt="Industrial Generator" 
                  className="w-full h-[450px] object-cover"
                />
              </div>
              
              {/* Trust Card - Blue & Yellow Theme */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-2 md:-right-6 bg-gradient-to-br from-blue-700 to-blue-900 p-6 rounded-2xl shadow-2xl max-w-[220px] border border-blue-500/30"
              >
                <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-blue-900" size={24} />
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">Trust of 500+ Projects</h3>
              </motion.div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6">
                <Zap size={12} className="text-amber-500 fill-amber-500" />
                <span className="text-blue-700 dark:text-blue-300 font-bold tracking-wider uppercase text-[10px]">
                  Premium Rental Fleet
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
                Reliable Power When You <span className="text-blue-600">Need It</span> <span className="text-amber-500 font-outline-2">Most</span>
              </h2>
              
              <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Hum provide karte hain world-class silent generators jo fuel-efficient hain aur heavy loads ko 
                badi aasani se manage karte hain. Event ho ya industrial requirement, hum ensure karte hain 
                ki aapka kaam kabhi na ruke.
              </p>

              {/* Icon Features */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-blue-500/20 transition-all">
                    <div className="flex-shrink-0 p-2.5 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-md font-bold text-slate-900 dark:text-white">{f.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all uppercase text-xs tracking-widest">
                  Rent Now
                </button>
                <button className="px-8 py-3.5 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all uppercase text-xs tracking-widest">
                  View Catalog
                </button>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
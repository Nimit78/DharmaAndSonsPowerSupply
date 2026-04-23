"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Send, Zap } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="relative py-16 bg-white dark:bg-slate-950 overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS (Subtle) --- */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full -ml-20 -mt-20"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-400/5 blur-[100px] rounded-full -mr-20 -mb-20"></div>
      
      {/* Mesh Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="smallGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-4"
          >
            <Zap size={12} className="text-amber-500 fill-amber-500" />
            <span className="text-blue-700 dark:text-blue-300 font-bold tracking-wider uppercase text-[9px]">
              Reliable Power Solutions
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight"
          >
            Connect with <span className="text-blue-600">Power</span><span className="text-amber-500">Grid</span>
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">
            Reach out for an instant quote and professional site assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative p-[1px] group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl opacity-10 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                <div className="relative bg-white dark:bg-slate-900 p-6 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-800">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                        <Phone size={22} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-0.5">Call for Rental</p>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">+91 98XXX XXXXX</h3>
                    </div>
                </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-800 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 opacity-10 group-hover:rotate-12 transition-transform">
                    <Clock size={100} />
                </div>
                <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                        <Clock size={18} className="text-amber-400" /> Operational 24/7
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                        Emergencies—humara backup system hamesha active rehta hai. 
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                <Mail size={16} className="text-blue-600" />
                <span className="font-medium text-sm">rent@powergrid.com</span>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 md:p-8 rounded-3xl shadow-xl">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-transparent focus:border-amber-400 outline-none transition-all dark:text-white text-sm"
                    />
                    <input 
                      type="tel" 
                      placeholder="Contact Number"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-transparent focus:border-amber-400 outline-none transition-all dark:text-white text-sm"
                    />
                </div>

                <select className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-transparent focus:border-blue-500 outline-none transition-all dark:text-white text-sm cursor-pointer">
                    <option>Wedding / Event Rental</option>
                    <option>Industrial Backup</option>
                    <option>Construction Site</option>
                </select>

                <textarea 
                  rows={3}
                  placeholder="Describe your power needs..."
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-transparent focus:border-amber-400 outline-none transition-all dark:text-white text-sm resize-none"
                ></textarea>

                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest group">
                  Get Free Estimate
                  <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 group-hover:translate-x-1 transition-transform">
                    <Send size={12} />
                  </div>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
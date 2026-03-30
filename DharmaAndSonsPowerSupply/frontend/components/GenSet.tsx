"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Battery, Zap, CircleCheckBig, ArrowRight } from 'lucide-react';

const GensetSection = () => {
  const [activeTab, setActiveTab] = useState<'diesel' | 'gas'>('diesel');

  const content = {
    diesel: {
      title: "Diesel Gensets",
      description: "High-performance diesel generators designed to meet CPCB IV+ norms — delivering reliable power with significantly reduced environmental impact",
      image: "/images/cpcb/CPCB-D.png", // Replace with your actual image path
      features: [
        "CPCB IV+ Compliant",
        "Excellent Block Loading Capacity",
        "Up to 90% Reduction in Emissions",
        "Low Maintenance & High Durability"
      ],
      // link: "/products?category=diesel-genset",
      gradient: "from-slate-900 via-purple-900 to-slate-900"
    },
    gas: {
      title: "Gas Gensets",
      description: "Eco-friendly gas generator solutions offering clean energy with high efficiency and lower operational costs for sustainable power.",
      image: "/image4.png", // Replace with your actual image path
      features: [
        "Ultra-Low Carbon Footprint",
        "Quiet Operation Noise Levels",
        "Cost-Efficient Fuel Usage",
        "Easy Grid Integration"
      ],
      link: "/products?category=gas-genset",
      gradient: "from-slate-900 via-emerald-900 to-slate-900"
    }
  };

  const activeData = content[activeTab];

  return (
    <section className="py-12  relative overflow-hidden min-h-screen bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '8s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
            CPCB IV+ Compliant Gensets
          </h2>
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Choose between our high-quality diesel and gas generator solutions that meet the latest environmental standards.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-2 backdrop-blur-xl bg-white/40 rounded-2xl border border-white/50 shadow-2xl">
            <button
              onClick={() => setActiveTab('diesel')}
              className={`group flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 relative overflow-hidden ${
                activeTab === 'diesel' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {activeTab === 'diesel' && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl transition-all duration-500"></div>
              )}
              <Battery className={`w-6 h-6 relative z-10 ${activeTab === 'diesel' ? 'text-white' : 'text-slate-500'}`} />
              <span className="font-bold relative z-10">Diesel Gensets</span>
            </button>

            <button
              onClick={() => setActiveTab('gas')}
              className={`group flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 relative overflow-hidden ${
                activeTab === 'gas' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {activeTab === 'gas' && (
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl transition-all duration-500"></div>
              )}
              <Zap className={`w-6 h-6 relative z-10 ${activeTab === 'gas' ? 'text-white' : 'text-slate-500'}`} />
              <span className="font-bold relative z-10">Gas Gensets</span>
            </button>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-700">
            <div className={`flex flex-col lg:flex-row bg-gradient-to-br ${activeData.gradient} relative transition-colors duration-700`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative h-[350px] lg:h-[550px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
                {/* Image component from Next.js */}
                <div className="relative w-full h-full transform transition-transform duration-700 hover:scale-105">
                   <div className="bg-slate-800 w-full h-full flex items-center justify-center text-white italic">
                      {/* Replace with <Image /> when you have the source */}
                      {/* [ Image: {activeData.title} ] */}
                      <img src="/CPCB-D.webp" alt="" />
                   </div>
                </div>
                
                <div className="absolute top-6 left-6 z-20">
                  <div className="backdrop-blur-md bg-white/20 px-4 py-2 rounded-full border border-white/30">
                    <span className="text-white font-semibold text-sm">CPCB IV+ Certified</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 p-8 lg:p-14 text-white relative">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold mb-6 tracking-tight transition-all">
                    {activeData.title}
                  </h3>
                  <p className="text-white/80 mb-8 text-lg leading-relaxed">
                    {activeData.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {activeData.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
                        <CircleCheckBig className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                        <span className="text-white/90 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <a 
                      href=''
                      className="group inline-flex items-center gap-3 backdrop-blur-md bg-white/20 hover:bg-white text-white hover:text-slate-900 px-8 py-4 rounded-2xl border border-white/30 transition-all duration-300 hover:scale-105 shadow-xl font-bold"
                    >
                      View All Products
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GensetSection;
"use client";
import React from 'react';
import { 
  Building2, 
  Factory, 
  Hospital, 
  GraduationCap, 
  ShoppingBag, 
  Zap, 
  Truck, 
  Home, 
  Wifi 
} from 'lucide-react';

const IndustriesSection = () => {
  const sectors = [
    { name: "Commercial Buildings", icon: <Building2 className="w-8 h-8 text-blue-600" />, color: "from-blue-50 to-indigo-50" },
    { name: "Manufacturing", icon: <Factory className="w-8 h-8 text-orange-600" />, color: "from-orange-50 to-amber-50" },
    { name: "Healthcare", icon: <Hospital className="w-8 h-8 text-red-600" />, color: "from-red-50 to-pink-50" },
    { name: "Education", icon: <GraduationCap className="w-8 h-8 text-purple-600" />, color: "from-purple-50 to-violet-50" },
    { name: "Retail", icon: <ShoppingBag className="w-8 h-8 text-green-600" />, color: "from-green-50 to-emerald-50" },
    { name: "Data Centers", icon: <Zap className="w-8 h-8 text-yellow-600" />, color: "from-yellow-50 to-orange-50" },
    { name: "Logistics", icon: <Truck className="w-8 h-8 text-teal-600" />, color: "from-teal-50 to-cyan-50" },
    { name: "Residential", icon: <Home className="w-8 h-8 text-rose-600" />, color: "from-rose-50 to-pink-50" },
    { name: "Telecommunications", icon: <Wifi className="w-8 h-8 text-indigo-600" />, color: "from-indigo-50 to-blue-50" },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background Decor - Animated Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-teal-200/30 to-emerald-200/30 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 via-teal-700 to-green-700 bg-clip-text text-transparent mb-4">
            Powering Sectors & Industries
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="group cursor-pointer perspective-1000"
              tabIndex={0}
            >
              <div className="relative overflow-hidden rounded-2xl h-full transition-transform duration-500 hover:-translate-y-2">
                {/* Main Glass Card */}
                <div className="backdrop-blur-xl bg-white/40 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full">
                  
                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-50 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon Container */}
                    <div className="mb-6 p-5 backdrop-blur-md bg-white/50 rounded-2xl border border-white/60 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {sector.icon}
                    </div>

                    <h3 className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                      {sector.name}
                    </h3>

                    {/* Animated Underline */}
                    <div className="mt-4 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-16 transition-all duration-300 rounded-full"></div>
                  </div>

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
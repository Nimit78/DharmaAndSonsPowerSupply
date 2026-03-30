import React from 'react';
import { Clock, Database, Lightbulb, Users } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Years of Excellence",
      value: "39+",
      desc: "Trusted legacy in power solutions",
      gradient: "from-orange-500/20 to-yellow-500/20"
    },
    {
      icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Projects Executed",
      value: "25,000+",
      desc: "Powering industries nationwide",
      gradient: "from-teal-500/20 to-blue-400/20"
    },
    {
      icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Loyal Customers",
      value: "10,000+",
      desc: "Growing with customer trust",
      gradient: "from-green-600/20 to-emerald-400/20"
    },
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Client Satisfaction",
      value: "95%",
      desc: "Delivering quality that wins trust",
      gradient: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#004d40] text-white overflow-hidden mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Left Grid - Stats */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`p-4 sm:p-6 rounded-xl transition-all duration-500 relative backdrop-blur-lg border border-white/20 bg-gradient-to-br ${stat.gradient} shadow-md group hover:scale-[1.02]`}
                >
                  {/* Decorative Circles Background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 transition-transform duration-700 w-full h-full hidden sm:flex items-center justify-center pointer-events-none">
                    <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border-4 border-white/10 flex items-center justify-center">
                      <div className="w-[60px] h-[60px] rounded-full border-4 border-white/5"></div>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="rounded-full p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm">
                        {stat.icon}
                      </div>
                      <h3 className="text-sm sm:text-base font-medium text-white">{stat.title}</h3>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold mb-2 transition-all duration-300">
                      {stat.value}
                    </div>
                    <p className="text-xs sm:text-sm hidden sm:block text-white/80">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-4 sm:mb-6 text-sm sm:text-md font-bold uppercase tracking-wider text-orange-400">
              About Perfect Generator
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              India's Leading OEM Partner for <br className="hidden md:block" /> 
              <span className="text-yellow-400">Mahindra Powerol Gensets</span>
            </h2>
            <p className="mb-4 sm:mb-6 text-base text-gray-100 leading-relaxed">
              Perfect Generator Technologies Pvt. Ltd. is a proud OEM of Mahindra & Mahindra Ltd., 
              delivering cutting-edge diesel and gas gensets trusted by businesses across India. 
              We specialize in CPCB IV+ compliant, fuel-efficient, and high-performance gensets 
              tailored for commercial, industrial, and infrastructure needs.
            </p>
            <p className="hidden md:block mb-6 sm:mb-8 text-sm sm:text-base text-gray-200/90 leading-relaxed border-l-2 border-yellow-400 pl-4">
              With a strong focus on quality, innovation, and customer satisfaction, we provide 
              dependable power solutions that keep operations running smoothly — from factories 
              and hospitals to educational institutions and construction sites.
            </p>
            
            <button className="w-fit inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-md bg-yellow-500 hover:bg-orange-500 text-white px-6 py-3 text-sm sm:text-base shadow-lg hover:shadow-orange-500/40">
              Know More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React from 'react';
import Image from 'next/image';

const PartnerSlider = () => {
  // Logo filenames ki list (Aapke images folder ke hisaab se)
  const partnerLogos = [
    'KMLOGO.webp', 'KMLOGO.webp', 'KMLOGO.webp', 'KMLOGO.webp', 'KMLOGO.webp',
    'KMLOGO.webp', 'KMLOGO.webp', 'KMLOGO.webp', 'KMLOGO.webp', 'KMLOGO.webp',
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Our Partner Companies
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        {/* Slider Wrapper */}
        <div className="relative flex overflow-hidden group">
          {/* Left & Right Gradient Overlays (Fade Effect) */}
          <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent"></div>

          {/* Scrolling Content - First Row */}
          <div className="flex scroller-view animate-infinite-scroll whitespace-nowrap group-hover:pause-animation">
            {[...partnerLogos].map((logo, index) => (
              <div key={`first-${index}`} className="flex items-center justify-center mx-8 w-40 h-20">
                <img
                  src={`/${logo}`}
                  alt={`Partner ${index + 1}`}
                  className="max-h-[60px] w-auto object-contain mix-blend-multiply  hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Scrolling Content - Duplicate (For Infinite Loop) */}
          <div className="flex  ">
            {partnerLogos.map((logo, index) => (
              <div key={`second-${index}`} className="flex items-center justify-center mx-8 w-40 h-20">
                <img
                  src={`${logo}`}
                  alt={`Partner ${index + 1}`}
                  className="max-h-[60px] w-auto object-contain mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles for Hover Pause */}
     
    </section>
  );
};

export default PartnerSlider;
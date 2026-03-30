import React from 'react';

const ProductRangeHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 px-4 mt-8 ">
      {/* Section Heading */}
      <h2 
        className="text-3xl text-gray-700 md:text-4xl font-bold mb-6  bg-clip-text bg-gradient-to-r "
        
      >
        Our Product Range
      </h2>

      {/* Gold Divider Line */}
      <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>

      {/* Description Text */}
      <p 
        className="text-gray-700 leading-relaxed " 
        style={{ opacity: 1, transform: 'none' }}
      >
        Explore our reliable and efficient power solutions engineered to serve 
        diverse needs across industrial, commercial, and infrastructure sectors.
      </p>
    </div>
  );
};

export default ProductRangeHeader;
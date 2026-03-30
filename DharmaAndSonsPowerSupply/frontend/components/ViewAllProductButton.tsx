import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ViewAllButton = () => {
  return (
    <div className="text-center mt-10">
      <Link href="/" passHref>
        <button
          className="
            inline-flex items-center justify-center gap-2 whitespace-nowrap 
            text-sm font-medium transition-all duration-300
            disabled:pointer-events-none disabled:opacity-50 
            outline-none focus-visible:ring-2 focus-visible:ring-orange-500
            shadow-sm hover:shadow-lg
            h-10 rounded-md px-6
            bg-gradient-to-r from-[#D4AF37] to-[#f37021] 
            text-white group
          "
        >
          View All Products
          <ArrowRight 
            className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            aria-hidden="true" 
          />
        </button>
      </Link>
    </div>
  );
};

export default ViewAllButton;
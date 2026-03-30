import React from 'react';
import { Zap, Flame, Lightbulb, ChartColumn, PanelLeft, SlidersHorizontal, BatteryCharging, ArrowRight } from 'lucide-react';
import ViewAllButton from './ViewAllProductButton';

const products = [
    {
        title: "Diesel Gensets",
        image: '/image4.png',
        icon: <Zap className="text-white" />,
        className: "col-span-1 md:col-span-2 md:row-start-1 lg:col-span-2 lg:row-start-1",
        hoverShadow: "hover:shadow-[0_0_15px_rgba(102,75,64,0.5)]"
    },
    {
        title: "Gas Gensets",
        image: "/image2.png",
        icon: <Flame className="text-white" />,
        className: "col-span-1 md:col-span-1 md:row-start-1 lg:col-start-3 lg:row-start-1",
        hoverShadow: "hover:shadow-[0_0_15px_rgba(252,175,57,0.5)]"
    },
    {
        title: "Mobile Light Towers",
        image: "/image3.png",
        icon: <Lightbulb className="text-white" />,
        className: "col-span-1 md:col-span-1 md:row-start-2 lg:col-start-1 lg:row-start-2",
        hoverShadow: "hover:shadow-[0_0_15px_rgba(79,163,165,0.5)]"
    },
    {
        title: "Rental Gensets",
        image: "/image1.jpeg",
        icon: <ChartColumn className="text-white" />,
        className: "col-span-1 md:col-span-1 md:row-start-2 lg:col-start-2 lg:row-start-2",
        hoverShadow: "hover:shadow-[0_0_15px_rgba(247,84,53,0.5)]"
    },
    {
        title: "LT Panels",
        image: "/image5.jpeg",
        icon: <PanelLeft className="text-white" />,
        className: "col-span-1 md:col-span-2 md:row-start-3 lg:col-span-1 lg:col-start-3 lg:row-start-2",
        hoverShadow: "hover:shadow-[0_0_15px_rgba(79,163,165,0.5)]"
    },
   
];

const ProductGrid = () => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 md:gap-6 px-4">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer h-full relative group min-h-[220px] ${product.hoverShadow} ${product.className}`}
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-110"

                            >
                                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                    <div className="relative w-full h-full ">
                                        <img
                                            alt='hero'
                                            src={product.image}
                                            className="w-full h-full object-cover object-center"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-6 h-full flex flex-col text-white">
                            <div className="flex items-center mb-3">
                                <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm mr-3">
                                    {product.icon}
                                </div>
                                <h3 className="text-lg font-bold">{product.title}</h3>
                            </div>

                            {/* Explore Button */}
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 h-8 rounded-md px-3 mt-auto bg-white text-[#4A3C34] hover:bg-[#D4AF37] hover:text-white self-start group/btn">
                                Explore
                                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>
                    </div>
                ))}


            </div>
            <ViewAllButton /></>
    );
};

export default ProductGrid;
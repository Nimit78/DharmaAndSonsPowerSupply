import React from 'react';
import ViewAllButton from './ViewAllProductButton';

const LatestArticles = () => {
  // Sample data - aap ise props se bhi pass kar sakte hain
  const articles = [
    {
      id: 1,
      title: "CPCB IV+ Diesel Gensets: The Future of Clean and Reliable Power in India",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop", // placeholder image
      link: "#"
    },
    {
      id: 2,
      title: "Sustainable Energy Solutions for Modern Infrastructure",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "Innovation in Indian Power Sector: Trends to Watch",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <section className="py-10 bg-[#004d40]"> {/* 'bg-pg-green' ko hex code se replace kiya hai */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Latest Articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-10">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="bg-white text-slate-900 rounded-xl border flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer"
            >
              {/* Image Container */}
              <div className="h-32 md:h-40 w-full overflow-hidden relative">
                <img 
                  alt={article.title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" 
                  src={article.image}
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-lg font-semibold leading-tight line-clamp-3">
                  {article.title}
                </h3>
                
                {/* Agar aapko link add karni ho */}
                <div className="mt-auto">
                  <span className="text-sm font-medium text-[#004d40] group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ViewAllButton/>
      </div>
    </section>
  );
};

export default LatestArticles;
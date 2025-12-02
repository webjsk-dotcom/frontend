import React from 'react';

const CraftsmanshipSection: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-24 bg-[#f9f8f6] relative overflow-hidden scroll-mt-20">
      {/* Background Watermark */}
      <div className="absolute top-10 right-0 pointer-events-none select-none">
        <span className="text-[10vw] font-bold text-gray-200/50 leading-none">
            BUILDING
        </span>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-gray-200 font-bold mb-4 md:mb-0">
                바릅니다.
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group overflow-hidden">
                <img 
                    src="https://picsum.photos/id/20/800/600" 
                    alt="Structure" 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6">
                    <h4 className="text-lg font-bold text-gray-800">올바른 내장재</h4>
                </div>
            </div>
            <div className="relative group overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2609&auto=format&fit=crop" 
                    alt="Leather Texture" 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute bottom-6 left-6">
                    <h4 className="text-lg font-bold text-gray-800">정직한 마감재</h4>
                </div>
            </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-0 pointer-events-none select-none">
        <span className="text-[10vw] font-bold text-gray-200/50 leading-none">
            LEGACY.
        </span>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
import React from 'react';
import { Plus } from 'lucide-react';

const DualBanner: React.FC = () => {
   return (
      <section id="media" className="flex flex-col md:flex-row h-auto md:h-screen scroll-mt-20">
      
      {/* Left */}
      <div className="flex-1 relative group overflow-hidden h-[500px] md:h-full">
         <img 
            src="https://images.unsplash.com/photo-1560448204-603b3fc71ddc?q=80&w=2670&auto=format&fit=crop"
            alt="Right Sofa"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
         />
         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
            <span className="font-serif italic text-lg mb-2">Right</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">바른소파</h2>
            <p className="text-sm opacity-80 mb-8">보이지 않는 곳까지 정성을 다합니다.</p>
            <button className="border border-white/50 px-6 py-2 text-xs hover:bg-white hover:text-black transition-colors">
                VIEW MORE
            </button>
         </div>
      </div>

      {/* Center Divider Visual (Absolute centered on desktop) */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white">
        <Plus size={48} strokeWidth={1} />
      </div>

      {/* Right */}
      <div className="flex-1 relative group overflow-hidden h-[500px] md:h-full">
         <img 
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2670&auto=format&fit=crop"
            alt="Different Sofa"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
         />
         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
            <span className="font-serif italic text-lg mb-2">Different</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">다른소파</h2>
            <p className="text-sm opacity-80 mb-8">보다 더 나은 것을 위해 끊임없이 연구합니다.</p>
             <button className="border border-white/50 px-6 py-2 text-xs hover:bg-white hover:text-black transition-colors">
                VIEW MORE
            </button>
         </div>
      </div>

    </section>
  );
};

export default DualBanner;
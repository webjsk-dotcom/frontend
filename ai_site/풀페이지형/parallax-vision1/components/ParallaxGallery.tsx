import React from 'react';

export const ParallaxGallery: React.FC = () => {
  return (
    <section 
      id="gallery" 
      className="h-screen w-full snap-start relative flex flex-col justify-center bg-zinc-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center">
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-12 relative z-20 mix-blend-difference">
          Visual <span className="italic text-purple-400">Echoes</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[60vh]">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-2xl h-full transform transition-all duration-700 hover:-translate-y-4 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/arch/600/800" 
              alt="Architecture" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-sans font-bold text-white">Structure</h3>
              <p className="text-gray-300 text-sm">Form follows function</p>
            </div>
          </div>

          {/* Card 2 - Offset */}
          <div className="relative group overflow-hidden rounded-2xl h-full transform transition-all duration-700 md:mt-12 hover:-translate-y-4 shadow-2xl border border-white/10">
            <img 
              src="https://picsum.photos/seed/tech/600/800" 
              alt="Technology" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
             <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-sans font-bold text-white">Innovation</h3>
              <p className="text-gray-300 text-sm">Beyond limits</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded-2xl h-full transform transition-all duration-700 hover:-translate-y-4 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/nature/600/800" 
              alt="Nature" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
             <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-sans font-bold text-white">Organic</h3>
              <p className="text-gray-300 text-sm">Life finds a way</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

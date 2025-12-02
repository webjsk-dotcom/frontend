import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transform scale-105"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/nebula/1920/1080")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h2 className="text-xl md:text-2xl text-cyan-300 font-sans tracking-[0.5em] mb-4 animate-pulse-slow uppercase">
          Welcome to the Future
        </h2>
        <h1 className="text-6xl md:text-9xl font-serif text-white font-bold mb-8 text-glow leading-tight">
          BEYOND <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400">REALITY</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed animate-float">
          Scroll down to experience a new dimension of digital creativity.
        </p>
        
        <div className="mt-12">
           <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

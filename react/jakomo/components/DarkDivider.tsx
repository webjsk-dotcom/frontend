import React from 'react';

const DarkDivider: React.FC = () => {
  return (
    <section className="w-full bg-[#1a1a1a] py-40 md:py-60 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
      <h2 className="text-[15vw] md:text-[12vw] font-bold text-[#2a2a2a] leading-none select-none tracking-tighter">
        다릅니다.
      </h2>
      <div className="absolute inset-0 flex items-center justify-center">
         <h3 className="text-4xl md:text-6xl font-bold text-white/90 z-10 font-serif">
            나듭니다.
         </h3>
      </div>
    </section>
  );
};

export default DarkDivider;
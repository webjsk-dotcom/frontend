import React from 'react';

const services = [
  { title: "Digital Strategy", desc: "Navigating the complex digital landscape with precision.", icon: "01" },
  { title: "UI/UX Design", desc: "Creating immersive interfaces that breathe and react.", icon: "02" },
  { title: "AI Integration", desc: "Embedding intelligence into every pixel and interaction.", icon: "03" },
  { title: "Brand Identity", desc: "Forging legends through visual storytelling.", icon: "04" },
];

export const FeatureCards: React.FC = () => {
  return (
    <section 
      id="services" 
      className="h-screen w-full snap-start relative flex items-center justify-center bg-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/30"></div>
        <img src="https://picsum.photos/seed/geometry/1920/1080" className="w-full h-full object-cover opacity-10 mix-blend-overlay" alt="bg"/>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Our Expertise</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div 
              key={idx}
              className="group relative h-80 perspective-1000"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl transition-all duration-500 transform group-hover:-translate-y-4 group-hover:bg-white/10 group-hover:border-indigo-500/50 flex flex-col justify-between">
                
                <div className="text-6xl font-serif text-white/5 font-bold absolute top-4 right-4 group-hover:text-indigo-500/20 transition-colors">
                  {s.icon}
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 bg-indigo-500 w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

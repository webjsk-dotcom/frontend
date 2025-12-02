import React from 'react';

export const ContactFooter: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="h-screen w-full snap-start relative flex flex-col justify-between bg-black text-white"
    >
      <div className="flex-1 flex items-center justify-center relative">
         <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://picsum.photos/seed/map/1920/1080")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) invert(100%)'
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-5xl md:text-8xl font-serif mb-8 tracking-tighter mix-blend-difference">
            Let's Talk.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 font-sans font-light">
            Ready to start your journey into the extraordinary?
          </p>

          <form className="space-y-6 text-left max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <input 
                type="email" 
                placeholder=" "
                className="w-full bg-transparent border-b-2 border-white/20 py-4 text-xl focus:outline-none focus:border-cyan-400 transition-colors peer"
              />
              <label className="absolute left-0 top-4 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">
                Your Email Address
              </label>
            </div>
             <button className="mt-8 w-full py-4 border border-white/20 rounded hover:bg-white hover:text-black transition-all duration-300 font-sans font-bold tracking-widest uppercase">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="relative z-10 py-8 border-t border-white/10 bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-sans">
          <p>&copy; 2024 Parallax Vision Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

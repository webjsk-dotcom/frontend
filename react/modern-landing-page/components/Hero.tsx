import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 translate-x-1/3 -translate-y-1/4">
        <div className="w-[800px] h-[800px] bg-indigo-200 rounded-full blur-3xl mix-blend-multiply filter"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-30 -translate-x-1/3 translate-y-1/4">
        <div className="w-[600px] h-[600px] bg-purple-200 rounded-full blur-3xl mix-blend-multiply filter"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wider uppercase mb-6 border border-indigo-100">
              Modern Web Solutions
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Create digital <span className="text-indigo-600">experiences</span> that matter.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We help brands grow by creating stunning, responsive, and high-performance websites that engage users and drive conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition-transform hover:-translate-y-1 shadow-lg shadow-indigo-200">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all hover:border-slate-300">
                <Play className="mr-2 w-5 h-5 fill-slate-700" />
                View Work
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/800/600?random=1" 
                alt="Modern Workspace" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent pointer-events-none"></div>
            </div>
            {/* Floating Card Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">98% Satisfaction</p>
                  <p className="text-xs text-slate-500">Based on 500+ reviews</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
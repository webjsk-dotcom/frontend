import React from 'react';
import { STORIES } from '../constants';
import { ArrowRight } from 'lucide-react';

const StorySection: React.FC = () => {
  return (
    <section id="brand" className="py-24 md:py-32 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24 space-y-6">
          <span className="text-sm tracking-[0.2em] font-serif text-gray-500">SINCE 1986</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-gray-900">
            깊이를 담아, 다르게<br />
            정성을 담아, 바르게
          </h2>
          <p className="text-gray-500 font-light mt-4">
            당신의 온전한 휴식을 위해 다르게, 더 바르게 만듭니다.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          {STORIES.map((story) => (
            <div key={story.id} className="group cursor-pointer">
              <div className="mb-4 flex flex-col items-start border-t border-black pt-4">
                <span className="text-xs font-bold text-gray-500 mb-1">{story.category}</span>
                <h3 className="text-3xl font-serif text-gray-900 group-hover:text-gray-600 transition-colors">
                  {story.title}
                </h3>
              </div>
              <div className="overflow-hidden relative aspect-[4/5] bg-gray-100">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 p-3 rounded-full backdrop-blur-sm">
                        <ArrowRight className="w-5 h-5" />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StorySection;
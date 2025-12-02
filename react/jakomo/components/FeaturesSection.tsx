import React from 'react';
import { FEATURES } from '../constants';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="space-y-32">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden aspect-[16/10] group">
                    <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold font-sans text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base border-t pt-6 border-gray-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
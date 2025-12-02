import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "Expert Team of Developers",
    "Modern Tech Stack (React, Tailwind)",
    "Pixel Perfect Design",
    "24/7 Dedicated Support"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative mb-12 lg:mb-0 order-2 lg:order-1">
            <div className="absolute top-4 left-4 w-full h-full bg-slate-100 rounded-2xl -z-10"></div>
            <img 
              src="https://picsum.photos/600/700?random=2" 
              alt="Our Team" 
              className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
            />
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              We design, build, and launch digital products.
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Founded in 2024, NexusUI has helped hundreds of companies launch their products. We focus on clean code, accessible design, and high performance to ensure your users have the best experience possible.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-slate-700">
                  <CheckCircle2 className="text-indigo-600 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a href="#contact" className="text-indigo-600 font-bold hover:text-indigo-700 hover:underline">
                Learn more about our story &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
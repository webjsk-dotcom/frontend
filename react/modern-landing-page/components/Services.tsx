import React from 'react';
import { Palette, Code, Smartphone, Globe, BarChart3, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'We create intuitive and aesthetically pleasing user interfaces that ensure a seamless user experience.'
  },
  {
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'Robust and scalable web applications built with the latest technologies like React and Node.js.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that work perfectly on both iOS and Android devices.'
  },
  {
    icon: <Globe size={32} />,
    title: 'SEO Optimization',
    description: 'Improve your visibility on search engines and drive more organic traffic to your website.'
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your brand and reach your target audience.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Cyber Security',
    description: 'Protect your digital assets with our advanced security audits and implementation services.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Do Best</h3>
          <p className="text-slate-600 text-lg">
            We provide a wide range of digital services to help your business grow and succeed in the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
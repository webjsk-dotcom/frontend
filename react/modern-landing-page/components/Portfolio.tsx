import React from 'react';

const projects = [
  { id: 1, title: 'E-Commerce Dashboard', category: 'Web App', img: 'https://picsum.photos/600/400?random=10' },
  { id: 2, title: 'Fitness Tracker', category: 'Mobile App', img: 'https://picsum.photos/600/600?random=11' },
  { id: 3, title: 'Travel Agency', category: 'Branding', img: 'https://picsum.photos/600/400?random=12' },
  { id: 4, title: 'Financial Tech', category: 'Web Design', img: 'https://picsum.photos/600/500?random=13' },
  { id: 5, title: 'Restaurant Menu', category: 'UI Design', img: 'https://picsum.photos/600/400?random=14' },
  { id: 6, title: 'Social Media Bot', category: 'Development', img: 'https://picsum.photos/600/450?random=15' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recent Works</h3>
            <p className="text-slate-600 text-lg">
              Explore our latest projects and see how we help businesses achieve their goals through design and technology.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="#" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700">
              View All Projects &rarr;
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl cursor-pointer">
              {/* Image */}
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-indigo-400 text-sm font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h4 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700">
              View All Projects &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
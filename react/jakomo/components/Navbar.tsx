import React, { useState, useEffect } from 'react';
import { Search, Menu, Globe, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string>('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // IntersectionObserver might not exist in some environments — guard it
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const sectionIds = NAV_ITEMS.map((i) => i.href).filter(Boolean) as string[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + (entry.target as HTMLElement).id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((href) => {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // (Note: IntersectionObserver logic is handled above with a guard)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold tracking-widest cursor-pointer">
          JAKOMO
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={active === item.href ? 'page' : undefined}
              onClick={(e) => {
                // Smoothly scroll to the target via JS for precision and update URL
                e.preventDefault();
                const id = item.href.replace('#', '');
                const el = document.getElementById(id);
                if (el && typeof el.scrollIntoView === 'function') {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                // Update the URL safely
                try { history.pushState && history.pushState(null, '', item.href); } catch (err) { /* noop */ }
              }}
              className={`hover:text-gray-300 transition-colors relative group ${active === item.href ? 'text-white underline underline-offset-4' : ''}`}
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-6 text-sm">
          <div className="hidden lg:flex items-center space-x-1 cursor-pointer hover:opacity-80">
            <Globe size={16} />
            <span>KOR</span>
          </div>
          <button className="hidden lg:flex items-center space-x-1 border border-white/30 rounded-full px-4 py-1.5 hover:bg-white/10 transition-colors">
             <span>공식몰 바로가기</span>
             <ChevronRight size={14} />
          </button>
          <Search size={20} className="cursor-pointer hover:opacity-80" />
          <Menu size={24} className="cursor-pointer hover:opacity-80" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
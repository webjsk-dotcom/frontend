import React from 'react';
import { NavItem } from '../types';

interface NavbarProps {
  items: NavItem[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ items, activeSection, onNavigate }) => {
  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-6">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className="group relative flex items-center justify-end"
          aria-label={`Navigate to ${item.label}`}
        >
          <span 
            className={`
              absolute right-8 px-2 py-1 bg-white text-black text-xs font-bold rounded opacity-0 
              transition-all duration-300 transform translate-x-4
              group-hover:opacity-100 group-hover:translate-x-0
            `}
          >
            {item.label}
          </span>
          <div 
            className={`
              w-3 h-3 rounded-full border-2 border-white transition-all duration-500
              ${activeSection === item.id ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'}
            `}
          />
        </button>
      ))}
    </nav>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ParallaxGallery } from './components/ParallaxGallery';
import { AiVisionSection } from './components/AiVisionSection';
import { FeatureCards } from './components/FeatureCards';
import { ContactFooter } from './components/ContactFooter';
import { NavItem, SectionType } from './types';

const NAV_ITEMS: NavItem[] = [
  { id: SectionType.HERO, label: 'Home' },
  { id: SectionType.GALLERY, label: 'Explore' },
  { id: SectionType.VISION, label: 'Vision AI' },
  { id: SectionType.SERVICES, label: 'Services' },
  { id: SectionType.CONTACT, label: 'Contact' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>(SectionType.HERO);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Spy Logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Calculate current index based on scroll position
      const currentIndex = Math.round(scrollPosition / windowHeight);
      
      if (NAV_ITEMS[currentIndex]) {
        setActiveSection(NAV_ITEMS[currentIndex].id);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans selection:bg-cyan-500 selection:text-black">
      <Navbar 
        items={NAV_ITEMS} 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Main Snap Container */}
      <main 
        ref={containerRef}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide scroll-smooth"
      >
        <HeroSection />
        <ParallaxGallery />
        <AiVisionSection />
        <FeatureCards />
        <ContactFooter />
      </main>
    </div>
  );
}

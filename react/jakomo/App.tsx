import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import DarkDivider from './components/DarkDivider';
import FeaturesSection from './components/FeaturesSection';
import CraftsmanshipSection from './components/CraftsmanshipSection';
import AcademySection from './components/AcademySection';
import ShowroomSection from './components/ShowroomSection';
import DualBanner from './components/DualBanner';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up-active');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.fade-up-enter');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer && observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="fade-up-enter transition-all duration-1000">
          <StorySection />
        </div>

        <div className="fade-up-enter transition-all duration-1000">
          <FeaturesSection />
        </div>

        <DarkDivider />
        
        <div className="fade-up-enter transition-all duration-1000">
          <CraftsmanshipSection />
        </div>

        <div className="fade-up-enter transition-all duration-1000">
          <AcademySection />
        </div>

        <ShowroomSection />
        
        <DualBanner />
      </main>

      <Footer />
      
      {/* Scroll to Top Button (Optional but common in these sites) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-10 h-10 bg-black text-white flex items-center justify-center text-xs z-40 hover:bg-gray-800 transition-colors"
        aria-label="Scroll to top"
      >
        TOP
      </button>
    </div>
  );
};

export default App;
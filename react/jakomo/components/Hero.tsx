import React, { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden scroll-mt-20">
      {/* Slider Background (Left-to-right animation) */}
      <div className="absolute inset-0">
        <Slider />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight font-sans">
            프리미엄 소파의 압도적 기준<br />
            소파는 결국, 자코모
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide">
            We Make Quality JAKOMO.
          </p>
        </div>
      </div>
    </section>
  );
};

// Local slider component handling left-to-right transitions
const Slider: React.FC = () => {
  const rawImages = [
    'https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=2574&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505691723518-36a1a8d4f3f4?q=80&w=2574&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=2374&auto=format&fit=crop'
  ];

  const images = rawImages.filter(Boolean);

  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [prevTransform, setPrevTransform] = useState<string>('translateX(0)');
  const [currTransform, setCurrTransform] = useState<string>('translateX(0)');
  const duration = 700;
  const autoRef = useRef<number | null>(null);

  if (images.length === 0) {
    return <div className="w-full h-full bg-gray-800" />;
  }

  const single = images.length === 1;

  useEffect(() => {
    if (images.length <= 1) return;
    startAuto();
    return () => stopAuto();
  }, [current, images.length]);

  const startAuto = () => {
    stopAuto();
    if (typeof window !== 'undefined') {
      autoRef.current = window.setTimeout(() => handleNext(), 4500);
    }
  };

  const stopAuto = () => {
    if (autoRef.current) {
      window.clearTimeout(autoRef.current);
      autoRef.current = null;
    }
  };

  const handleNext = (targetIndex?: number) => {
    if (images.length <= 1) return;

    const next =
      typeof targetIndex === 'number'
        ? targetIndex
        : (current + 1) % images.length;

    setPrev(current);
    setCurrent(next);
    setPrevTransform('translateX(0)');
    setCurrTransform('translateX(-100%)');
    setAnimating(true);

    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => {
        setPrevTransform('translateX(100%)');
        setCurrTransform('translateX(0)');
      });
    }

    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, duration);
  };

  const handlePrev = () => {
    const next = (current - 1 + images.length) % images.length;
    handleNext(next);
  };

  return (
    <div
      className="w-full h-full relative bg-black/20"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      {/* Slides */}
      {prev !== null && (
        <img
          src={images[prev]}
          alt={`Slide ${prev + 1}`}
          className={`absolute inset-0 w-full h-full ${single ? 'object-contain' : 'object-cover'} transition-transform duration-700 ease-in-out z-0`}
          style={{ transform: prevTransform }}
        />
      )}

      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className={`absolute inset-0 w-full h-full ${single ? 'object-contain' : 'object-cover'} transition-transform duration-700 ease-in-out z-0`}
        style={{ transform: currTransform }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 z-10" />

      {/* Slider Progress and numbers */}
      {images.length > 1 && (
        <div className="absolute left-6 bottom-6 z-30 text-white/70 text-xs flex items-center space-x-4">
          <div className="w-48 h-[2px] bg-white/20 relative">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all"
              style={{
                width: `${(current / (images.length - 1)) * 100}%`,
              }}
            />
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-bold text-sm">
              {String(current + 1).padStart(2, '0')}
            </span>
            <span>/</span>
            <span className="text-sm">
              {String(images.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      )}

      {/* Controls */}
      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-6 flex items-center justify-center z-30 space-x-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to ${idx + 1}`}
              onClick={() => {
                if (idx === current) return;
                stopAuto();
                setPrev(current);
                setCurrent(idx);
                setPrevTransform('translateX(0)');
                setCurrTransform('translateX(-100%)');
                setAnimating(true);

                if (typeof window !== 'undefined') {
                  window.requestAnimationFrame(() => {
                    setPrevTransform('translateX(100%)');
                    setCurrTransform('translateX(0)');
                  });
                }

                setTimeout(() => {
                  setPrev(null);
                  setAnimating(false);
                }, duration);
              }}
              className={`w-3 h-3 rounded-full ${
                idx === current ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      )}

      {/* Optional prev/next arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => {
              stopAuto();
              handlePrev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={() => {
              stopAuto();
              handleNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white"
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default Hero;



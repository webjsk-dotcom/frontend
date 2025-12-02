import React from 'react';

const ShowroomSection: React.FC = () => {
    return (
        <section id="showroom" className="w-full relative h-[60vh] md:h-[80vh] scroll-mt-20">
        <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
            alt="Showroom"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center p-12 md:p-24">
            <div className="text-white space-y-4 max-w-lg">
                <span className="text-sm tracking-widest uppercase opacity-80">Global</span>
                <h2 className="text-5xl md:text-7xl font-serif font-medium">SHOWROOM</h2>
                <p className="text-sm md:text-base opacity-90 leading-relaxed pt-4">
                    40년 자코모 발굴 프로젝트의 일환으로 양질의 전문 인재를 양성하기 위해 국내 최초로 국가에 정식 등록된...
                </p>
                <div className="pt-8">
                     <button className="border border-white/50 px-6 py-2 text-xs hover:bg-white hover:text-black transition-colors">
                        VIEW MORE
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ShowroomSection;
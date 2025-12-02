import React from 'react';

const AcademySection: React.FC = () => {
  return (
    <section id="academy" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16">
        
        {/* Text Content */}
        <div className="lg:w-1/3 flex flex-col justify-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-sans leading-tight">
                과거가 미래,<br/>
                소파 아카데미
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
                소파 전문 인재 발굴 프로젝트의 일환으로 양질의 전문 인력을 양성하기 위해 국내 최초로 국가에 정식 등록된 한국소파전문교육원을 설립하였습니다. 총 6개월간 이론과 실습의 과정을 거쳐 자코모의 소파 공정 분야 별로 배치되어 장인들과 함께 일할 수 있는 기회가 제공됩니다.
            </p>
            <div>
                <button className="border border-black px-6 py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                    View More
                </button>
            </div>
        </div>

        {/* Images Grid */}
        <div className="lg:w-2/3 grid grid-cols-2 gap-4">
             <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2670&auto=format&fit=crop" 
                alt="Academy 1" 
                className="w-full h-full object-cover aspect-square"
            />
             <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
                alt="Academy 2" 
                className="w-full h-full object-cover aspect-square"
            />
        </div>
      </div>
    </section>
  );
};

export default AcademySection;
import React, { useMemo, useState, useRef, useCallback } from 'react'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/Sectionfour'
import SectionFive from './components/SectionFive'
import SectionSix from './components/SectionSix'
import FixAnimation from './components/FixAnimation'
import NavigationDots from './components/NavigationDots'
import Header from './components/Header'
import OverlayMenu from './components/OverlayMenu'

const SECTION_CONFIG = [
  { id: 'section1', label: 'Main', theme: 'dark' }, //index 0
  { id: 'section2', label: 'Our Value', theme: 'light' },
  { id: 'section3', label: 'What we do', theme: 'dark' },
  { id: 'section4', label: 'Nasreport', theme: 'light' },
  { id: 'section5', label: "Let's be Together", theme: 'dark' },
  { id: 'section6', label: 'Contact', theme: 'dark' },
];

const SECTION_COUNT = SECTION_CONFIG.length;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //({menu를 눌러야만 나오게 그래서 초기는 flase)}
  const [showIntro, setShowIntro] = useState(true);

  const [activeSection, setActiveSection] = useState(0);
  // 현재 활성화된 섹션 인덱스(0~5)?

  const wheelLock = useRef(false);
  const touchStartY = useRef(null);

  
  const changeSection = useCallback((next)=>{
    if(showIntro || isMenuOpen){
      return;
    }
    setActiveSection((prev)=>{
      const clamped = Math.max(0, Math.min(SECTION_COUNT - 1, next(prev)));
      return clamped;
    });
  },[isMenuOpen, showIntro]);


  const handleWheel = useCallback((event)=>{
    if(wheelLock.current || isMenuOpen || showIntro){
      return;
      //wheelLock.current - 휠처리중복방지 -> 1초간 추가휠 이벤트 금지
      //isMenuOpen 메뉴가 열려있을땐 휠금지
      //shwoIntro 인트로 애니메이션 중 휠 이벤트 무시
    }

  const delta = event.deltaY;
    if (delta === 0) return;
    console.log('마우스 휠 deltaY:', delta, delta > 0 ? '(아래로 스크롤)' : '(위로 스크롤)');
    // 밑으로 휠 양수  위로 휠 음수
    wheelLock.current = true;  // 휠 금지     ({1초 동안})
    changeSection((prev) => (delta > 0 ? prev + 1 : prev - 1));
    window.setTimeout(() => {
      wheelLock.current = false;
    }, 1000);
  });
  

  // TouchMove -------------------------------
  // 모바일터치부분
  const handelTouchStart = useCallback((event)=>{
    if(isMenuOpen || showIntro) return; //메뉴가 열려 있을때나 인트로중에는 무시
    touchStartY.current = event.touches[0].clientY;
    //현재는 첫번째 터치만 처리     ({[0]첫번째})
  },[isMenuOpen, showIntro]);

  
  // 위 터치하고 밀기(move)
  const handelTouchMove = useCallback((event)=>{
    if(touchStartY.current==null || wheelLock.current || isMenuOpen || showIntro) return;
    // 시작위치가 없거나 , 잠금, 메뉴 보이거나, 인트로 상태에서는 빠져나감

    const currentY = event.touches[0].clientY;
    const delta = touchStartY.current = currentY;
    if(Math.abs(delta) < 50){
      return;
    }
    wheelLock.current = true;
    changeSection((prev) => (delta > 0 ? prev + 1 : prev - 1));
    window.setTimeout(() => {
      wheelLock.current = false;
    }, 1000);
    touchStartY.current = null;
  },[isMenuOpen, showIntro, changeSection]);

  const handleTouchEnd = useCallback(() => {
    touchStartY.current = null;
  }, []);
  

  // 수직으로 100% 1초만에 이동
  const fullCoverStyle = useMemo(()=>({
    transform: `translateY(-${activeSection * 100}vh)`,
    transition: "transform 1s ease",
  }),[activeSection]);
  
  const sections = useMemo(()=>SECTION_CONFIG, []);

  return (
    <div className={`app-root${isMenuOpen ? ' menu-open' : ''}`}>
      {/* FixAnimation 한번만 실행할것 ({처음나오는 애니메이션}) */}
      <FixAnimation visible={showIntro} onFinished={()=>setShowIntro(false)} />

      <Header isMenuOpen={isMenuOpen} onToggleMenu={()=>setIsMenuOpen((prev)=> !prev)} 
      isLightBackground={sections[activeSection]?.theme === 'light'} 
      /> 

      <OverlayMenu isOpen={isMenuOpen} onClose={()=>setIsMenuOpen(false)} />
      <NavigationDots
        sections={sections}
        activeIndex={activeSection}
        onSelect={(index) => changeSection(() => index)}
      />

      <div id="fullpage" 
      onWheel={handleWheel} 
      onTouchStart={handelTouchStart} 
      onTouchMove={handelTouchMove}
      onTouchEnd={handleTouchEnd}
      >
        <div className="full_cover" style={fullCoverStyle}>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />          
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './navbar.css';


export default function Navbar({activeSection}) {
  const[isMenuOpen, setIsMenuOpen] = useState(false);
  //isMenuOpen : 모바일 메뉴가 열려 있는지 여부(true - 열림, false - 닫힘)
  //setIsMenuOpen 메뉴 상태를 바꿈

  //네비게이션 항목 목록
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  //id값을 받아와서 스크롤
  const scrollToSection = (sectionId) =>{
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({behavior:'smooth'});
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <span className="logo-text">Portfolio</span>
          </div>

          {/* pc nav */}
          <div className="desktop-nav">
            {navItems.map((item)=>(              
              <botton 
              key={item.id}
              onClick={()=>scrollToSection(item.id)}
              className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              >{item.label}</botton>  
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* mobile nav */}
        {isMenuOpen &&(        
        <div className="mobile-nav">
          <div className="mobile-nav-items">
          {navItems.map((item)=>(              
            <botton 
            key={item.id}
            onClick={()=>scrollToSection(item.id)}
            className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
            >{item.label}</botton>  
          ))}
          </div>
        </div>
        )}
      </div>
      
    </nav>
  )
}

import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='Header'>
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

export default React.memo(Header);  //React.memo -> header는 한번만 로딩하겠다뜻
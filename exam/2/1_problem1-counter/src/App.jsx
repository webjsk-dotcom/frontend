import React, { useState } from 'react';

function App() {
  // 상태 관리: 카운터 값
  const [count, setCount] = useState(0);

  // 이벤트 핸들러
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  // 카운터 값에 따른 색상 결정 (보너스)
  const getCountColor = () => {
    if (count > 0) return '#4caed6';  
    if (count < 0) return 'hotpink';   
    return '#999';     
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>카운터 앱</h1>
        
        <div style={{
          ...styles.countDisplay,
          color: getCountColor()
        }}>
          {count}
        </div>

        <div style={styles.buttonGroup}>
          <button 
            onClick={handleIncrement}
            style={styles.button1}
          >
            증가
          </button>
          
          <button 
            onClick={handleDecrement}
            style={styles.button2}
          >
            감소
          </button>
          
          <button 
            onClick={handleReset}
            style={styles.resetButton}
          >
            초기화
          </button>
        </div>
      </div>
    </div>
  );
}

// 스타일 객체
const styles = {
  container: {
    display: 'flex',   
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',    
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
  },
  content:{
    width:'500px',
    height:'500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',    
    backgroundColor:'rgba(255,255,255,1)',
    boxShadow:'0px 2px 10px rgba(0,0,0,0.3)',
    borderRadius:'50%',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#333',
  },
  countDisplay: {
    fontSize: '5rem',
    fontWeight: 'bold',
    margin: '2rem 0',
    transition: 'color 0.3s ease',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',   
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
   button1: {
    padding: '12px 24px',
    fontSize: '1rem',    
    backgroundColor: '#4caed6',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
   button2: {
    padding: '12px 24px',
    fontSize: '1rem',    
    backgroundColor: 'hotpink',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  
  resetButton: {
    padding: '12px 24px',
    fontSize: '1rem',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }
};

export default App;


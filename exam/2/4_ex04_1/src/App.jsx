import React, { useState } from 'react'
import './App.css'

export default function App() {

  // 폼데이터 상태관리 - 사용자 입력값   (초기화)
  const [formData, setFormData] = useState({
    email:"",
    password:"",
    confirmPassword:"",
    name:"",
    phone:"",
  });

  
  const [touched, setTouched] = useState({
    email:false,
    password:false,
    confirmPassword:false,
    name:false,
    phone:false,
  });

  // 비밀번호 보기 / 숨기기 상태 
  const [showPassword, setShowPassword] = useState(false);  

  // 유효성 검사 함수들
  const validateEmail = (email) => {   //
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;      
    return emailRegex.test(email);   
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password); 
  };

  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  //전화번호 추가  
  const validatePhone = (e) => {
    const cleaned = e.replace(/-/g, '');
    const phoneRegex = /^01[0-9]{8,9}$/;    
    return phoneRegex.test(cleaned);
  };



  const getErrors = () => {
    const errors = {}
    if(touched.email && !validateEmail(formData.email)){  
      errors.email = '올바른 이메일 형식이 아닙니다.';
    }

    if(touched.password && !validatePassword(formData.password)){
      errors.password = '비밀번호는 8자 이상, 영문+숫자를 포함해야 합니다.';
    }

    if(touched.confirmPassword && formData.password !== formData.confirmPassword){    
      errors.name = '비밀번호가 일치하지 않습니다.';
    }

    if(touched.name && !validateName(formData.name)){
      errors.name = '이름은 2자 이상이어야 합니다.';
    }

    if(touched.phone && !validateName(formData.phone)){
      errors.phone = '올바른 전화번호 형식이 아닙니다.';
    }
    return errors;

  };
  const errors = getErrors();


  // 폼 유효성 검사(모든 필드가 유효한지)
  const isFormValid = () => {
    return (
      validateEmail(formData.email) &&
      validatePassword(formData.password) &&
      formData.password === formData.confirmPassword &&
      validateName(formData.name) &&
      validatePhone(formData.phone)
    );
  };

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({      
      ...formData,   
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if(isFormValid()){   
      alert(`회원가입 성공!!\n\n이름: ${formData.name}\n이메일: ${formData.email}\n전화번호: ${formData.phone}`)
      console.log('회원가입 데이터', formData);

      // 폼 초기화
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        phone:'',
      });
      setTouched({
        email: false,
        password: false,
        confirmPassword: false,
        name: false,
        phone:false,
      });
    }
  }



  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h1 style={styles.title}>회원가입</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          {/* 이메일 */}
          <div style={styles.formGroup}>
            <label htmlFor="" style={styles.label}>이메일 *</label>
            <input 
              type="email" 
              name='email' 
              value={formData.email} 
              onChange={handleChange} 
              onBlur={handleBlur}
              style={{
                ...styles.input,
                borderColor:errors.email ? "#dc3545" : "#cde8f3", 
              }}
              placeholder='exemple@email.com'               
            />
            {errors.email && (
              <p style={styles.errorText}> ❌ {errors.email}</p>
            )}
            {touched.email && !errors.email && formData.email &&(
              <p style={styles.successText}> ✔ 올바른 이메일 형식입니다</p>
            )}
          </div>

          {/* 비밀번호 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>비밀번호 *</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  ...styles.input,
                  borderColor: errors.password ? '#dc3545' : '#cde8f3'
                }}
                placeholder="8자 이상, 영문+숫자"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.toggleButton}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            {errors.password && (
              <p style={styles.errorText}>❌ {errors.password}</p>
            )}
            {touched.password && !errors.password && formData.password && (
              <p style={styles.successText}>✔ 안전한 비밀번호입니다</p>
            )}
          </div>

          {/* 비밀번호 확인 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>비밀번호 확인 *</label>
            <input 
              type="password" 
              name='confirmPassword' 
              placeholder='비밀번호재입력' 
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                ...styles.input,
                borderColor: errors.password ? '#dc3545' : '#cde8f3'
              }}              
            />

            {errors.confirmPassword && (
              <p style={styles.errorText}>❌ {errors.confirmPassword}</p>
            )}
            {touched.confirmPassword && !errors.confirmPassword && formData.confirmPassword && (
              <p style={styles.successText}>✔ 비밀번호가 일치합니다.</p>
            )}
          </div>

          {/* 이름 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>이름 *</label>
            <input 
              type="text" 
              name='name' 
              placeholder='홍길동'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.name}
              style={{
                ...styles.input,
                borderColor: errors.name ? '#dc3545' : '#cde8f3'
              }}             
            />

            {errors.name && (
              <p style={styles.errorText}>❌ {errors.name}</p>
            )}
            {touched.name && !errors.name && formData.name && (
              <p style={styles.successText}>✔ 유효한 이름입니다</p>
            )}
          </div>


          {/* 전화번호 추가 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>전화번호 *</label>
            <input 
              type="tel" 
              name='phone' 
              placeholder='전화번호'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.phone}
              style={{
                ...styles.input,
                borderColor: errors.phone ? '#dc3545' : '#cde8f3'
              }}              
            />

            {/* 에러 / 성공 메시지 */}
            {errors.phone && (
              <p style={styles.errorText}>❌ {errors.phone}</p>
            )}
            {touched.phone && !errors.phone && formData.phone && (
              <p style={styles.successText}>✔ 올바른 전화번호입니다.</p>
            )}
          </div>


          {/* 제출버튼 */}
          <button 
            type='submit' 
            disabled={!isFormValid()}
            style={{
              ...styles.submitButton,
              backgroundColor: isFormValid() ? '#6099e8' : '#afdcee',
              cursor: isFormValid() ? 'pointer' : 'not-allowed'
            }}
          >가입하기</button>
        </form>
      </div>
    </div>
  )
}

// 객체 스타일
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',    
    background: 'linear-gradient(135deg, #c0e3f1,  #b6bbec)',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  formCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '2.5rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',    
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '2rem',
    fontSize: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.5rem',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '0.95rem',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    border: '2px solid #c0e3f1',
    borderRadius: '5px',
    outline: 'none',
    transition: 'border-color 0.3s',
    color:'#333',
  },
  passwordContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  toggleButton: {
    position: 'absolute',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
  errorText: {
    color: '#dc3545',
    fontSize: '0.875rem',
    marginTop: '0.5rem',
    margin: '0.5rem 0 0 0',
  },
  successText: {
    color: '#6099e8',
    fontSize: '0.875rem',
    marginTop: '0.5rem',
    margin: '0.5rem 0 0 0',
  },
  submitButton: {
    padding: '14px',
    fontSize: '1.1rem',
    color: 'white',    
    border: 'none',
    borderRadius: '5px',
    marginTop: '1rem',
    transition: 'background-color 0.3s',
    fontWeight: 'bold',
  }
};

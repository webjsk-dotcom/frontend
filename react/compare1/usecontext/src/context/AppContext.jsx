import React, { createContext, useContext, useState } from 'react'

// count와 user 를 어디서나 사용할 수 있게한다.
// context 생성
const AppContext = createContext();
// 전역저장소(전체공유저장소)


// context Provider 컴포넌트
export default function AppProvider({children}) {
  // 전역상태를 실제로 담아 두는 컴포넌트
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: '홍길동',
    age: 25,
  });

  // user 업데이트 함수 2개
  const updateUserName = (name) => setUser({...user, name});
  // 기존의 user를 펼쳐 놓고 name 변경
  const updateUserAge = (age) => setUser({...user, age});

  // count 조작할 수있는 함수 3개
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  // 전역으로 공유할 값들 - value 객체
  // 이객체 안에 있는 모든값들이 앱전체 컴포넌트에서 직접사용가능
  const value = {
    count,
    user,
    incrementCount,
    decrementCount,
    resetCount,
    updateUserName,
    updateUserAge,
  }

  // Provider 로 감싸서 value 전달 -> children= 이 provider감싼 모든 컴포넌트
  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}

// Custom Hook for using context
// 전역 데이터를 꺼내쓰는 전용훅 -> 어디서든 전역상태를 가져올 수 있음
export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}


import React, { useState } from 'react'

export default function Counter() {

  const [number,setNumber] = useState(0);
  //동적 state 상태 를 관리 하는 useState   , 훅
  //number 현재값

  const onIncrease = () =>{  //익명함수
    // console.log(+1);
    // setNumber(number + 1);
    // setNumber(number + 1);
    // 상태가 업데이트가 연속으로 일어나는 경우, 비동기적으로 업데이트 되면 예기치 않는 값이 나올수있음.
    setNumber(prevNumber => prevNumber+1);
    setNumber(prevNumber => prevNumber+1);
  }
  const onDecrease = () => {
    // console.log(-1);
    // setNumber(number - 1);
    // setNumber(number - 1);
    // 함수형 업데이트
    setNumber(prevNumber => prevNumber-1);
    setNumber(prevNumber => prevNumber-1);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

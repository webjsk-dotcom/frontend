import React, { useState } from 'react'

export default function InputSample1() {
  const [inputs, setInputs] = useState({
    name:'',
    nickname:'',
  });

  const {name, nickname} = inputs; //비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const {value, name} = e.target; //e.target 에서 name과 value 를 추출
    setInputs({
      ...inputs, //기존의 input 객체를 복사한뒤 
      [name] : value // name키(nickname)를 가진 값을 value 로 설정
    });
  }
  const onReset = () => {
    setInputs({
      name:'',
      nickname:''
    });
    // 리액트에서 객체를 업데이트하게 될떄 기존 객체를 직접수정하면 안되고,
    // 새로운 객체를 만들어서, 새 객에에 변화를 주어야한다.
  }

  return (
    <div>
      <input name="name" placeholder='이름' onChange={onChange} value={name} />
      <input name="nickname" placeholder='닉네임' onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {/* {이름} (닉네임) */}
        {name} ({nickname})
      </div>
    </div>
  )
}

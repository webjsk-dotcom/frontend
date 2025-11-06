import React, { useState, useRef } from 'react'
import './TodoEditor.css';

export default function TodoEditor({onCreate}) {
  const[content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
    // console.log(e.target.value);
    //키보드로 실시간으로 입력사항을 content에 저장
  };

  // enter했을떄
  const onKeyDown = (e) => {
    if(e.keyCode === 13){
      onSubmit();
    }
  }

  const onSubmit = () => {
    if(!content){    //아무것도 없으면 커서 깜박거리고 나와
      inputRef.current.focus();
      return;
      // 내용이 없으면 다시 인풋창에 클릭
    }
    onCreate(content);
    setContent("");  //초기화 빈문자
  }

  return (
    <div className='TodoEditor'>
      <h4>새로운 Todo 작성하기 🖊 </h4>
      <div className='editor_wrapper'>
        <input 
        placeholder='새로운 Todo...'
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
}

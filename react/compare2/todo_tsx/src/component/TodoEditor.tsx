import { useState, useRef, type ChangeEvent, type KeyboardEvent } from "react";
import "./TodoEditor.css";

// TodoEditor가 받아야 할 props 타입 정의
interface TodoEditorProps {
  onCreate : (content:string) => void; // return 없음(반환값없음)
}
// TodoEditor 컴포넌트는 반드시 onCreate 라는 함수를 props 로 받아야하며,
// 그 함수는 String 타입의 내용을 받아서 실행되고, 반환값은 없다.

export default function TodoEditor({onCreate}: TodoEditorProps) {
  const[content, setContent] = useState<string>("");
  // useState<string>("") content라는 상태(state)를 문자열 형태로 생성, 초기값은 빈문자열
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeContent = (e: ChangeEvent<HTMLInputElement>) =>{ //({ChangeEvent하고있다 일일이 구체적으로 알려줘야함})
    // TypeScript에서는 e타입 자동 추론 못함
    setContent(e.target.value);
    //console.log(e.target.value);
    //키보드로 실시간으로 입력사항을 content에 저장
  };
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode == 13){
        onSubmit();
    }
  };
  const onSubmit = () =>{
    if(!content){
      inputRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent("");    
  }

  return (
    <div className='TodoEditor'>
      <h4>새로운 Todo 작성하기 ✏️ </h4>
      <div className="editor_wrapper">
        <input 
        placeholder="새로운 Todo..." 
        value={content} 
        onChange={onChangeContent} 
        onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
}

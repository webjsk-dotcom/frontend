import React, { useState,useRef } from 'react'
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

const mockTodo = [
  {
    id:0,
    isDone: false,
    content: "React 공부하기",
    // createDate: new Date().getTime(),
    createdDate: new Date().getTime(),
  },
  {
    id:1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id:2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
]

export default function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1; 
  };
  
  const onUpdate = (targetId) =>{
    // targetId 는 클릭된 Todo 고유 id로 전달
    setTodo(todo.map((it)=>{
      // if(it.id === targetId){ //순회하면서 기존 it.id 와 targetId 같은지 확인
      //   return {...it, //전개연산 기존다른속성(content,date,createdDate)등은 유지
      //     isDone:!it.isDone} //isDone 값을 반전(false->true, true->false)반전
      // }else{
      //   return it;   
      // } 아래 삼항 한줄로 줄일수있아 
      return it.id === targetId ? {...it, isDone : !it.isDone} : it
      
      //기존상태가 {id:1, content:"빨래하기",isDone:false} //기존
      //기존상태가 {id:1, content:"빨래하기",isDone:false} //update 실행후
    }))
  }

  //삭제
  const onDelete = (targetId) =>{
    setTodo(todo.filter((it) => it.id !== targetId));
  }


  return (
    <div className='App'>
      <Header/>
      <TodoEditor onCreate = {onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}


//return {...it,isDone:!it.isDone} 
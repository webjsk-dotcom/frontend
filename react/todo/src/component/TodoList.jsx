import React from 'react'
import './TodoList.css';
import TodoItem from './TodoItem';

export default function TodoList({todo}) {
  return (
    <div className='TodoList'>
      <h4>Todo List 🌱</h4>
      <input className='searchbar' placeholder='검색어를 입력하세요' />
      <div className='list_wrapper'>
        {/* <TodoItem/>
        <TodoItem/>
        <TodoItem/>  아래map으로 돌리기 */}
        {todo.map((it)=>(   //(it) 변수이름 아무거나
          // <div>{it.content}</div>
          <TodoItem key={it.id} {...it} />
          // <TodoItem key={it.id} id={it.id} content={it.content} isDone={it.isDone} createdDate={it.createdDate} />  풀어씀   
        ))}
        {/* ...it 이부분은 전개연산자(Spread Operator) 스프레드 */}
        {/* 객체의 속성을 펼쳐서 자식 컴포넌트 (TodoItem)로 전달하는 역할 */}
      </div>
    </div>
  )
}

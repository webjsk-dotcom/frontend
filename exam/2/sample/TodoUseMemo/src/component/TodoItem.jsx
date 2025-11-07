import React from 'react'
import './TodoItem.css';


export default function TodoItem({id,content,isDone,createdDate,onUpdate,onDelete}) {
// 구조분해 할당 onUpdate 추가 
  const onChangeCheckbox = () =>{
    onUpdate(id);
  }
  const onClickDelete = () =>{
    onDelete(id);  //내가 실행한 id를 실어서 보내줌
  }

  return (
    <div className='TodoItem'>
      <div className='checkbox_col'>
        <input type='checkbox' checked={isDone}
        onChange={onChangeCheckbox} 
        //체크했을때 호출할 함수 onChangeCheckbox 는
        //onUpdate 를 호출하고 인수는 현재클릭한 할일 아이템 id 를 전달
        />
      </div>
      <div className='title_col'>{content}</div>
      <div className='date_col'>
        {new Date(createdDate).toLocaleDateString()}</div>
      <div className='btn_col'>
        <button onClick={onClickDelete}>삭제</button>
        {/* {new Date(createdDate).toLocaleDateString()} */}
      </div>
    </div>
  )
}
{/* <div className='title_col'>할 일{content}</div> */}
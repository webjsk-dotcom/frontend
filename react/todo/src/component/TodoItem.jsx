import React from 'react'
import './TodoItem.css';

export default function TodoItem({id,content,isDone,createdDate}) {
  return (
    <div className='TodoItem'>
      <div className='checkbox_col'>
        <input type='checkbox' checked={isDone} />
      </div>
      <div className='title_col'>{content}</div>
      <div className='date_col'>{new Date().toLocaleDateString()}</div>
      <div className='btn_col'>
        {/* <button>삭제</button> */}
        {new Date(createdDate).toLocaleDateString()}
      </div>
    </div>
  )
}
{/* <div className='title_col'>할 일{content}</div> */}
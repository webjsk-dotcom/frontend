import React, { useEffect } from 'react'
import User from './User'

export default function UserList2({users, onRemove, onToggle}) {
  
  useEffect(() => { //마운트됨
    console.log('컴포넌트가 화면에 나타남');
    return() => { //언마운트될때(사라질때 실행)->클린업함수
      console.log('컴포넌트가 화면에서 사라짐');
      // return() => {}; 소멸 클린업
    }
  },[]);

  return (
    <div>
      {/* <User user={users[0]}/>
      <User user={users[1]}/>
      <User user={users[2]}/> */}
      {users.map(user=>(
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  )
}

// UserList2({users, onRemove(추가)})
// onRemove={onRemove} 삭제부분 추가
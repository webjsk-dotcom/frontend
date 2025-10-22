import React, {useEffect} from 'react'

export default function User({user, onRemove, onToggle}) {

  useEffect(() => { //마운트됨
    console.log('user 값이 설정됨');
    console.log(user); 
    return() => { //언마운트될때(사라질때 실행)
      console.log('user 가 바뀌기 전..');
      console.log(user); 
    }
  },[user]);

// [user] deps 의존성 배열  17.pdf

  return (
    <div>
      <b style={{
        cursor:'pointer',
        color:user.active ? 'green' : 'black'
      }} onClick={() => onToggle(user.id)}>
        {user.username}</b>

      <span>({user.email})</span>

      <button onClick={()=> onRemove(user.id)}>삭제</button> {/* 삭제버튼 */}
    </div>
  )
}

// 실제 뿌려주는 역할
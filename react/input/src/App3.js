import React, { useRef, useState } from 'react'
import UserList2 from './UserList2'
import CreateUser from './CreateUser';


export default function App() {

  const [inputs,setInputs] = useState({
    username:'',
    email:''
  });

  // inputs 상태 : 사용자이름과 이메일을 객체형태 관리
  const {username, email} = inputs;
  const onChange = (e) => {  //input에 변화가 있을때 호출
    const{name, value} = e.target; //e.target  [name] input의 name속성에 따라
    // username 또는 email 키를 동적으로 지정
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  // users : 현재까지 등록된 사용자 객체들의 배열관리 - 초기사용자는 3명
  const [users, setUsers] = useState( [
    {
      id:1,
      username:'velopert',
      email:'publick.velopert@gmail.com',
      active:true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active:false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active:false
    }
  ]);

  const nextId = useRef(4);  //새로생성될 Id값을 관리, (새로운항목추가)
  const onCreate = () => {
    //나중에 구현할 배열에 항목 추가하는 로직
    const user = {
      id : nextId.current, //useRef 값사용 id부여
      username,
      email
    };
    setUsers([...users, user]);
    // 기존에  users를 불러오고(복사하고), 새로만든 user를 추가한다.

    // 초기화
    setInputs({
      username:'',
      email:''
    });
    nextId.current += 1; //다음 id증가    //current현재
  }


  //onRemove  삭제부분  - 삭제는 없음
  const onRemove = id =>{
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));  //같지 않은애만 골라내라
  }

  //id 클릭했을때 번갈아가면서 색바꾸기
  const onToggle = id =>{
    // 1. setUsers를 호출하여 users 상태를 업데이트 시작
    setUsers(
      //2. 기존의 users 배열을 순회하여 새로운 배열 생성
      users.map(user =>
        //3. 현재 순회중인 user.id 가 전달받은 id가 일치하는지 확인
        user.id === id ? {...user, active: !user.active } : user
      )
    );
  };
//4. 일치하면(O) 해당 user 객체의 active 속성만 토글하여 새로운 객체를 생성
//일치하지 않으면(X) 해당 user객체는 그대로 반환
//active: !user.active -> active 값을 반대로 뒤집기 true -> false 로 false -> true


 // 👇 이 부분이 새로 추가된 테스트용 state입니다.
  const [visible, setVisible] = useState(true);


  return (
    <div>
      <button onClick={() => setVisible(!visible)}> {/* !visible<-false */}
        {visible ? 'UserList 숨기기' : 'UserList 보이기'}
      </button>

      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        // 함수전달
      />
      {/* <UserList2 users={users} onRemove={onRemove} onToggle={onToggle} />  */}
      {/* <UserList2 users={users}/> 실제내용은 여기로 들어간다 */}
      {visible && (
        <UserList2 users={users} onRemove={onRemove} onToggle={onToggle} />
      )}
    </div>
  )
}

// App(state) -> props(전달) -> CreateUser(input) -> 이벤트발생 -> app의 setState()호출

// 사용자입력 -> CreateUser(input)에서 onChange 발생 -> App의 onChange함수 실행 -> 
// App의 state변경(setInputs) -> 새로운 props가 CreateUser로 전달 -> 화면이 최신상태로 반영




// | 구분               | 역할                                     |
// | ------------      | -------------------------------------- |
// | `App`             | 상태(state)와 이벤트 처리 로직을 가짐               |
// | `CreateUser`      | 입력 UI를 렌더링하고, 이벤트 발생 시 부모(App)의 함수를 호출 |
// | 이벤트 전달 방식    | “함수를 props로 전달”하는 것                    |
// | 데이터 흐름        | 부모 → 자식 (props), 자식 → 부모 (함수 호출)       |
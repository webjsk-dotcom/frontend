import React, { useMemo, useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

export default function TodoList({todo, onUpdate, onDelete}) {

  //검색부분
  const [search,setSearch] = useState("");
  // useState 리액트훅을 만든다. - search 검색단어를 관리
  const onChangeSearch = (e) => {
    setSearch(e.target.value); //클릭해서 글씨를 쓰는값(글씨를 쓰고있는상태)
    console.log(e.target.value);
    // 검색폼의 value (타이핑치는 글자) State 변수 search(검색단어)를 설정
  }
  const getSearchResult = () =>{
    return search === "" ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
    // search === "" ? todo 검색단어가 없으면 todo prop 자체를 리턴
    // 검색단어가 있으면 it 항목에 search에 저장되있는 (단어) 포함되 있으면 it(레코드)를 리턴
  }

  const analyzeTodo = useMemo(() => {
    console.log("몇번호출될까요!");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
    
 
  // const filteredTodos = getFilteredData();
  const {totalCount, doneCount, notDoneCount} = analyzeTodo;

  return (
    <div className='TodoList'>
      <h4>Todo List 🌱</h4>

      <div>
        <div>총개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>

      <input 
      className='searchbar' 
      placeholder='검색어를 입력하세요' 
      onChange={onChangeSearch}
      // 검색폼의 onChange 이벤트 핸들러 onChangeSearch 만듬
      value={search}
      />

      <div className='list_wrapper'>
        {/* <TodoItem/>
        <TodoItem/>
        <TodoItem/>  아래map으로 돌리기 */}
        {getSearchResult().map((it)=>(   //(it) 변수이름 아무거나
        // getSearchResult() 함수 호출해서 결과값을 map으로 반복

          // <div>{it.content}</div>
          <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete} />
          // <TodoItem key={it.id} id={it.id} content={it.content} isDone={it.isDone} createdDate={it.createdDate} />  풀어씀   
        ))}
        {/* ...it 이부분은 전개연산자(Spread Operator) 스프레드 */}
        {/* 객체의 속성을 펼쳐서 자식 컴포넌트 (TodoItem)로 전달하는 역할 */}
      </div>
    </div>
  )
}
//todo - 데이터 변경시에만 usememo가 실행

//함수를 (Memoization) 해서 불필요하게 다시 생성되진않게 하는 리액트 훅
//컴포넌트가 다시 렌더링될때 함수를 새로 만들지 않도록 캐싱하는 기능




//----------------------------------------------------------------
// {todo.map((it)=>( -> 함수를 돌려서{getSearchResult().map((it)=>(

// ① 함수 getSearchResult는 현재 입력한 검색어인 search가 빈 문자열("")이면 todo를 그대로 반환하고, 그렇지 않으면 todo 배열에서 search의 내용과 일치하는 아이템만 필터링해 반환합니다.  

// 대소문자 
// return search === "" ? todo : todo.filter((it) => it.content.includes(search));
// return search === "" ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));  대소문자 구별되기때문에 toLowerCase() 포함하면 찾아줌

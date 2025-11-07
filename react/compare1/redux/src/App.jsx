import MainContent from "./components/MainContent";
import Header from "./components/Header";
import './App.css';

export default function App() {  
  return (
    <div className="app">
      <Header />
      <MainContent />
    </div>
  );
}

// redux 란?
// 앱전체가 공유하는 데이터 창고
// 어디서든 데이터를 읽고(useSelector) 변경 (dispathc) 할수 있다.

// 언제사용?
// Props를 3단계이상 전달, 컴포넌트 50개이상
// 핵심개념
// Store(창고) + useSelector(읽기) + dispatch(쓰기)


$(function(){
  $('.m_menu li ul').css('display','none');
  // $('.sub').css('display', 'none');
  // $('.sub').hide();

  //$('.sub').eq(0).show();
  //.sub중 첫번째것만 보여라


  //$('.m_menu li:nth-child(1) ul').css('display','block');
  //$('.m_menu li:nth-child(1) ul').show();
  //$('.m_menu li:eq(0) ul').show();
  //$('.m_menu li:first ul').show();

  $('.m_menu>li>a').on('click',function(e){
    e.preventDefault(); //클릭방지
    //.m_menu 안에 li자식 a 태그를 클릭하면 
    var status = $(this).next('.sub').css('display'); //display 상태가 none인지 block 인지
    // 클릭한 a 태그 담에 있는 요소중 클래스가 sub인 요소의 display 속성값을 가져와서
    // status 저장 none이면 현재  sub가 닫혀있는 상태 block 현재 서브가 열린상태
    // alert(status);
    if(status === 'none'){
      $('.sub').slideUp();
      $(this).next('.sub').slideDown();
    }else{
      $('.sub').slideUp();
    }
    // return false; //클릭방지
  });
});
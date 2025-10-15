$(function(){

  //처음 시작할때 부터 글자 슬라이드 적용하기 위해
  setTimeout(function(){ //첫번째 한번실행 
    $('.slider li .text0').addClass('on');
    $('.slider li .atext0').addClass('on');
  },500);

  let bx = $('.slider').bxSlider({
    auto:true,
    controls:false,
    pager:false,
    mode:'fade',
    pause:5000,
    onSlideBefore:function(){
      
    },
    onSlideAfter:function(){ //
      let k = bx.getCurrentSlide(); //현재 슬라이드번호
      $('.slider li').find('h2').removeClass('on');
      $('.slider li').find('p').removeClass('on');
      $('.slider li .text' + k).addClass('on');
      $('.slider li .atext' + k).addClass('on');
      // + 더해서 k로 쉬었다가 두번째부터 실행하므로 위 한번 실행후
    },
  });


  let a1 = $('.s2_title img').offset().top;
  // 이미지
  let a2 = $('.s2_title h2').offset().top;
  // 제목
  let a3 = $('.s2_title p').offset().top;
  // 내용
  let a4 = $('.s2_table li').offset().top;
  console.log(a1,a2,a3,a4);

  $(window).scroll(function(){
    let sct = $(this).scrollTop();

    if(a1 <= sct + 700){
      $('.s2_title img').addClass('slide');
    }
    if(a2 <= sct + 700) {
      $('.s2_title h2').addClass('slide');
    }
    if(a3 <= sct + 700) {
      $('.s2_title p').addClass('slide');
    }
    if(a4 < sct + 700) {
      $('.s2_table li').eq(0).addClass('slide');
      setTimeout(function() {  //한번만실행setTimeout
        $('.s2_table li').eq(1).addClass('slide')
      },300);
      setTimeout(function () {  
        $('.s2_table li').eq(2).addClass('slide')
      },600);
      setTimeout(function () {  
        $('.s2_table li').eq(3).addClass('slide')
      },900);
      
    }
  });



});


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



// s2
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


// s3
  let b1 = $('.s3_title img').offset().top;
  // 이미지
  let b2 = $('.s3_title h2').offset().top;
  // 제목
  let b3 = $('.s3_title p').offset().top;
  // 내용
  let b4 = $('.s3_table li').offset().top;
  console.log(b1,b2,b3,b4);

  $(window).scroll(function(){
    let sct2 = $(this).scrollTop();

    if(b1 <= sct2 + 700){
      $('.s3_title img').addClass('slide');
    }
    if(b2 <= sct2 + 700) {
      $('.s3_title h2').addClass('slide');
    }
    if(b3 <= sct2 + 700) {
      $('.s3_title p').addClass('slide');
    }
    if(b4 < sct2 + 700) {
      $('.s3_table li').eq(0).addClass('slide');
      setTimeout(function() {  //한번만실행setTimeout
        $('.s3_table li').eq(1).addClass('slide')
      },300);
      setTimeout(function() {  
        $('.s3_table li').eq(2).addClass('slide')
      },600);
      setTimeout(function() {  
        $('.s3_table li').eq(3).addClass('slide')
      },900);
      setTimeout(function() {
        $('.s3_table li').eq(4).addClass('slide')
      },1200);
    }
  });  




  
// s4
  let c1 = $('.s4_title img').offset().top;
  // 이미지
  let c2 = $('.s4_title h2').offset().top;
  // 제목
  let c3 = $('.s4_title p').offset().top;
  // 내용
  let c4 = $('.s4_table li').offset().top;
  console.log(c1,c2,c3,c4);

  $(window).scroll(function(){
    let sct3 = $(this).scrollTop();

    if(c1 <= sct3 + 700){
      $('.s4_title img').addClass('slide');
    }
    if(c2 <= sct3 + 700) {
      $('.s4_title h2').addClass('slide');
    }
    if(c3 <= sct3 + 700) {
      $('.s4_title p').addClass('slide');
    }
    if(c4 < sct3 + 700) {
      $('.s4_table li').eq(0).addClass('slide');
      setTimeout(function() {  //한번만실행setTimeout
        $('.s4_table li').eq(1).addClass('slide')
      },300);
      setTimeout(function() {  
        $('.s4_table li').eq(2).addClass('slide')
      },600);
      setTimeout(function() {  
        $('.s4_table li').eq(3).addClass('slide')
      },900);
    }
  }); 





});


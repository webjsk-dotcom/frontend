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

});


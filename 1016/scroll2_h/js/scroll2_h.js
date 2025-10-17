
$(function(){


  $(window).scroll(function(){
    let sct = $(this).scrollLeft();


    //s_top 위치숫자나타내기
    $('.s_Top').text(sct);

    
  //nav ul li menu color 이동하면서
    $('section > article').each(function(i){
      if (sct >= $('section > article').eq(i).offset().left) {
        $('nav ul li').removeClass('on');
        $('nav ul li').eq(i).addClass('on');

      }
    });


  });


  //nav ul li - menu color바꿈 (메뉴클릭했을때메뉴변화)
  $('nav ul li').click(function () {
    var i = $(this).index(); //li index번호구하기
    var offset_t = $('section > article').eq(i).offset().left;
    $('html,body').stop().animate({ scrollLeft: offset_t }, 1000);
    return false;
  });



}); //function
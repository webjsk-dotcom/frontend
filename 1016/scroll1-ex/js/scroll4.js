$(function(){

  //var f_top = 250;
  // var f_top = $('#float_div').offset().top;
  // alert(f_top);  250

  

  $(window).scroll(function(){
    let sct = $(this).scrollTop();

    //#float_div 따라다님 탑 250으로 멈춤
    // $('#float_div').stop().animate({top:f_top+sct},300);


    $('.s_Top').text(sct);
    if(sct>=450 && sct <= 1000){
      $('.left1').addClass('on');
    }else{
      $('.left1').removeClass('on');
    }


    if (sct >= 800 && sct <= 1000) {
      $('.right1').addClass('on');
    } else {
      $('.right1').removeClass('on');
    }


    $('.s_Top').text(sct);
    if(sct>=1300 && sct <= 2000){
      $('.left3-1').addClass('on');
    }else{
      $('.left3-1').removeClass('on');
    }

    if (sct >= 1750 && sct <= 2000) {
      $('.right3-1').addClass('on');
    } else {
      $('.right3-1').removeClass('on');
    }




    if(sct >= 2500){
      // $('.s4_1').addClass('active')
      // $('.s4_2').addClass('active')
      // $('.s4_3').addClass('active')
      // $('.s4_4').addClass('active')
      $('.s4_1').addClass('active')
      setTimeout(function(){  //한번만실행setTimeout
        $('.s4_2').addClass('active')
      },400);
      setTimeout(function () { 
        $('.s4_3').addClass('active')
      },800);
      setTimeout(function () {
        $('.s4_4').addClass('active')
      },1200);

    }

  //scroll 휠로 내려갈때 메뉴변화
    // if(sct >= $('.container > div').eq(0).offset().top){
    //   $('nav ul li').removeClass('on');
    //   $('nav ul li').eq(0).addClass('on');

    //   $('#float_div ul li').removeClass('on');
    //   $('#float_div ul li').eq(0).addClass('on');
    // }
    // if(sct >= $('.container > div').eq(1).offset().top){
    //   $('nav ul li').removeClass('on');
    //   $('nav ul li').eq(1).addClass('on');

    //   $('#float_div ul li').removeClass('on');
    //   $('#float_div ul li').eq(1).addClass('on');
    // }
    // if(sct >= $('.container > div').eq(2).offset().top){
    //   $('nav ul li').removeClass('on');
    //   $('nav ul li').eq(2).addClass('on');

    //   $('#float_div ul li').removeClass('on');
    //   $('#float_div ul li').eq(2).addClass('on');
    // }
    // if(sct >= $('.container > div').eq(3).offset().top){
    //   $('nav ul li').removeClass('on');
    //   $('nav ul li').eq(3).addClass('on');

    //   $('#float_div ul li').removeClass('on');
    //   $('#float_div ul li').eq(3).addClass('on');
    // }
    // if(sct >= $('.container > div').eq(4).offset().top){
    //   $('nav ul li').removeClass('on');
    //   $('nav ul li').eq(4).addClass('on');

    //   $('#float_div ul li').removeClass('on');
    //   $('#float_div ul li').eq(4).addClass('on');
    // }


  
  // for (var i = 0; i < $('.container > div').length;i++){
  //   if(sct >= $('.container > div').eq(i).offset().top) {
  //     $('nav ul li').removeClass('on');
  //     $('nav ul li').eq(i).addClass('on');

  //     $('#float_div ul li').removeClass('on');
  //     $('#float_div ul li').eq(i).addClass('on');
  //   }

  // }

  $('.container > div').each(function(i){
    if (sct >= $('.container > div').eq(i).offset().top) {
      $('nav ul li').removeClass('on');
      $('nav ul li').eq(i).addClass('on');

      $('#float_div ul li').removeClass('on');
      $('#float_div ul li').eq(i).addClass('on');
    }
  });


  
    //nav올라갈때 메뉴 바뀜
    if(sct >= 300){
      $('nav').addClass('fixed');
    }else{
      $('nav').removeClass('fixed');
    }

  });




//nav ul li - menu color바꿈 (메뉴클릭했을때메뉴변화)
  $('nav ul li').click(function(){
    var i = $(this).index(); //li index번호구하기
    var offset_t = $('.container > div').eq(i).offset().top;
    $('html,body').stop().animate({scrollTop:offset_t},1000);
    // $('nav ul li').removeClass('on');
    // $('nav ul li').eq(i).addClass('on');
    return false;
  });


  //#float_div
  $('#float_div ul li').click(function(){
    var i = $(this).index(); //li index번호구하기
    var offset_t = $('.container > div').eq(i).offset().top;
    $('html,body').stop().animate({scrollTop:offset_t},1000);
    return false;
  });
  // offset_t 각각 클릭 지역변수이므로 같은 변수명 가능


  // mousewheel
  $('.container > div').mousewheel(function(event,d){
    console.log(d);  //똑같은수가 반복 위 1  아래 -1

    if (d>0) {  //휠 위로동작 감지(+1)  0보다 크면
      let preVal = $(this).prev().offset().top;
      $('html,body').stop().animate({scrollTop:preVal},1000,'easeOutBounce');
    }

    //크롬에서 jquery.easing.1.3.js 검색, easing(이징) 효과 모음 - jQuery 공작소
    // https://superkts.com/jquery/@easingEffects

    if(d<0){  //휠 아래로동작 감지(-1)  0보다 작으면
      let nextVal = $(this).next().offset().top;
      $('html,body').stop().animate({ scrollTop: nextVal }, 1000,'easeOutBounce');
    }

  });


  $("#popup").draggable();
  //드레그 기능


//popup
//나중에 pop= no를 넣어 하루동안 저장 예정
//처음에는 pop변수도 없고 no도 없음
  if($.cookie('pop')!=='no'){ 
    $('#popup').show();
    //쿠키 pop 변수에 no란 단어가 없다면 팝업을 보여준다.
  }
  $('#popup area:eq(0)').click(function(){
    $('#popup').fadeOut('fast');
    //닫기버튼 클릭하면 팝업을 서서히 숨긴다. 
  });

  $('#popup area:eq(1)').click(function () {
    $.cookie('pop','no',{expires:1}); //1하루동안
    $('#popup').fadeOut('fast');
    //닫기버튼 클릭하면 팝업을 서서히 숨긴다. 
  });



//#notice_wrap
  $('#notice_wrap').draggable();

  if ($.cookie('popup') == 'none') {
    $('#notice_wrap').hide();
  }
  //('popup')변수에 none이 저장되었으면
  //$('#notice_wrap') 을 숨겨라
  let chk = $('#expiresChk');

  // $('.closeBtn').on('click',function(){})
  $('.closeBtn').on('click',closePop)

  
  function closePop(){
    if(chk.is(':checked')){ //chk에 체크가 되있으면 
    $.cookie('popup','none',{expires:3}); 
    //쿠키 popup에 none을 가지고 3일의 기한을 가진다
    }

    $('#notice_wrap').fadeOut();
  }


  //is있다없다.  prop상태를 물어보는
  // 방법 2: .prop('checked')가 true인지 확인
  // if (chk.prop('checked')) {
    // ...
  // }


});


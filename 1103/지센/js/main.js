$(function(){

  // $('.mobile_tab,.transparency').click(function(){      
  //   $('.mobile_nav, .container,.transparency').toggleClass('active');     
  // });
  

// 샘
$(window).resize(function(){
  var w = $(this).width();
  console.log(w); //drag 할때마다 width size 보여줌

  if(w <= 850){  //850이상일때
  }else{
    if($('.mobile_nav').hasClass('active')){ //.mobile_nav가 활성되있으면
      $('.mobile_nav').removeClass('active');     
      $('.transparency').removeClass('active');     
      $('.container').removeClass('active'); 
      $('.mobile_nav .sub').css("display","none");
    }
  }
});

$(window).trigger('resize'); //현재 브라우저 사이즈보여줌
// 컴퓨터가 브라우저 켜자마자 한번 resize 명령을 실행

$(".nav ul").hover(function(){
  $(this).addClass('over');
},function(){
  $(this).removeClass('over');
});


$('.mobile_tab').click(function(){      
  $('.mobile_nav').addClass('active');     
  $('.transparency').addClass('active');     
  $('.container').addClass('active');     
});
$('.transparency').click(function(){
  $('.mobile_nav').removeClass('active');     
  $('.transparency').removeClass('active');     
  $('.container').removeClass('active'); 
  $('.mobile_nav .sub').css("display","none");
});


// $('.sub').hide();

// $('.mobile_nav>ul>li>a').on('click',function(){
//   if($(this).next('.sub').css('display') === 'none'){
//     $('.sub').slideUp(500);
//     $(this).next('.sub').slideDown(500);
//   }else{
//     $(this).next('.sub').slideUp(500);
//   }
//   return false;
// });

//sam
$('.mobile_nav>ul>li>a').on('click',function(){
  var k = $(this).next('.sub').css("display");
  if(k == "none"){
    $(".mobile_nav .sub").slideUp(300);
    $(this).next(".sub").slideDown(300);
  }else{
    $(".mobile_nav .sub").slideUp(300);
  }
return false;
});

    
}); //function e

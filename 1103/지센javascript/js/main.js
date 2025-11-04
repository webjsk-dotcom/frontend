
document.addEventListener('DOMContentLoaded',function(){


// jquery ----------
// $(window).resize(function(){
//   var w = $(this).width();
//   console.log(w); //drag 할때마다 width size 보여줌

//   if(w <= 850){  //850이상일때
//   }else{
//     if($('.mobile_nav').hasClass('active')){ //.mobile_nav가 활성되있으면
//       $('.mobile_nav').removeClass('active');     
//       $('.transparency').removeClass('active');     
//       $('.container').removeClass('active'); 
//       $('.mobile_nav .sub').css("display","none");
//     }
//   }
// });

// $(window).trigger('resize'); //현재 브라우저 사이즈보여줌
// 컴퓨터가 브라우저 켜자마자 한번 resize 명령을 실행


// javascript ----------
window.addEventListener('resize', function(){
  var w = window.innerWidth;
  
  if(w <= 850){
      
  }else{
    var mobileNav = document.querySelector('.mobile_nav');
    if(mobileNav && mobileNav.classList.contains('active')){
      mobileNav.classList.remove('active');
      
      var transparency = document.querySelector('.transparency');
      if(transparency) transparency.classList.remove('active');
      
      var container = document.querySelector('.container');
      if(container) container.classList.remove('active');
      
      var subs = document.querySelectorAll('.mobile_nav .sub');
      subs.forEach(function(sub){
          sub.classList.remove('active');
      });
    }
  }
});

// 초기 resize 이벤트 트리거
window.dispatchEvent(new Event('resize'));




// jQuery 임 ----------
// $(".nav ul").hover(function(){  
//   $(this).addClass('over');
// },function(){
//   $(this).removeClass('over');
// });
// .nav ul에 hover효과

// javascript 임  mouseenter(mouseover비슷) ----------
var navUls = document.querySelectorAll(".nav ul");

navUls.forEach(function(navUl){
  navUl.addEventListener('mouseenter',function(){
    this.classList.add('over');
  });

  navUl.addEventListener('mouseleave',function(){
    this.classList.remove('over');
  });
});



// jquery ----------
// $('.mobile_tab').click(function(){      
//   $('.mobile_nav').addClass('active');     
//   $('.transparency').addClass('active');     
//   $('.container').addClass('active');     
// });

// javascript ----------
//mobile_tab 클릭이벤트
var mobileTab = document.querySelector('.mobile_tab');

if(mobileTab){
  mobileTab.addEventListener('click',function(){
    var mobileNav = document.querySelector('.mobile_nav');
    if(mobileNav) mobileNav.classList.add('active');

    var transparency = document.querySelector('.transparency');
    if(transparency) transparency.classList.add('active');

    var container = document.querySelector('.container');
    if(container) container.classList.add('active');
  });
}



// jquery ----------
// $('.transparency').click(function(){
//   $('.mobile_nav').removeClass('active');     
//   $('.transparency').removeClass('active');     
//   $('.container').removeClass('active'); 
//   $('.mobile_nav .sub').css("display","none");
// });


// javascript ----------
// transparency 클릭이벤트
var transparency = document.querySelector('.transparency');

if(transparency){
  transparency.addEventListener('click',function(e){
    var mobileNav = document.querySelector('.mobile_nav');
    if(mobileNav) mobileNav.classList.remove('active');

    if(transparency) transparency.classList.remove('active');

    var container = document.querySelector('.container');
    if(container) container.classList.remove('active');

    var subs = document.querySelectorAll('.mobile_nav .sub'); 
    subs.forEach(function(sub){
      sub.classList.remove('active');
      // 열려있으면 닫는다
    });

    e.preventDefault();
    return false;
  });
}



// jquery ----------
// $('.mobile_nav>ul>li>a').on('click',function(){
//   var k = $(this).next('.sub').css("display");
//   if(k == "none"){
//     $(".mobile_nav .sub").slideUp(300);
//     $(this).next(".sub").slideDown(300);
//   }else{
//     $(".mobile_nav .sub").slideUp(300);
//   }
// return false;
// });


// javascript ----------
// mobile_nav메뉴 클릭이벤트
var mobileNavLinks = document.querySelectorAll(".mobile_nav>ul>li>a");
    
mobileNavLinks.forEach(function(link){
  link.addEventListener('click',function(e){
    e.preventDefault();
    var subMenu = this.nextElementSibling;
    if(subMenu && subMenu.classList.contains('sub')){
      var isActive = subMenu.classList.contains('active');

      // 모든 서브메뉴 닫기
      var allSubs = document.querySelectorAll('.mobile_nav .sub');
      allSubs.forEach(function(sub){
        sub.classList.remove('active');
      });

      // 닫혀있었다면 열기
      if(!isActive){ //!isActive  t->f  f->t
        subMenu.classList.add("active");
      }      

    }
  });
});


}); // e

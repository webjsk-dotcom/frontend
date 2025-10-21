
$(function(){
  let current = 0;
  let slides = $('.slide');
  let dots = $('.pager-dot');
  let isPlaying = true;
  let interval = null;

  function showSlide(index){
    // slides.romoveClass('active');
    // slides.eq(index).addClass('active');
     slides.removeClass('active').eq(index).addClass('active');
     dots.removeClass('active').eq(index).addClass('active');
     current = index;
  }

  // 슬라이드가 끝까지 갔을 때 다시 처음으로 돌아오게 하려고 사용하는 거 나눈나머지 값이 0나오게 해서 다시 처음으로 돌아가게 하는것 % slides.length
  //current + 1 다음 슬라이드 인덱스
  function nextSlide(){
    let next = (current + 1) % slides.length;
    showSlide(next);
  }

  startAuto();
  // 자동슬라이드(재시동)
  function startAuto(){
    interval = setInterval(nextSlide,3000);
    isPlaying = true;
    $('.stop-btn').text('⏸');
  }


  // 슬라이드 정지
  function stopAuto(){
    clearInterval(interval);
    isPlaying = false;
    $('.stop-btn').text('▶');
  }

  // 일시정지/재생버튼
  $('.stop-btn').click(function(){
    // if(isPlaying  == true) 이렇게해도됨
    if(isPlaying){
      stopAuto();           
    }else{
      startAuto();            
    }
  });


  // dot 클릭이벤트
  dots.click(function(){
    let idx = $(this).index();
    showSlide(idx);
  });

});


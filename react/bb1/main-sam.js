$(function(){
    let current = 0;
    let slides = $('.slide');
    let dots = $('.pager-dot');
    let isPlaying = true;
    let interval = null;


    function showSlide(index){
        // slides.removeClass('active');
        // slides.eq(index).addClass('active');
        slides.removeClass('active').eq(index).addClass('active');
        dots.removeClass('active').eq(index).addClass('active');
        current = index;
    }

    function nextSlide(){
        let next = (current + 1) % slides.length;
        showSlide(next); 
    }

    startAuto();
    //자동슬라이드(재시동)
    function startAuto(){
        interval = setInterval(nextSlide,3000);
        isPlaying =true;
        $('$stop-btn').text('⏸');
    }



    //dot 클릭이벤트

   dots.click(function(){
        let idx = $(this).index();
        showSlide(idx);
   });

});
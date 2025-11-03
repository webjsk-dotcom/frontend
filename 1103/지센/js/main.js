$(function(){
  // $(".mobile_tab").click(function(){
  //   $(".mobile_nav").toggleClass(active);
  // })

  $('.mobile_tab').click(function(){
      var st = $(this).hasClass('active'); 
      
      if(st === false){
        // $(this).addClass('active');
        $('.mobile_nav').toggleClass('active');
        $('.mobile_tab').toggleClass('active');
      }else{
        // $(this).removeClass('active');
        $('.mobile_nav').toggleClass('active');
        $('.mobile_tab').toggleClass('active');
      }
    });


    // $('.sub').hide();

    $('ul>li>a').on('click',function(){
     if($(this).next('.sub').css('display') === 'none'){
        $('.sub').slideUp(500);
        $(this).next('.sub').slideDown(500);
      }else{
        $(this).next('.sub').slideUp(500);
      }
      return false;
    });

    
}); //function e

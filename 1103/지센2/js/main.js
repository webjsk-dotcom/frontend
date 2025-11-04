$(function(){
  $('.mobile_tab,.transparency').click(function(){      
    $('.mobile_nav, .container,.transparency').toggleClass('active');     
  });
  


    // $('.sub').hide();

    $('.mobile_nav>ul>li>a').on('click',function(){
     if($(this).next('.sub').css('display') === 'none'){
        $('.sub').slideUp(500);
        $(this).next('.sub').slideDown(500);
      }else{
        $(this).next('.sub').slideUp(500);
      }
      return false;
    });

    
}); //function e

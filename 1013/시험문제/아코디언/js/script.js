$(function () {
  $('dd').hide();
  $('dd').eq(0).show();
  $('dt').eq(0).addClass('selected');

  $('dt').click(function () {
    if ($(this).next('dd').css('display') === 'none') {
      $('dd').slideUp('slow');
      $(this).next().slideDown('slow');
      $('dt').removeClass('selected');
      $(this).addClass('selected');
    }
  });

});
$(function () {
  $(".tab_menu li").click(function () {
    var i = $(this).index();
    $(".tab_menu li").removeClass('on');
    $(".tab_menu li").eq(i).addClass('on');
    $(".tab_list div").removeClass('on');
    $(".tab_list div").eq(i).addClass('on');
  });
});
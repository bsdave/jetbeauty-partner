$(function () {
  $('html').addClass('js');

  $('.burger').click(function(){
    $(this).toggleClass('opened');
    $('.header__menu').toggleClass('opened');
  });

  $('.header__menu a').click(function () {
    $('.burger').toggleClass('opened');
    $('.header__menu').toggleClass('opened');
  });

  $('.open-modal').click(function () {
    $(`#${$(this).data().id}`).toggleClass('opened');
  });

  $('.close-modal').click(function () {
    $(this).parents('.modal-box').toggleClass('opened');
  });
});

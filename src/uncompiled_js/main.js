$(function () {
  $('html').addClass('js');

  $('.burger').click(function(){
    $(this).toggleClass('opened');
    $('.header__menu').toggleClass('opened');
  });

  $('.close-modal').click(function () {
    $(this).parents('.modal-box').toggleClass('opened');
  });

  $('.open-modal').click(function () {
    $(`#${$(this).data().modalId}`).toggleClass('opened');
  });
});

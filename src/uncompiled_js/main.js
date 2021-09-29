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

  new Swiper('.swiper', {
    spaceBetween: 15,
    slidesPerView: 3,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 5
      },
      992: {
        slidesPerView: 7
      },
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

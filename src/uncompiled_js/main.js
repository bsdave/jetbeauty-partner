$(function () {
  $('html').addClass('js');

  initializeRanges();

  $('.menu-button').click(function () {
    $('.header').addClass('opened');
  });

  $('.header-background').click(function () {
    $('.header').removeClass('opened');
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

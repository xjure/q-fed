$(function() {
  if(!Modernizr.svg) {
    $.each($('img[src$="svg"][data-png]'),
    function() {
      var element = $(this);
      element.attr('src', element.attr('data-png'));
    });
  }
});

$('a[href^="#"]').on('click', function(event) {
    $('body').removeClass('locked');

    $('.js_nav').removeClass('opened');
    $('.header__nav').removeClass('opened');

    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

window.onload = function () {
    aload();
};
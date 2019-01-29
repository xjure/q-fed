var artea = artea || {};

artea.nav = function() {

    var $nav = $('.js_nav');

    if (!$nav.length) {
        return;
    }

    var $body = $('body'),
        scrollDisabled = false,
        scrollTop;

    $body.on('click','.js_nav', function(){
        $(this).toggleClass('opened');
        $('.header__nav').toggleClass('opened');

        if( scrollDisabled ) {
            $body.removeClass('locked');
            $(window).scrollTop(scrollTop);
            scrollDisabled = false;
        } else {
            scrollTop = $(window).scrollTop();
            $body.addClass('locked').css({ top: -1 * scrollTop });
            scrollDisabled = true;
        }
    });
    
};

$(document).ready(function (){
    artea.nav();
});
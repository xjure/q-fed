var artea = artea || {};

artea.search = function() {

    var $search = $('.js_search');

    if (!$search.length) {
        return;
    }

    var $toggleSearch = $('.js_search'),
        $searchPopup = $('.search__overlay'),
        $body = $('body'),
        scrollDisabled = $body.hasClass('locked'),
        scrollTop;

    $toggleSearch.on('click', function(e) {
        $searchPopup.addClass('search__overlay--visible');

        $('.js_nav').removeClass('opened');
        $('.header__nav').removeClass('opened');
        
        setTimeout(function(){
            $('.search__input').focus();
        }, 400);


        scrollTop = $(window).scrollTop();
        $body.addClass('locked').css({ top: -1 * scrollTop });
        scrollDisabled = true;
    });


    $('.search__overlay').on('click', function(e) {
        $searchPopup.removeClass('search__overlay--visible');
        $('body').removeClass('locked');

        $body.removeClass('locked');
        $(window).scrollTop(scrollTop);
        scrollDisabled = false;
    });

    $('.search__input').click(function(e){
        e.stopPropagation();
    });
};

$(document).ready(function (){
    artea.search();
});
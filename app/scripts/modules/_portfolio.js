var artea = artea || {};

artea.portfolio = function() {

    var $portfolio = $('.portfolio__grid');

    if (!$portfolio.length) {
        return;
    }

    $portfolio.isotope({
        itemSelector: '.portfolio__item',
        percentPosition: true,
        masonry: {
            columnWidth: '.portfolio__sizer',
            horizontalOrder: true
        }
    });

    $('.portfolio__filters').on( 'click', '.portfolio__filters_item', function() {
        var filterValue = $(this).attr('data-filter');
        $portfolio.isotope({ filter: filterValue });

        $('.portfolio__filters_item').removeClass('active');
        $(this).addClass('active');
    });
};

$(document).ready(function (){
    artea.portfolio();
});
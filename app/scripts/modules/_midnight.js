var artea = artea || {};

artea.midnight = function() {

    var $midnight = $('.js_midnight');

    if (!$midnight.length) {
        return;
    }

    $('.header').midnight();
};

$(document).ready(function (){
    artea.midnight();
});
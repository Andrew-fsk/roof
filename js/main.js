$(document).ready(function () {
    setWrapPadding();

    $('.js-validation-field input[type="text"],.js-validation-field textarea, .js-validation-field input[type="password"]').on("blur", function () {
        $(this).val() ? $(this).parent().addClass('active') : $(this).parent().removeClass('active');
    }).each(function () {
        $(this).val() ? $(this).parent().addClass('active') : $(this).parent().removeClass('active');
        if($(this).attr("placeholder") && $(this).attr("placeholder").indexOf('*') != -1){
            var placeholder = $(this).attr("placeholder");
            $(this).next(".placeholder").text(placeholder);
        }
    });
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
});

function setWrapPadding(){
    $('.wrap').css('padding-top', $('header').innerHeight());
}

$(window).bind("load", function () {
    $("head").append('<link type="text/css" href="./css/sprites.min.css" rel="stylesheet" property="stylesheet">');
});

$(window).resize(function () {
    setWrapPadding();
});
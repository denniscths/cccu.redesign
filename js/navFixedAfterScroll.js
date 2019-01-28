var num = 90; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if (($(window).scrollTop() > num)&&($(window).width()>755)) {
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    }
});
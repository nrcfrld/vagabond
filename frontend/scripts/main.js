$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

$(document).ready(function () {
    // Animation on scroll init
    AOS.init();

    // Animation counting for statistic
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})
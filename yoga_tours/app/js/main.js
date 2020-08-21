$(function () {

    $('.center').slick({
        centerMode: true,
        centerPadding: '19%',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 159,
        arrows: false,
        infinite: true,
        waitForAnimate: false,
        responsive: [{
            breakpoint: 1000,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1,
                infinite:true,
                autoplay: true,
                dots:true,
            }
        },]
    });

    $('.single-item').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1000,
        infinite: true,
        waitForAnimate: true
    });

    $('.comment-slider__inner').slick({
        dots: true,
        infinite: true,
        arrows: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 900,
            settings: {
                arrows: false
            }
        },]
    });

});
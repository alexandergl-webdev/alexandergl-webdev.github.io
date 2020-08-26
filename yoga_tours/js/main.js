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

    var warranty = $('.warranty');
    var warrantyTop = warranty.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > warrantyTop) {
            $('.odessa').html('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10995.088929174251!2d30.7522938!3d46.4532099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631602f20d135%3A0x67f524cc7a42a404!2z0KLRg9GA0LDQs9C10L3RgtGB0YLQstC-ICLQn9C-0LXRhdCw0LvQuCDRgSDQvdCw0LzQuCEiINCT0L7RgNGP0YnQuNC1INGC0YPRgNGLLCDQu9GD0YfRiNC40LUg0YbQtdC90Ysg0L7RgiDQstGB0LXRhSDRgtGD0YDQvtC_0LXRgNCw0YLQvtGA0L7QsiDigJMgcG9laGFsaXNuYW1pLnVh!5e0!3m2!1sru!2sua!4v1597836768397!5m2!1sru!2sua"></iframe>');
            $('.kiev').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20326.78277489063!2d30.50711703196769!3d50.443934687481544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfd2daae29db%3A0x5a36714dd1f540c5!2z0J_QvtC10YXQsNC70Lgg0YEg0L3QsNC80Lg!5e0!3m2!1sru!2sua!4v1597837030517!5m2!1sru!2sua"></iframe>')
            $(window).unbind('scroll')
        }
    });
});